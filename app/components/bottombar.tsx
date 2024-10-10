"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaFileAlt } from 'react-icons/fa';

const BottomNav = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 shadow-md sm:hidden">
            <div className="flex justify-around py-2">
                <Link href="/" className={`flex flex-col items-center text-sm ${isActive('/') ? 'text-primary' : 'text-gray-400'}`}>
                    <FaHome className="w-6 h-6" />
                    <span>About</span>
                </Link>
                <Link href="/resume" className={`flex flex-col items-center text-sm ${isActive('/resume') ? 'text-primary' : 'text-gray-400'}`}>
                    <FaFileAlt className="w-6 h-6" />
                    <span>Resume</span>
                </Link>
            </div>
        </div>
    );
};

export default BottomNav;
