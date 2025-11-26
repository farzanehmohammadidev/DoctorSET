import React from 'react'
import NavBar from '../NavBar/NavBar'

function Layouts({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <NavBar/>
   {children}
    </>
  )
}

export default Layouts