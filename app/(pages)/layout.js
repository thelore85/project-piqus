import React from 'react'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar';

export default function PageLayout({ children }) {
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  )
}
