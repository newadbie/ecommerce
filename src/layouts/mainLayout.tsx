import React from 'react'

import Header from '../components/Layout/header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout
