import React from 'react';
import Image from 'next/image';

export default function CategoryList() {
    const images = [
        { src: "/images/frame-1.png", title: "All Bags" },
        { src: "/images/frame-2.png", title: "Vanity Pouch" },
        { src: "/images/frame-3.png", title: "Tote Bag" },
        { src: "/images/frame-4.png", title: "Duffle Bag" },
        { src: "/images/frame-5.png", title: "Laptop sleeve" },
        { src: "/images/frame-6.png", title: "Messenger Bags" },
        { src: "/images/frame-7.png", title: "Slings Bgs" },
        { src: "/images/frame-8.png", title: "Handbags" },
        { src: "/images/frame-9.png", title: "Bucket Bag" },
    ];
    return (
        <div className="flex max-w-[1280px] items-center justify-between m-4 mx-auto cursor-pointer" >
            {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center  space-y-4">
                    <Image className="max-h-[90px]"
                        src={image.src}
                        alt={image.title}
                        width={90}
                        height={90} />
                    <p className="text-[#E5DFD9]">{image.title}</p>
                </div>
            ))}

        </div>
    );
}
