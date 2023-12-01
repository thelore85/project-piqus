// comeponents
import Hero from './Components/Hero';
import Features from './Components/Features';
import Tech from './Components/Tech';
import About from './Components/About';
import Ecommerce from './Components/Ecommerce';
import Marketing from './Components/Marketing';
import CallToAction from './Components/CallToAction';
import Partners from './Components/Partners';
import Website from './Components/Website';
import WebApp from './Components/WebApp';


export default function HomePage(){
  return (
      <>
        <Hero />
        <Partners />
        <Features />
        <Marketing />
        <Ecommerce />
        <Website />
        <WebApp />
        <Tech />
        <CallToAction />
        <About />
      </>
  )
}