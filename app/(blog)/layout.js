import Footer from '../(website)/en/Components/Sections/Footer'
import CallToAction from '../(website)/en/Components/Sections/CallToAction';
import About from '../(website)/en/Components/Sections/About';
import MainNavbar from '../(website)/en/Components/Navigation/MainNavbar';

export default function pageLayout({ children }) {
  return (
      <>

        <MainNavbar />
        {children}
        <CallToAction />
        <About />
        <Footer />
      </>
  )
}
