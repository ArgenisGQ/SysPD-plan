import React from 'react';
import Navigation from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


/* const Layout =({children}) =>{
  return(
      <>
      <Navigation />      
      <main>{children}</main>
      <Footer />
      </>
  )
} */

const Layout =() =>{
  return(
      <>
      <Navigation />      
      <main> <Outlet /> </main>
      <Footer />
      </>
  )
}

export default Layout;