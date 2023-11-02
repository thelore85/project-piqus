import React from 'react'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar';

export const metadata = {
  title: 'Bring your business idea online - Piqus',
  description: 'Build your web presence. Gain customers and clients. Scale your business online.',
  icons: { icon: "/img/favicon.ico", shortcut: "/img/favicon.ico", apple: "/img/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon.ico", }, },
};

export default function pageLayout({ children }) {
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  )
}
