
import Footer from './en/Components/Sections/Footer'
import MainNavbar from './en/Components/Navigation/MainNavbar';

export default function pageLayout({ children }) {
  
  return (
      <>
        <MainNavbar />
        {children}
        <Footer />
      </>
  )
}
