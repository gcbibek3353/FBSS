// 'use client'
import React from 'react'
import { Newspaper } from 'lucide-react';
import { getLatestNotices } from '@/actions/notice';
import Link from 'next/link';


const ScrollingText = async () => {
    // let messages = String[] | undefined;
    let messages;
    const res = await getLatestNotices();
    if(!res || !res.notices || !res.success) messages = ["Notice Notice Notice ...","Notice Notice Notice ...","Notice Notice Notice ..."];  
    else messages = res.notices.map(notice => notice.title);

    return (
        <div className='h-10 bg-[#FF4500]'>
            <div className='flex'>
                {/* Notice Button */}
                <button className='bg-blue-800 text-white md:px-6 h-10 flex items-center justify-center md:gap-2 gap-1 px-2 font-semibold'>
                    <Newspaper className="w-5 h-5" />
                    NOTICES
                </button>
                <div className='overflow-hidden flex-1 flex items-center justify-center'>
                    <div className='animate-marquee whitespace-nowrap'>
                        <div className='flex items-center justify-center text-white min-h-full text-lg'> 
                            {
                                messages.map((message,index) => (
                                    <Link href='/notices' key={index} className='px-20'>{message}</Link>
                                ))
                            }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollingText