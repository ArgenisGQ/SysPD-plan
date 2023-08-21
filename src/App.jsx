/* import { Card, Text, Metric, TextInput, Flex, Grid, Col } from '@tremor/react'; */
/* import { Grid, Col, TMetric } from "@tremor/react"; */
/* import React from 'react'; */
import { useContext } from "react";
import TremuTest from './components/TremuTest';
import FormBase from './components/FormBase';
import LoginBase from './components/LoginBase';
import Login01Base from './components/Login01Base';
import Login02Base from './components/Login02Base';
import Login03Base from './components/Login03Base';
import Login04Base from './components/Login04Base';
import Register from './components/register';
/* import HomePages from './scenes/HomePages'; */
import HomePages from './pages/HomePages';
import Login from './pages/login/Login';
import Layout from './pages/layout/Layout';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import AllUsers from './components/AllUsers';
import LoginTest from './components/LoginTest';
import { ProtectedRoute } from './components/routes/ProtectedRoute';
/* import UserProvider, {UserContext} from './context/UserProvider'; */
/* import { UserContext } from "../context/UserProvider"; */
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
/* import { isAuthenticated } from "./services/Login"; */

function App() {  
  
 
  console.log("usuario:");
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>        
            <Layout>
              <Routes>
                {/* <Route element={<ProtectedRoute isAllowed={!!user} />}> */}
                  <Route path="/register" element={<Register />} />
                  <Route path="/login01" element={<Login01Base />} />
                {/* </Route> */}
                <Route path='/'           element={< HomePages/>}/>
                <Route path='/login'      element={< Login/>}/>
                {/* <Route path='/login01'    element={< Login01Base/>}/> */}
                <Route path='/login02'    element={< Login02Base/>}/>
                <Route path='/login03'    element={< Login03Base/>}/>
                <Route path='/login04'    element={< Login04Base/>}/>
                {/* <Route path='/register'   element={< Register/>}/> */}
                <Route path='/all'        element={< AllUsers/>}/>
                <Route path='/LoginTest'  element={< LoginTest/>}/>
                {/* <Route path="*" element={<Page404 />}   */}       
              </Routes>
            </Layout>
          {/* <Routes>          
            <Route path="*" element={<>404</>} />
          </Routes> */}
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
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

export default App