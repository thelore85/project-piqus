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
  title: 'Desarrollo Web | Crea el sitio web o la aplicación de tus sueños | PIQUS.it',
  description: 'Creamos sitios web personalizados, tiendas online y aplicaciones móviles utilizando tecnologías de última generación. ¡Haz realidad tus sueños online con PIQUS.it!',
  robots: 'index, follow',
  keywords: 'desarrollo web, desarrollo de sitios web, desarrollo de aplicaciones, desarrollo de comercio electrónico, desarrollo de aplicaciones móviles, sitios web personalizados, tecnologías de vanguardia, PIQUS.it',
  icons: { icon: "/img/favicon/favicon.ico", shortcut: "/img/favicon/favicon.ico", apple: "/img/favicon/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon/favicon.ico", }, },
};


export default function MarketingOnlinePage() {
  return (
    <>
      <Title title={'Sviluppo Web'} subtitle={'Website, App, E-Commerce'}/>
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
