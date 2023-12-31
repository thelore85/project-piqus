import About from "../Components/Sections/About";
import CallToAction from "../Components/Sections/CallToAction";
import Google from "../Components/Sections/Google";
import Social from "../Components/Sections/Social";
import Partners from "../Components/Sections/Partners";
import Seo from "../Components/Sections/Seo";
import Title from "../Components/Sections/Title";


// HEAD - metadata setting
export const metadata = {
  title: 'Online Marketing | PIQUS.it',
  description: 'Acquire new customers on Instagram, Google, or Facebook',
  icons: { icon: "/img/favicon/favicon.ico", shortcut: "/img/favicon/favicon.ico", apple: "/img/favicon/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon/favicon.ico", }, },
};

export default function MarketingOnlinePage() {
  return (
    <>
      <Title title={'Online Marketing'} subtitle={'Your advertising on Google, Instagram, and Facebook.'}/>
      <Google />
      <Social />
      <Seo />
      <CallToAction />
      <About />
      <Partners />
    </>
  )
}
