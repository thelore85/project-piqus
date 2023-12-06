import About from "../Components/Sections/About";
import CallToAction from "../Components/Sections/CallToAction";
import Google from "../Components/Sections/Google";
import Social from "../Components/Sections/Social";
import Partners from "../Components/Sections/Partners";
import Seo from "../Components/Sections/Seo";
import Title from "../Components/Sections/Title";


export default function MarketingOnlinePage() {
  return (
    <>
      <Title title={'Online Marketing'} subtitle={'Gain your presence On Google and Social Media with Online Advertising'}/>
      <Google />
      <Social />
      <Seo />
      <CallToAction />
      <About />
      <Partners />
    </>
  )
}
