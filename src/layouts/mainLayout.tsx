import React from 'react'

import Header from '../components/Layout/header'
import Footer from '../components/Layout/footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
