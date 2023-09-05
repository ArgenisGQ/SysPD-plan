/* import { Card, Text, Metric, TextInput, Flex, Grid, Col } from '@tremor/react'; */
/* import { Grid, Col, TMetric } from "@tremor/react"; */
/* import React from 'react'; */
/* import { useContext } from "react"; */
/* import TremuTest from '../components/TremuTest'; */
/* import FormBase from '../components/FormBase'; */
import LoginBase from '../components/LoginBase';
import Login01Base from '../components/Login01Base';
import Login02Base from '../components/Login02Base';
import Login03Base from '../components/Login03Base';
import Login04Base from '../components/Login04Base';
import Register from '../components/register';
/* import HomePages from './scenes/HomePages'; */
import HomePages from '../pages/HomePages';
import Login from '../pages/login/Login';
import Layout from '../pages/layout/Layout';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import AllUsers from '../components/AllUsers';
import LoginTest from '../components/LoginTest';
import ProtectedRoute from './ProtectedRoute';

/* import UserProvider, {UserContext} from './context/UserProvider'; */
/* import { UserContext } from "../context/UserProvider"; */
import { UserProvider } from "../context/UserContext";
import { AuthProvider } from "../context/AuthContext";
import { isAuthenticated } from "../services/Login";

//--solo para pruebas--//
import Spiners from "../forUse/spiners";
/* import Burguer from "../forUse/burguer"; */

function AppRouter() { 
  /* console.log("usuario:"); */
  return (
    <>
    {/*< BrowserRouter>
      <AuthProvider>
        <UserProvider>*/}        
            
              <Routes   >
                {/* <Layout>  */}
                <Route path='/' element={<Layout />} >
                  
                      
                      <Route exact path='/'           element={< HomePages/>}/>
                      <Route exact path='/login'      element={< Login/>}/>
                      {/* <Route path='/login01'    element={< Login01Base/>}/> */}
                      <Route exact path='/login02'    element={< Login02Base/>}/>
                      <Route exact path='/login03'    element={< Login03Base/>}/>
                      <Route exact path='/login04'    element={< Login04Base/>}/>
                      {/* <Route path='/register'   element={< Register/>}/> */}
                      {/* <Route exact path='/all'        element={< AllUsers/>}/> */}
                      <Route exact path='/LoginTest'  element={< LoginTest/>}/>
                      {/* <Route path="*" element={<Page404 />}   */}

                      <Route path="/" element={<ProtectedRoute />}>
                        <Route exact path="/register" element={<Register />} />
                        {/* <Route exact path="/login01" element={<Login01Base />} /> */}
                        <Route exact path='/all'        element={< AllUsers/>}/>
                      </Route>


                      {/* SOLO PRUEBAS */}
                      <Route path='/spiners'  element={< Spiners/>}/> 
                      {/* <Route path='/burguer'  element={< Burguer/>}/>  */}
                </Route>
                {/* </Layout> */}


                <Route path="*">
                    <Route path="*" element={<>404</>} />
                </Route> 


              </Routes>
            

            
         {/*  <Routes> 
            <Route path="*">
               <Route path="*" element={<>404</>} />
            </Route>               
          </Routes>    */}

          






          {/* </UserProvider>
      </AuthProvider>
    </BrowserRouter> */}
    {/* <TremuTest /> */}
    {/* <FormBase /> */}
    {/* <LoginBase /> */}
    {/* <Login01Base/> */}
    {/* <Login02Base/> */}
    {/* <Login03Base/> */}
    {/* <Login04Base/> */}
    {/* <HomePages /> */} 
    
    </>    
    
    
  )
}

export default AppRouter