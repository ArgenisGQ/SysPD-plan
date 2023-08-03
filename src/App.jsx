/* import { Card, Text, Metric, TextInput, Flex, Grid, Col } from '@tremor/react'; */
/* import { Grid, Col, TMetric } from "@tremor/react"; */
import React from 'react';
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllUsers from './components/AllUsers';
import LoginTest from './components/LoginTest';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'         element={< HomePages/>}/>
        <Route path='/login'    element={< Login/>}/>
        <Route path='/login01'  element={< Login01Base/>}/>
        <Route path='/login02'  element={< Login02Base/>}/>
        <Route path='/login03'  element={< Login03Base/>}/>
        <Route path='/login04'  element={< Login04Base/>}/>
        <Route path='/register' element={< Register/>}/>
        <Route path='/all'      element={< AllUsers/>}/>
        <Route path='/LoginTest' element={< LoginTest/>}/>
      </Routes>   
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