import About from "../Components/Sections/About";
import CallToAction from "../Components/Sections/CallToAction";
import Google from "../Components/Sections/Google";
import Social from "../Components/Sections/Social";
import Partners from "../Components/Sections/Partners";
import Seo from "../Components/Sections/Seo";
import Title from "../Components/Sections/Title";


// HEAD - metadata setting
export const metadata = {
  title: 'Online Marketing | Boost Sales with Tailor-Made Strategies | PIQUS.it',
  description: 'Get more customers and sales through personalized online marketing strategies for Instagram, Google, and Facebook. Trust PIQUS.it!',
  robots: 'index, follow',
  keywords: 'online marketing, digital marketing, instagram marketing, google ads, facebook ads, online advertising campaigns, marketing strategy, lead generation, PIQUS.it',
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
