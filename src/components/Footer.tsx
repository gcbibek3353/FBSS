'use client'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const phoneNumber = '+9779768520742';
    const email = 'futurebrighter@gmail.com';
    const address = '7H9X+QMF, Baglung 33300, Nepal';
    const coordinates = '28.269597944891967, 83.59921728401383';

    return (
        <div className="bg-blue-600 text-white w-full mt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and School Name */}
                    <div className="flex items-center">
                        <Link href='/' className='flex items-center space-x-4'>
                        <Image
                            src="/assets/images/logo.jpeg"
                            alt="logo"
                            width={56}
                            height={56}
                            className="rounded-full"
                            />
                        <p className="text-lg font-semibold">
                            Future Brighter <br /> Secondary School
                        </p>
                            </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:underline">About Us</Link>
                            </li>
                            <li>
                                <Link href="/notices" className="hover:underline">Notice</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:underline">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                        <ul className="space-y-2">
                            <li>
                                <button  className="flex items-center hover:underline space-x-2" onClick={() => window.open('tel:9876543210')}>
                                    <PhoneCall size={18} />
                                    <span>{phoneNumber}</span>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center hover:underline space-x-2" onClick={() => window.open(`mailto:${email}`)}>
                                    <Mail size={18} />
                                    <span>{email}</span>
                                </button>
                            </li>
                            <li >
                                <button className="flex items-center hover:underline space-x-2" onClick={() => window.open(
                                    `https://www.google.com/maps/search/?api=1&query=${coordinates}`,
                                    '_blank'
                                )}>
                                    <MapPin size={18} />
                                    <span>{address}</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-white/20">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>© Copyright 2025 Future Brighter Secondary School | All Rights Reserved</p>
                        <p className="mt-2 md:mt-0">
                            <span>Designed By: </span>
                            <Link href="https://github.com/gcbibek3353" className="hover:underline">
                                Bivek Gharti
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );



}

export default Footer