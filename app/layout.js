
// CSS import
import 'bootstrap/dist/css/bootstrap.css' //import bootstrap 5 css
import './globals.css'

// font awesome setting and import 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


// google font import
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// STOP NEXT.js to build static pages (use it in case you are using dynamic function eg: cookies, auth. etc.)
export const dynamic = 'force-dynamic';


// HEAD - metadata setting
export const metadata = {
  title: 'Piqus - Bring your business online',
  description: 'Build your web presence. Gain customers and clients. Scale your business online.',
  icons: { icon: "/img/favicon.ico", shortcut: "/img/favicon.ico", apple: "/img/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon.ico", }, },
};

// layout
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
