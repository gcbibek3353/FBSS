import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const WrapperCard = ({title} : {title : string}) => {
    return (
        <div className="relative h-[150px] md:h-[300px] w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/assets/images/excursions.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
    
          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {title.toUpperCase()}
            </h1>
            
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-white/90">
              <Link 
                href="/" 
                className="hover:text-white transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/${title}`} className="text-white">
                {title}
              </Link>
            </nav>
          </div>
        </div>
      );
}

export default WrapperCard