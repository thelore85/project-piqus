
import Footer from './Components/Sections/Footer'
import MainNavbar from './Components/Navigation/MainNavbar';

// HEAD - metadata setting
export const metadata = {
  title: 'Online Marketing. Sviluppo Siti Web. E-Commerce - Piqus.it',
  description: 'Costruisci la Tua Immagine Online. Acquisici Nuovo Clienti. Scala il Tuo Business. ',
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
