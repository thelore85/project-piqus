
import Footer from './Components/Sections/Footer'
import MainNavbar from './Components/Navigation/MainNavbar';

// HEAD - metadata setting
export const metadata = {
  title: "Desarrollo Web y Marketing | Crea tu presencia online | PIQUS.it",
  description: "¡Desarrolla tu presencia online con PIQUS.it! Creamos sitios web personalizados, tiendas e-commerce de alto rendimiento y campañas de marketing a medida para ayudarte a llegar a nuevos clientes y aumentar tus ventas.",
  keywords: "desarrollo web, marketing online, sitios web, e-commerce, campañas de marketing, SEO, SEM, marketing en redes sociales, generación de leads, crecimiento online",
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
