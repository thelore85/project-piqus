import About from "../Components/About";
import CallToAction from "../Components/CallToAction";
import Google from "../Components/Google";
import Marketing from "../Components/Marketing";
import Social from "../Components/Social";
import Partners from "../Components/Partners";
import Seo from "../Components/Seo";
import Title from "../Components/Title";


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
