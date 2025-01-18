
import { Carousel } from "flowbite-react";
import Image from "next/image";

function Component() {
  return (
    <div className="h-56 sm:h-64 md:h-[750px]">
      <Carousel>
        <Image 
        alt="img"
        width={1044}
        height={1000}
        src="/assets/images/excursions.jpg" />
        <Image 
        alt="img"
        width={1044}
        height={1000}
        src="/assets/images/school_programs.jpg" />
        <Image 
        alt="img"
        width={1044}
        height={1000}
        src="/assets/images/prize_dist.jpg" />
        <Image 
        alt="img"
        width={1044}
        height={1000}
        src="/assets/images/sports.jpg" />
      </Carousel>
    </div>
  );
}

export default Component;