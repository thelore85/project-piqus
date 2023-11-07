// comeponents
import Hero from './CompHome/Hero';
import Features from './CompHome/Features';
import Tech from './CompHome/Tech';
import About from './CompHome/About';
import Ecommerce from './CompHome/Ecommerce';
import Application from './CompHome/Application';
import Marketing from './CompHome/Marketing';


export default function home() {

  return (
      <>
        <Hero />
        <Features />
        <About />
        <Tech />
        <Ecommerce />
        <Application />
        <Marketing />
      </>
  )
}
