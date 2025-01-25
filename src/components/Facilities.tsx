import { Bus,FlaskConicalIcon, Laptop, LibraryBig, PaletteIcon, Volleyball } from 'lucide-react'
import React from 'react'

const Facilities = () => {
    const facilities = [
        {
            title: 'Sports',
            logo: <Volleyball />,
            description: 'State-of-the-art sports facilities including a football field, basketball court, and indoor games.',
        },
        {
            title: 'library',
            logo: <LibraryBig />,
            description: 'collection of books, periodicals, and other media that constitute a public or private library.',
        },
        {
            title: 'Transportation',
            logo: <Bus />,
            description: 'Safe and reliable transportation services for students living in different parts of the city.',
        },
        {
            title: 'Science Labs',
            logo: <FlaskConicalIcon />,
            description: 'Advanced science labs equipped with modern equipment for practical learning and experimentation.',
        },
        {
            title: 'Computer Labs',
            logo: <Laptop />,
            description: 'computer labs with high-speed internet and the latest software for digital learning.',
        },
        {
            title: 'Cultural Activities',
            logo: <PaletteIcon />,
            description: 'Opportunities for students to participate in music, dance, drama, and other cultural programs to nurture creativity and talent.',
        },
    ]
    return (
        <div className='bg-gray-100 my-10 py-10'>
        <div className='flex items-center justify-center flex-col gap-2 p-5 md:p-10'>
            <h2 className='text-2xl font-bold'>Facilities That we Provide</h2>
            <p>Empowering students with modern classrooms, a well-stocked library, advanced science labs, digital learning tools, and diverse extracurricular opportunities.</p>
        </div>
        <div className='flex flex-wrap gap-5 items-center justify-center'>
        {
            facilities.map((facility, index) => (
                <div 
                    key={index} 
                    className="flex flex-col items-center gap-5 p-5 md:p-10 bg-white rounded-md md:w-1/4 w-[500px] mx-5 
                    transition-all duration-300 ease-in-out 
                    hover:shadow-xl hover:scale-105 
                    hover:bg-blue-50 
                    transform"
                >
                    <div className="rounded-full bg-gray-100 p-5 transition-all duration-300 ease-in-out group hover:bg-blue-100">
                        <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                            {facility.logo}
                        </div>
                    </div>
                    <div className="text-gray-800 text-center">
                        <h3 className='text-xl font-bold mb-2 transition-colors duration-300 ease-in-out group-hover:text-blue-600'>
                            {facility.title}
                        </h3>
                        <p className="transition-colors duration-300 ease-in-out group-hover:text-blue-800">
                            {facility.description}
                        </p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>

    )
}

export default Facilities