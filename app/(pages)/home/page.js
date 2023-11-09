// comeponents
import Hero from './CompHome/Hero';
import Features from './CompHome/Features';
import Tech from './CompHome/Tech';
import About from './CompHome/About';
import Ecommerce from './CompHome/Ecommerce';
import Application from './CompHome/Application';
import Marketing from './CompHome/Marketing';


export const metadata = {
  title: 'Your Business, Online',
  description: 'Build your web presence. Gain customers and clients. Scale your business online.',
  icons: { icon: "/img/favicon.ico", shortcut: "/img/favicon.ico", apple: "/img/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon.ico", }, },
};

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
