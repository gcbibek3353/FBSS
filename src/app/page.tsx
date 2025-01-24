import Alumni from '@/components/Alumni';
import Carousel from '@/components/Carousel'
import Facilities from '@/components/Facilities';
import Footer from '@/components/Footer';
import MessageFromPrincipal from '@/components/MessageFromPrincipal';
import { Navbar } from '@/components/Navbar';
import Numbers from '@/components/Numbers';
import ScrollingText from '@/components/ScrollingText';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ScrollingText />
      <MessageFromPrincipal />
      <Numbers />
      <Alumni />
      <Facilities />
      <Footer />
    </div>

  );
}
