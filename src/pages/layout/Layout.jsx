import React from 'react';
import Navigation from './Nav';
import Footer from './Foot';

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