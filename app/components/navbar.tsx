"use client"
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const NavBar = () => {
    const pathname = usePathname(); 
    const isActive = (path: string) => pathname === path;
    return (
        <div className='flex justify-between items-center'>
            <Image src="/images/logo.png" width={100} height={80} alt="logo" />
            <ul className='hidden sm:flex justify-between gap-x-8'>
                <li className={`font-semibold ${isActive('/') ? 'text-primary' : ''}`}>
                    <Link href="/">About</Link>
                </li>
                <li className={`font-semibold ${isActive('/resume') ? 'text-primary' : ''}`}>
                    <Link href="/resume">Resume</Link>
                </li>
            </ul>
            <button className='py-2 p-2 sm:px-3 rounded-lg border-primary border'>
                <a href="mailto:harrihk07@gmail.com" className="text-primary">
                    Get in touch
                </a>
            </button>
        </div>
    )
}

export default NavBar