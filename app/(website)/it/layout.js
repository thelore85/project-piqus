
import Footer from './Components/Sections/Footer'
import MainNavbar from './Components/Navigation/MainNavbar';

// HEAD - metadata setting
export const metadata = {
  title: 'Sviluppo Web e Marketing | Crea la tua presenza online | PIQUS.it',
  description: 'Sviluppa la tua presenza online con PIQUS.it! Creiamo siti web personalizzati, e-commerce performanti e campagne marketing su misura per far crescere il tuo business.',
  keywords: "sviluppo web, marketing online, siti web, e-commerce, campagne marketing, SEO, SEM, social media marketing, lead generation, crescita online",
  robots: "index, follow",
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
