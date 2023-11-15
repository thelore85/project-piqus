import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar';

export default function pageLayout({ children }) {
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  )
}
