
export const dynamic = 'force-dynamic'; // force realtime update

// comeponents
import Features from '../Components/Sections/Features';
import Tech from '../Components/Sections/Tech';
import About from '../Components/Sections/About';
import CallToAction from '../Components/Sections/CallToAction';
import Partners from '../Components/Sections/Partners';
import Hero from '../Components/Sections/Hero';
import Portfolio from '../Components/portfolio/Portfolio';


export default function HomePage(){
  return (
      <>
        <Hero />
        <Features />
        <Tech />
        {/* <Ecommerce /> */}
        {/* <Website /> */}
        {/* <WebApp /> */}
        <About />
        <Portfolio />
        <Partners />
        {/* <CallToAction /> */}
      </>
  )
}