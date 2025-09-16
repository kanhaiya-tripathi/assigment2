import React from 'react';
import Image from 'next/image';

export default function CategoryHeader({ left = "Bags", right = "Backpacks", count = 13 }) {
    return (
        <div className='flex item-center justify-between mx-auto max-w-[1280px] m-6'>
            <div className="flex items-center space-x-2">
                <span className=" text-[#E5DFD9] text-base">{left}</span>
                <span className="inline-block w-1 h-1 bg-[#E5DFD9] rounded-full"></span>
                <span className=" text-[#E5DFD9] text-base">{right}</span>
            </div>
            <div className="flex items-center space-x-2">
                <span className=" text-[#E5DFD9] text-base">{count} Products</span>
                <Image src="/images/vector-1.png" width={16} height={20} alt="Vector" className='cursor-pointer' />
            </div>

        </div>
    );
}
