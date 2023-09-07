import React from 'react';
import Navigation from './Navbar';
import Footer from './Footer';
import AdminLayout from '../../layouts/admin/index';
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

const LayoutAdmin =() =>{
  return(
      <>
      {/* <Navigation />   */}
            
      <main> <Outlet /> </main>
      <AdminLayout /> 
      {/* <Footer /> */}
      </>
  )
}

export default LayoutAdmin;