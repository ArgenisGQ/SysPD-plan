/* import { Card, Text, Metric, TextInput, Flex, Grid, Col } from '@tremor/react'; */
/* import { Grid, Col, TMetric } from "@tremor/react"; */
/* import React from 'react'; */
/* import { useContext } from "react"; */
/* import AppRouter from '.AppRouter'; */

/* import TremuTest from './components/TremuTest'; */
/* import FormBase from './components/FormBase'; */
/* import LoginBase from './components/LoginBase'; */
/* import Login01Base from './components/Login01Base'; */
/* import Login02Base from './components/Login02Base'; */
/* import Login03Base from './components/Login03Base'; */
/* import Login04Base from './components/Login04Base'; */
import Register from './components/register';
import Page404 from './components/Page404';
/* import HomePages from './scenes/HomePages'; */
import HomePages from './pages/HomePages';
import Login from './pages/login/Login';
import Layout from './pages/layout/Layout';
/* import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; */
import AllUsers from './components/AllUsers';
import LoginTest from './components/LoginTest';
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
/* import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'; */
import { BrowserRouter, Routes, Route, Redirect  } from 'react-router-dom';
import AuthLayout from './layouts/auth/index';
import AdminLayout from './layouts/admin/index';
/* import RtlLayout from 'layouts/rtl'; */
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';






function App() {  
  /* console.log("usuario:"); */ 
  console.log('prueba de dashboard');
  return (
    <>
    {/* <BrowserRouter>
      <AuthProvider>
        <UserProvider>        
            
              
             <AppRouter />            
            
        </UserProvider>
      </AuthProvider>
    </BrowserRouter> */}
   
    

   <ChakraProvider theme={theme}>
      {/* <React.StrictMode> */}
        <ThemeEditorProvider>
          <BrowserRouter>
            <Routes>
              <Route path={`/auth`} component={AuthLayout} />
              <Route path={`/admin`} component={AdminLayout} />
              {/* <Route path={`/rtl`} component={RtlLayout} /> */}
              <Redirect from='/' to='/admin' />
            </Routes>
          </BrowserRouter>
        </ThemeEditorProvider>
      {/* </React.StrictMode> */}
    </ChakraProvider>,

    </>      
    
  )
}

export default App