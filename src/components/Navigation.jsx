import React from 'react';
import Link from 'next/link';

export default function Navigation() {
    return (
        <nav aria-label="Main Navigation" className="absolute bottom-0 left-1/2 -translate-1/2 flex items-center space-x-10 text-[#E5DFD9] mt-4 md:mt-0">
            <Link href="/bags" className="hover:underline whitespace-nowrap">Bags</Link>
            <Link href="/travel" className="hover:underline whitespace-nowrap">Travel</Link>
            <Link href="/accessories" className="hover:underline whitespace-nowrap">Accessories</Link>
            <Link href="/gifting" className="hover:underline whitespace-nowrap">Gifting</Link>
            <Link href="/jewelery" className="hover:underline whitespace-nowrap">Jewelery</Link>
        </nav>
    );
}
