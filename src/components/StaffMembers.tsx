import { Facebook, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StaffMembers = () => {

    const StaffMembers = [
        {
            image: '/assets/images/image.png',
            name: 'John Doe',
            position: 'Principal',
            experience: '10 years',
            fbLink: 'https://www.facebook.com',
            phoneNo: '1234567890',
        },
        {
            image: '/assets/images/image.png',
            name: 'John Doe',
            position: 'Principal',
            experience: '10 years',
            fbLink: 'https://www.facebook.com',
            phoneNo: '1234567890',
        },
        {
            image: '/assets/images/image.png',
            name: 'John Doe',
            position: 'Principal',
            experience: '10 years',
            fbLink: 'https://www.facebook.com',
            phoneNo: '1234567890',
        },
        {
            image: '/assets/images/image.png',
            name: 'John Doe',
            position: 'Principal',
            experience: '10 years',
            fbLink: 'https://www.facebook.com',
            phoneNo: '1234567890',
        },
        {
            image: '/assets/images/image.png',
            name: 'John Doe',
            position: 'Principal',
            experience: '10 years',
            fbLink: 'https://www.facebook.com',
            phoneNo: '1234567890',
        },
        {
            image: '/assets/images/image.png',
            name: 'John Doe',
            position: 'Principal',
            experience: '10 years',
            fbLink: 'https://www.facebook.com',
            phoneNo: '1234567890',
        }
    ]

    return (
     <div className="p-10 my-10 md:p-10 bg-gray-50">
    <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800">Staff Members</h2>
        <p className="text-lg text-gray-600 mt-2">
            Meet our dedicated and passionate educators, committed to nurturing excellence and guiding every student toward success.
        </p>
    </div>
    
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {StaffMembers.map((member, index) => (
            <div
                className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden 
                hover:shadow-2xl transition-all duration-300 ease-in-out 
                transform hover:-translate-y-3 hover:scale-105"
                key={index}
            >
                <Image
                    className="w-full h-56 object-cover md:h-60 lg:h-64 
                    transition-transform duration-300 ease-in-out 
                    group-hover:scale-110"
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                />
                <div className="p-5 text-center transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 
                    group-hover:text-blue-600 transition-colors">{member.name}</h3>
                    <p className="text-gray-600 group-hover:text-blue-700">{member.position}</p>
                    <p className="text-gray-500 text-sm mt-1 group-hover:text-blue-800">{member.experience}</p>
                    <div className="flex justify-center items-center mt-3 space-x-4">
                        <Link href={member.fbLink} className="bg-gray-300 rounded-full text-center p-2 
                        hover:bg-blue-100 hover:text-blue-800 transition-all">
                            <Facebook />
                        </Link>
                        <p className="text-gray-700 flex items-center">
                            <span className="mr-1 bg-gray-300 rounded-full text-center p-2 
                            hover:bg-blue-100 hover:text-blue-800 transition-all cursor-pointer">
                                <Phone/>
                            </span>
                            {member.phoneNo}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
    )
}

export default StaffMembers


