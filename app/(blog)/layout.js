import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar';
import CallToAction from '../(pages)/en/Components/CallToAction';
import About from '../(pages)/en/Components/About';

export default function pageLayout({ children }) {
  return (
      <>
        <Navbar />
        {children}
        <CallToAction />
        <About />
        <Footer />
      </>
  )
}
