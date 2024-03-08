import About from "../Components/Sections/About";
import CallToAction from "../Components/Sections/CallToAction";
import Google from "../Components/Sections/Google";
import Social from "../Components/Sections/Social";
import Partners from "../Components/Sections/Partners";
import Seo from "../Components/Sections/Seo";
import Title from "../Components/Sections/Title";


// HEAD - metadata setting
export const metadata = {
  title: 'Online Marketing | Aumenta le Vendite con Strategie su Misura | PIQUS.it',
  description: 'Ottieni più clienti e vendite grazie a strategie di marketing online personalizzate per Instagram, Google e Facebook. Affidati a PIQUS.it!',
  robots: 'index, follow',
  keywords: 'online marketing, marketing digitale, instagram marketing, google ads, facebook ads, campagne pubblicitarie online, strategia di marketing, lead generation, PIQUS.it', // Added relevant keywords
  icons: { icon: "/img/favicon/favicon.ico", shortcut: "/img/favicon/favicon.ico", apple: "/img/favicon/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon/favicon.ico", }, },
};



export default function MarketingOnlinePage() {
  return (
    <>
      <Title title={'Online Marketing'} subtitle={'La tua pubblicità su Goolge, Instagram e Facebook'}/>
      <Google />
      <Social />
      <Seo />
      <CallToAction />
      <About />
      <Partners />
    </>
  )
}
