
import Footer from './Components/Sections/Footer'
import MainNavbar from './Components/Navigation/MainNavbar';

// HEAD - metadata setting
export const metadata = {
  title: "Web Development & Marketing | Create Your Online Presence | PIQUS.it",
  description: "Grow your business online with PIQUS.it! We create custom websites, high-performing e-commerce stores, and tailored marketing campaigns to help you reach new customers and increase sales.",
  keywords: "web development, online marketing, websites, e-commerce, marketing campaigns, SEO, SEM, social media marketing, lead generation, online growth",
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
