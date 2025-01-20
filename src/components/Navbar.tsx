'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const pathname = usePathname();
    const [isNavOpen,setIsNavOpen] = useState(false);

    return (
        <div className='bg-white shadow-md sticky w-full top-0 left-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                <div className='flex justify-between items-center md:grid md:grid-cols-[25%_auto]'>
                    {/* Logo Section */}
                    <div className='flex items-center'>
                        <Link href='/' className='transition-transform hover:scale-105'>
                            <Image src='/assets/images/logo.jpeg'
                                alt='logo'
                                width={100}
                                height={100}
                                className='w-12 h-12 md:w-20 md:h-20 rounded-full object-cover'
                            />
                        </Link>
                    </div>
    
                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center justify-center'>
                        <ul className='flex gap-8 text-base font-semibold'>
                            <Link href='/' className={`${pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'} transition-all duration-200 cursor-pointer px-3 py-2 hover:text-blue-600 hover:border-b-2 hover:border-blue-600`}>Home</Link>
                            <Link href='/about' className={`${pathname === '/about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'} transition-all duration-200 cursor-pointer px-3 py-2 hover:text-blue-600 hover:border-b-2 hover:border-blue-600`}>About Us</Link>
                            <Link href='/notices' className={`${pathname === '/notices' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'} transition-all duration-200 cursor-pointer px-3 py-2 hover:text-blue-600 hover:border-b-2 hover:border-blue-600`}>Notices</Link>
                            <Link href='/gallery' className={`${pathname === '/gallery' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'} transition-all duration-200 cursor-pointer px-3 py-2 hover:text-blue-600 hover:border-b-2 hover:border-blue-600`}>Gallery</Link>
                            <Link href='/contact' className={`${pathname === '/contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'} transition-all duration-200 cursor-pointer px-3 py-2 hover:text-blue-600 hover:border-b-2 hover:border-blue-600`}>Contact Us</Link>
                        </ul>
                    </div>
    
                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button 
                            className='p-2 rounded-lg hover:bg-gray-100 transition-colors'
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            {isNavOpen 
                                ? <X className="w-6 h-6 text-gray-700" />
                                : <Menu className="w-6 h-6 text-gray-700" />
                            }
                        </button>
                    </div>
    
                    {/* Mobile Navigation */}
                    <div className={`
                        fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out md:hidden
                        ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}>
                        <div className='p-6'>
                            <div className='flex items-center justify-between mb-8'>
                                <Link href='/' onClick={() => setIsNavOpen(false)}>
                                    <Image src='/assets/images/logo.jpeg'
                                        alt='logo'
                                        width={100}
                                        height={100}
                                        className='w-12 h-12 rounded-full object-cover'
                                    />
                                </Link>
                                <button 
                                    onClick={() => setIsNavOpen(false)}
                                    className='p-2 rounded-lg hover:bg-gray-100 transition-colors'
                                >
                                    <X className="w-6 h-6 text-gray-700" />
                                </button>
                            </div>
                            <ul className='flex flex-col space-y-6 text-lg font-semibold'>
                                <Link href='/' onClick={() => setIsNavOpen(false)} 
                                    className={`${pathname === '/' ? 'text-blue-600' : 'text-gray-700'} 
                                    transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600`}>
                                    Home
                                </Link>
                                <Link href='/about' onClick={() => setIsNavOpen(false)} 
                                    className={`${pathname === '/about' ? 'text-blue-600' : 'text-gray-700'} 
                                    transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600`}>
                                    About Us
                                </Link>
                                <Link href='/notices' onClick={() => setIsNavOpen(false)} 
                                    className={`${pathname === '/notices' ? 'text-blue-600' : 'text-gray-700'} 
                                    transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600`}>
                                    Notices
                                </Link>
                                <Link href='/gallery' onClick={() => setIsNavOpen(false)} 
                                    className={`${pathname === '/gallery' ? 'text-blue-600' : 'text-gray-700'} 
                                    transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600`}>
                                    Gallery
                                </Link>
                                <Link href='/contact' onClick={() => setIsNavOpen(false)} 
                                    className={`${pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'} 
                                    transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600`}>
                                    Contact Us
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
