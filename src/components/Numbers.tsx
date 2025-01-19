import { ClipboardCheck, Trophy, UserRoundCheck, Users } from 'lucide-react'
import React from 'react'

const Numbers = () => {
    return (
        <div className='grid grid-cols-2 md:flex justify-evenly items-center p-5 text-white bg-blue-600'>
            <div className='flex items-center justify-center flex-col gap-3'>
                <div className='rounded-full p-4 flex items-center justify-center bg-white '>
                    <Users className='text-blue-600 text-2xl font-bold' />
                </div>
                <p className='text-center'>8000 + <br /> Students</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-3'>
                <div className='rounded-full p-4 flex items-center justify-center bg-white '>
                    <UserRoundCheck className='text-blue-600 text-2xl font-bold' />
                </div>
                <p className='text-center'>30 + <br /> Teachers</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-3'>
                <div className='rounded-full p-4 flex items-center justify-center bg-white '>
                    <Trophy className='text-blue-600 text-2xl font-bold' />
                </div>
                <p className='text-center'>150 + <br /> Awards</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-3'>
                <div className='rounded-full p-4 flex items-center justify-center bg-white '>
                    <ClipboardCheck className='text-blue-600 text-2xl font-bold' />
                </div>
                <p className='text-center'>50 + <br /> Years of Experience </p>
            </div>
        </div>
    )
}

export default Numbers