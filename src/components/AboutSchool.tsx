import Image from 'next/image'
import React from 'react'

const AboutSchool = () => {

    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-5 p-5 md:p-10">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/images/school.jpg"
            alt="About School"
            width={600}
            height={620}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full text-gray-800">
          <p className="text-lg md:text-xl leading-relaxed">
            Located in the heart of Baglung, our institution has been a beacon of learning, innovation, and character building for students in the region. Established with the vision of nurturing young minds and preparing them for a brighter future, we pride ourselves on providing a holistic education that goes beyond academics.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <span className="font-semibold">Comprehensive Learning:</span> A well-rounded curriculum combining theoretical knowledge with practical applications.
            </li>
            <li>
              <span className="font-semibold">Qualified Faculty:</span> Passionate educators dedicated to inspiring and guiding every student.
            </li>
            <li>
              <span className="font-semibold">Modern Facilities:</span> Equipped with advanced classrooms, a rich library, science labs, and digital resources to support 21st-century learning.
            </li>
            <li>
              <span className="font-semibold">Extracurricular Excellence:</span> Opportunities for students to grow through sports, arts, and community activities.
            </li>
          </ul>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            Our mission is to foster critical thinking, creativity, and lifelong learning, ensuring that every student becomes a responsible and confident global citizen. We invite you to join our community and take a step towards a brighter tomorrow!
          </p>
        </div>
      </div>
      
    )
}

export default AboutSchool