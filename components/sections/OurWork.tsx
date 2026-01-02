import React, { useRef } from 'react';
import { Camera } from 'lucide-react';
import { GeneratedWebsite } from '../../types';
import EditableText from '../EditableText';

interface OurWorkProps {
    data: GeneratedWebsite['ourWork'];
    images: [string | null, string | null, string | null, string | null];
    brandColor: string;
    onUpdateData?: (newData: Partial<GeneratedWebsite['ourWork']>) => void;
    onUpdateImages?: (newImages: [string | null, string | null, string | null, string | null]) => void;
}

const ImageSlot: React.FC<{
    image: string | null;
    index: number;
    onImageChange: (index: number, base64: string) => void;
}> = ({ image, index, onImageChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageChange(index, reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden aspect-[4/3] relative group hover:shadow-md transition-shadow">
            {image ? (
                <>
                    <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
                    <div
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <div className="bg-white/90 p-3 rounded-full mb-2 shadow-lg transform group-hover:scale-110 transition-transform">
                            <Camera className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full">
                            Replace Image
                        </span>
                    </div>
                </>
            ) : (
                <div
                    className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div className="bg-gray-200 p-4 rounded-full mb-4">
                        <Camera className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-sm font-medium mb-3 text-center px-4">
                        Upload a real photo from your projects.
                    </p>
                    <button className="bg-black text-white font-bold text-xs px-4 py-2 rounded uppercase tracking-wider hover:bg-gray-800 transition-colors">
                        Insert Image
                    </button>
                </div>
            )}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />
        </div>
    );
};

const OurWork: React.FC<OurWorkProps> = ({ data, images, brandColor, onUpdateData, onUpdateImages }) => {
    const handleImageChange = (index: number, base64: string) => {
        if (onUpdateImages) {
            const newImages = [...images] as [string | null, string | null, string | null, string | null];
            newImages[index] = base64;
            onUpdateImages(newImages);
        }
    };

    return (
        <section className="py-20 bg-white max-sm:py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12 max-sm:mb-8">
                    <h2 className="text-[#1A1D2E] text-4xl font-extrabold mb-4 max-sm:text-3xl">
                        {onUpdateData ? (
                            <EditableText
                                value={data.title}
                                onChange={(v) => onUpdateData({ title: v })}
                            />
                        ) : (
                            data.title
                        )}
                    </h2>
                    <div className="text-gray-500 font-medium max-w-2xl mx-auto max-sm:text-sm">
                        {onUpdateData ? (
                            <EditableText
                                value={data.subtitle}
                                onChange={(v) => onUpdateData({ subtitle: v })}
                                multiline
                            />
                        ) : (
                            data.subtitle
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {images.map((image, idx) => (
                        <ImageSlot
                            key={idx}
                            image={image}
                            index={idx}
                            onImageChange={handleImageChange}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
