/* import { Card, Text, Metric, TextInput, Flex, Grid, Col } from '@tremor/react'; */
/* import { Grid, Col, TMetric } from "@tremor/react"; */
/* import React from 'react'; */
/* import { useContext } from "react"; */
/* import AppRouter from '.AppRouter'; */
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import TremuTest from './components/xtest/TremuTest';
import FormBase from './components/xtest/FormBase';
import LoginBase from './components/xtest/LoginBase';
import Login01Base from './components/xtest/Login01Base';
import Login02Base from './components/xtest/Login02Base';
import Login03Base from './components/xtest/Login03Base';
import Login04Base from './components/xtest/Login04Base';
import Register from './components/xtest/register';
import Page404 from './components/xtest/Page404';
/* import HomePages from './scenes/HomePages'; */
import HomePages from './pages/HomePages';
import Login from './pages/login/Login';
import Layout from './pages/layout/Layout';
import AllUsers from './components/xtest/AllUsers';
import LoginTest from './components/xtest/LoginTest';
/* import { ProtectedRoute } from './routes/ProtectedRoute'; */
/* import UserProvider, {UserContext} from './context/UserProvider'; */
/* import { UserContext } from "../context/UserProvider"; */
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
/* import { isAuthenticated } from "./services/Login"; */

//--solo para pruebas--//
import Spiners from "./forUse/spiners";
import AppRouter from './routes/AppRouter';


import ReactDOM from 'react-dom';
import './assets/css/App.css';
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */

/* import AuthLayout from './layouts/auth/index';
import AdminLayout from './layouts/admin/index'; */

/* import RtlLayout from 'layouts/rtl'; */

import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

import {  QueryClient,
  QueryClientProvider,
  useQuery, } from 'react-query';
  
const queryClient = new QueryClient();

function App() {  
  /* console.log("usuario:"); */
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>        
            {/* <Layout> */}
              
            <QueryClientProvider client={queryClient}>
              <ChakraProvider theme={theme}>
                <ThemeEditorProvider>
                  <AppRouter />
                </ThemeEditorProvider>
              </ChakraProvider>
            </QueryClientProvider>
                         
            



            {/* </Layout> */}


            {/* <Routes>
                <Route path="*">
                    <Route path="*" element={<>404</>} />
                </Route> 
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