// import { FiSearch, FiUser, FiBookmark, FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';


export default function IconMenu() {
    const images = [
        { src: "/images/frame-2.0.png", alt: "Search icon" },
        { src: "/images/user-1.png", alt: "User profile icon" },
        { src: "/images/bookmark-5.png", alt: "Bookmark icon " },
        { src: "/images/shopping-bag.png", alt: "Shopping bag icon" },
    ];
    return (
        <div className="flex space-x-4 text-white ">
            {images.map((image, index) => (
                <div key={index}>
                    <Image
                        src={image.src}
                        height={24}
                        width={24}
                        alt={image.alt}
                        className='object-contain max-h-[24px] cursor-pointer'
                    />
                </div>

            ))}

        </div>
    );
};