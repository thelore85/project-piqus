// comeponents
import Hero from './CompHome/Hero';
import Features from './CompHome/Features';
import Tech from './CompHome/Tech';
import About from './CompHome/About';
import Ecommerce from './CompHome/Ecommerce';
import Application from './CompHome/Application';

export const metadata = {
  title: 'Crea la tua promo online, gratis! - PIQUS LEAD',
  description: 'Inizia con una landing page promozianel in grado di cerare un codice sconto',
  icons: { icon: "/img/favicon.ico", shortcut: "/img/favicon.ico", apple: "/img/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon.ico", }, },
};

export default function home() {

  return (
      <>
        <Hero />
        <Features />
        <Tech />
        <Ecommerce />
        <Application />
        <About />
      </>
  )
}
