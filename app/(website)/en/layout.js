
import Footer from './Components/Sections/Footer'
import MainNavbar from './Components/Navigation/MainNavbar';

// HEAD - metadata setting
export const metadata = {
  title: 'E-Commerce. Website. Online Marketing - Piqus.it',
  description: 'Build your web presence. Gain new customers. Scale your business online. Develope Your Website',
  icons: { icon: "/img/favicon/favicon.ico", shortcut: "/img/favicon/favicon.ico", apple: "/img/favicon/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon/favicon.ico", }, },
};

export default function pageLayout({ children }) {
  
  return (
      <>
        <MainNavbar />
        {children}
        <Footer />
      </>
  )
}
