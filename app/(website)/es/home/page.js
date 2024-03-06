// comeponents
import Features from '../Components/Sections/Features';
import Tech from '../Components/Sections/Tech';
import About from '../Components/Sections/About';
import Ecommerce from '../Components/Sections/Ecommerce';
import Marketing from '../Components/Sections/Marketing';
import CallToAction from '../Components/Sections/CallToAction';
import Partners from '../Components/Sections/Partners';
import Website from '../Components/Sections/Website';
import WebApp from '../Components/Sections/WebApp';
import Hero from '../Components/Sections/Hero';


export default function HomePage(){
  return (
      <>
        <Hero />
        <Partners />
        <Features />
        <Tech />
        <Ecommerce />
        <Website />
        <WebApp />
        <Marketing />
        <CallToAction />
        <About />
      </>
  )
}