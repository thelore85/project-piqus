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


export const metadata = {
  title: 'Your Business, Online',
  description: 'Build your web presence. Gain customers and clients. Scale your business online.',
};

export default function home() {

  return (
      <>
        <Hero />
        <Features />
        <About />
        <Tech />
        <Ecommerce />
        <Website />
        <WebApp />
        <CallToAction />
        <Marketing />
        <Partners />
      </>
  )
}
