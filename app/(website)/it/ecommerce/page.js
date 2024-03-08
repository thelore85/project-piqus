import About from "../Components/Sections/About";
import CallToAction from "../Components/Sections/CallToAction";
import Partners from "../Components/Sections/Partners";

import Title from "../Components/Sections/Title";
import Ecommerce from "../Components/Sections/Ecommerce";
import Tech from "../Components/Sections/Tech";


// HEAD - metadata setting
export const metadata = {
  title: 'Online Marketing | PIQUS.it',
  description: 'Acquisisci nuovi clienti su Instagram, Google o Facebook.',
  icons: { icon: "/img/favicon/favicon.ico", shortcut: "/img/favicon/favicon.ico", apple: "/img/favicon/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon/favicon.ico", }, },
};


export default function MarketingOnlinePage() {
  return (
    <>
      <Title title={'Sviluppo E-Commerce'} subtitle={'Il tuo negozio, raggiungibile da chiunque nel web'}/>
      <Ecommerce />
      <Tech />
      <CallToAction />
      <About />
      <Partners />
    </>
  )
}
