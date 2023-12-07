
import Footer from './it/Components/Sections/Footer'
import MainNavbar from './it/Components/Navigation/MainNavbar';

export default function pageLayout({ children }) {
  
  return (
      <>
        <MainNavbar />
        {children}
        <Footer />
      </>
  )
}
