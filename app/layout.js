
// Context
import { GlobalContext } from './context/GlobalContext'

// GTM
import Analytics from './Components/analytics/gtmComponent'
import { Suspense } from 'react'

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


// layout
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* GTM configuration */}
        <Suspense>
          <Analytics />
        </Suspense>

        {/* Global Context injectinx */}
        <GlobalContext >
          {children}
        </GlobalContext>

      </body>
    </html>
  )
}
