// comeponents
import Hero from './CompHome/Hero';
import Features from './CompHome/Features';
import Tech from './CompHome/Tech';
import About from './CompHome/About';
import Ecommerce from './CompHome/Ecommerce';
import Marketing from './CompHome/Marketing';
import CallToAction from './CompHome/CallToAction';
import Partners from './CompHome/Partners';
import Website from './CompHome/Website';
import WebApp from './CompHome/WebApp';


export default function home() {

  return (
      <>
        <Hero />
        <Partners />
        <Features />
        <Ecommerce />
        <Website />
        <WebApp />
        <Marketing />
        <Tech />
        <CallToAction />
        <About />
      </>
  )
}
