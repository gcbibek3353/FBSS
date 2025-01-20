import Alumni from '@/components/Alumni';
import Carousel from '@/components/Carousel'
import Facilities from '@/components/Facilities';
import MessageFromPrincipal from '@/components/MessageFromPrincipal';
import Numbers from '@/components/Numbers';
import { Newspaper } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className='h-10 bg-[#FF4500]'>
        <div className='flex'>
          {/* Notice Button */}
          <button className='bg-blue-800 text-white md:px-6 h-10 flex items-center justify-center md:gap-2 gap-1 px-2 font-semibold'>
            <Newspaper className="w-5 h-5" />
            NOTICES
          </button>

          {/* Scrolling Text */}
          <div className='overflow-hidden flex-1'>
            <div className='animate-marquee whitespace-nowrap'>
              <div className='flex items-center justify-center text-white min-h-full text-lg'> <span>notice notice notice ...</span> </div>
            </div>
          </div>
        </div>
      </div>
      <MessageFromPrincipal />
      <Numbers />
      <Alumni />
      <Facilities />
    </div>

  );
}
