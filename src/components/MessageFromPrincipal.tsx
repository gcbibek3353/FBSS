import Image from 'next/image'
import React from 'react'

const MessageFromPrincipal = () => {
    return (
        <div className='flex flex-col max-w-7xl my-8 mx-auto px-4 py-8 bg-white'>
      
          {/* Principal Message Section */}
          <h2 className='text-3xl font-bold mb-8'>Message From Principal</h2>
          
          <div className='grid md:grid-cols-[600px_1fr] gap-8'>
            {/* Principal Image */}
            <div className='w-full'>
              <Image
                src='/assets/images/principal.jpg'
                alt='principal_Image'
                width={400}
                height={500}
                className='w-full object-cover rounded-lg shadow-md'
              />
            </div>
      
            {/* Message Content */}
            <div className='space-y-6 text-gray-700 leading-relaxed'>
              <p className='font-medium'>Dear Parents, Guardians, and Students,</p>
              <p>Warm greetings from Future Brighter Secondary School!</p>
      
              <p>As the principal of this esteemed institution, I am filled with pride to witness the 
              incredible progress and achievements of our students and faculty. At Future Brighter 
              Secondary School, our mission is to nurture young minds, instill a love for learning, 
              and empower each student to reach their fullest potential.</p>
      
              <p>We are committed to providing a safe, inclusive, and inspiring environment where 
              every child can grow academically, socially, and emotionally. Our dedicated team 
              of teachers and staff work tirelessly to ensure that students receive a holistic 
              education, blending academic excellence with co-curricular activities, moral 
              values, and life skills.</p>
      
              <p>Thank you for being an integral part of the Future Brighter family. Together, 
              let us continue to work towards the shared goal of making our students confident, 
              capable, and compassionate global citizens.</p>
      
              <div className='mt-8'>
                <p className='font-semibold'>Balkrishna Sharma</p>
                <p className='text-gray-600'>Principal</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default MessageFromPrincipal