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
  title: 'Web Development | Build Your Dream Website or App | PIQUS.it',
  description: 'Develop custom websites, e-commerce stores, and mobile apps using cutting-edge technology. Bring your dreams to life online with PIQUS.it!',
  robots: 'index, follow',
  keywords: 'web development, website development, app development, e-commerce development, mobile app development, custom websites, cutting-edge technology, PIQUS.it',
  icons: { icon: "/img/favicon/favicon.ico", shortcut: "/img/favicon/favicon.ico", apple: "/img/favicon/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon/favicon.ico", }, },
};


export default function MarketingOnlinePage() {
  return (
    <>
      <Title title={'Sviluppo Web'} subtitle={'Websites, WebApps, E-Commerce'}/>
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
