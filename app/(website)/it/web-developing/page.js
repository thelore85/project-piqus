import About from "../Components/Sections/About";
import CallToAction from "../Components/Sections/CallToAction";
import Partners from "../Components/Sections/Partners";

import Title from "../Components/Sections/Title";
import Ecommerce from "../Components/Sections/Ecommerce";
import WebApp from "../Components/Sections/WebApp";
import Website from "../Components/Sections/Website";
import Tech from "../Components/Sections/Tech";


// HEAD - metadata setting
export const metadata = {
  title: 'Sviluppo Web | Crea il sito web o l\'app dei tuoi sogni | PIQUS.it',
  description: 'Realizziamo siti web personalizzati, e-commerce e applicazioni mobili utilizzando tecnologie all\'avanguardia. Dai vita ai tuoi sogni online con PIQUS.it!',
  robots: 'index, follow',
  keywords: 'sviluppo web, sviluppo siti web, sviluppo app, sviluppo e-commerce, sviluppo app mobile, siti web personalizzati, tecnologie all\'avanguardia, PIQUS.it',
  icons: { icon: "/img/favicon/favicon.ico", shortcut: "/img/favicon/favicon.ico", apple: "/img/favicon/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon/favicon.ico", }, },
};



export default function WebDevelopingPage() {
  return (
    <>
      <Title title={'Sviluppo Web'} subtitle={'Applicazioni, Siti Internet e non solo'}/>
      <Website />
      <WebApp />
      <Ecommerce />
      <Tech />
      <CallToAction />
      <About />
      <Partners />
    </>
  )
}
