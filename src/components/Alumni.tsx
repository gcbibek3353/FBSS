"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

const Alumni = () => {
  const alumni = [
    {
      id: 1,
      name: 'John Doe',
      achievement: 'Gold Medalist at TU',
      description: 'Successfully secured gold medal at TU engineering campus.',
      subtitle: 'Proud Alumni of Future Brighter Secondary School.'
    },
    {
      id: 2,
      name: 'John Doe',
      achievement: 'Gold Medalist at TU',
      description: 'Successfully secured gold medal at TU engineering campus.',
      subtitle: 'Proud Alumni of Future Brighter Secondary School.'
    },
    {
      id: 3,
      name: 'John Doe',
      achievement: 'Gold Medalist at TU',
      description: 'Successfully secured gold medal at TU engineering campus.',
      subtitle: 'Proud Alumni of Future Brighter Secondary School.'
    },
    {
      id: 4,
      name: 'John Doe',
      achievement: 'Gold Medalist at TU',
      description: 'Successfully secured gold medal at TU engineering campus.',
      subtitle: 'Proud Alumni of Future Brighter Secondary School.'
    },
    {
      id: 5,
      name: 'John Doe',
      achievement: 'Gold Medalist at TU',
      description: 'Successfully secured gold medal at TU engineering campus.',
      subtitle: 'Proud Alumni of Future Brighter Secondary School.'
    },
    {
      id: 6,
      name: 'John Doe',
      achievement: 'Gold Medalist at TU',
      description: 'Successfully secured gold medal at TU engineering campus.',
      subtitle: 'Proud Alumni of Future Brighter Secondary School.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 3 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 3 < alumni.length ? prevIndex + 3 : prevIndex)
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-[E6EDF8]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Alumni's</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Empowering connections and celebrating achievements, our alumni are the pride and legacy of Future Brighter Secondary School, Baglung.
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-6 items-stretch overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {alumni.map((alum) => (
              <div key={alum.id} className="w-full min-w-[calc(33.333%-1rem)] flex-shrink-0 bg-white rounded-lg shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{alum.achievement}</h3>
                  <p className="text-gray-600 mb-4">{alum.description}</p>
                  <p className="text-gray-600 mb-6">{alum.subtitle}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <img 
                        src="/api/placeholder/48/48"
                        alt={`${alum.name}'s photo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium">{alum.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={handleNext}
          disabled={currentIndex + 3 >= alumni.length}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg ${
            currentIndex + 3 >= alumni.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Alumni;