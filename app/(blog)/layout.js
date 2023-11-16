import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar';
import CallToAction from '../(pages)/home/CompHome/CallToAction';
import About from '../(pages)/home/CompHome/About';

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
