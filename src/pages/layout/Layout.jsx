import React from 'react';
import Navigation from './Navbar';
import Footer from './Footer';

/* function Layout(children) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout */

const Layout =({children}) =>{
  return(
      <>
      <Navigation />      
      <main>{children}</main>
      <Footer />
      </>
  )
}

export default Layout;