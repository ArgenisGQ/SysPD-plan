/* import { Card, Text, Metric, TextInput, Flex, Grid, Col } from '@tremor/react'; */
/* import { Grid, Col, TMetric } from "@tremor/react"; */
/* import React from 'react'; */
/* import { useContext } from "react"; */
import { useState, useEffect }      from 'react';
import TremuTest         from '../components/xtest/TremuTest';
import FormBase          from '../components/xtest/FormBase';
import LoginBase         from '../components/xtest/LoginBase';
import Login01Base       from '../components/xtest/Login01Base';
import Login02Base       from '../components/xtest/Login02Base';
import Login03Base       from '../components/xtest/Login03Base';
import Login04Base       from '../components/xtest/Login04Base';

import Register          from '../components/xtest/register';
import AllUsers          from '../components/xtest/AllUsers';
import LoginTest         from '../components/xtest/LoginTest';
/* import HomePages from './scenes/HomePages'; */
import Pagination       from '../pages/Pagination';
import HomePages        from '../pages/HomePages';
import Login            from '../pages/login/Login';
import Layout           from '../pages/layout/Layout';
import { BrowserRouter,
         Routes,
         Route,
         useNavigate,
         createBrowserRouter,
         RouterProvider,
                       } from 'react-router-dom';

//--Routes protegidas--//
import ProtectedRoute    from './ProtectedRoute';

/* import UserProvider, {UserContext} from './context/UserProvider'; */
/* import { UserContext } from "../context/UserProvider"; */
import { UserProvider }  from "../context/UserContext";
import { AuthProvider }  from "../context/AuthContext";
/* import { isAuthenticated } from "./services/Login"; */

//--solo para pruebas--//
import Spiners            from "../forUse/spiners";
/* import Burguer from "../forUse/burguer"; */

import AuthLayout         from '../layouts/auth/index';
import AdminLayout        from '../layouts/admin/index';
import LayoutAdmin        from '../pages/layout/LayoutAdmin'; 
// Admin Imports
import HomePage           from '../views/home';
/* import MainDashboardUsers from "../views/admin/default"; */
import MainDashboardUsers from "../views/admin/dashboard";
import Users              from "../views/admin/users";
import MyProfile          from "../views/admin/myprofile";
import UserForm           from "../views/admin/userForm";
import UserCreate         from "../views/admin/userCreateEdit";
import NextForm           from "../views/admin/nextForm";
import Uploads            from "../views/admin/uploads";
import Role               from "../views/admin/role";
import Periods            from "../views/admin/periods";

import Planning           from "../views/admin/planning"; //referencia
import Plannings          from "../views/plannings/plannings";
import PlanningCreate     from "../views/plannings/planningCreateEdit";

import Stepper            from "../views/plannings/stepper";

import UserProfile        from "../views/admin/userCreateEdit/myprofile";

import Courses            from "../views/admin/courses/courses";
import CourseCreate       from "../views/admin/courses/courseCreateEdit";

import Warning404         from "../views/warnings/404"
import CommingSoon        from "../views/warnings/commigSoon"

/* import NFTMarketplace from "../views/admin/marketplace"; */

/* import DataTables from "../views/admin/dataTables"; */
// Reference Imports 
import MainDashboard      from "../views/reference/default";
import NFTMarketplace     from "../views/reference/marketplace";
import Profile            from "../views/reference/profile";
import DataTables         from "../views/reference/dataTables";
/* import RTL from "./views/admin/rtl"; */

// Auth Imports
import SignInCentered      from "../views/auth/signIn";
import { useLocalStorage } from 'react-use';
import { effect } from '@chakra-ui/system';

function AppRouter() { 
  const navigate = useNavigate();
  const [userActive, setUserActive] = useState(false);
  /* const [dataStorage, setDataStorage] = useState(null); */
  /* const [user, setUser] = useState('') */
  const [status, setStatus] = useState('')


  const dataStorageStr = localStorage.getItem("responseF");
  /* const dataStorage = JSON.parse(dataStorageStr);
  console.log('CONTROL: ', dataStorage.user) */
   //control de usuario activo para accesos  canActive={true}


  /* setUser()  
  console.log("user(localStorage): ", user) */
   
  useEffect(() => {
    console.log("CONTROL DE DATASTORAGESTR: ", dataStorageStr)
    if (!(dataStorageStr==='undefined')) {   
      const dataStorage = JSON.parse(dataStorageStr);
      setStatus(dataStorage?.status)
      if (status === "success") {
        setUserActive(true);
      }  
      console.log("datos en HOME:",dataStorage?.status);
    } else {
      console.log("undefined")
      console.log("datos en HOME: ", "no active");
    } 
  }) 


 /*  const dataStorage = JSON.parse(dataStorageStr);
  console.log("datos en HOME:",dataStorage?.status); */


  
  //el error esta en la carga d status.. revisar!
  /* useEffect(() => {
    setStatus(dataStorage?.status)
    if (status === "success") {
      setUserActive(true);
    }     
  }); */



  /* const userActive = dataStorage?.user; */
  /* setUserActive(dataStorage?.user); */

  /* const userActiveStr = localStorage.getItem("responseF");
  const userActiveObj = JSON.parse(userActiveStr); */

  /* const userActive = userActiveObj?.user; */
  console.log("datos usUario full(router): ", userActive)

 

  return (
    <>
    {/*< BrowserRouter>
      <AuthProvider>
        <UserProvider>*/}        
            
              <Routes>
                {/* <Layout>  */}
                <Route path='/' element={<Layout />} >
                {/* <Route path='/' element={<LayoutAdmin />} >  */}
                      
                      {/* <Route exact path='/'           element={< HomePages/>}/> */}
                      <Route exact path='/'           element={< HomePage/>}/>                       
                      {/* <Route exact path='/login'      element={< Login/>}/> */}
                      <Route exact path='/login'      element={< SignInCentered/>}/>
                      {/* <Route path='/login01'    element={< Login01Base/>}/> */}
                      {/* <Route exact path='/login02'    element={< Login02Base/>}/> */}
                      {/* <Route exact path='/login03'    element={< Login03Base/>}/> */}
                      {/* <Route exact path='/login04'    element={< Login04Base/>}/> */}
                      {/* <Route exact path='/pagination'    element={< Pagination/>}/> */}
                      {/* <Route path='/register'   element={< Register/>}/> */}
                      {/* <Route exact path='/all'        element={< AllUsers/>}/> */}
                      {/* <Route exact path='/LoginTest'  element={< LoginTest/>}/> */}
                      {/* <Route path="*" element={<Page404 />}   */}

                      <Route path="/" element={<ProtectedRoute canActive={userActive} redirectPath='/' />}>
                        <Route exact path="/register" element={<Register />} />
                        {/* <Route exact path="/login01" element={<Login01Base />} /> */}
                        <Route exact path='/all'        element={< AllUsers/>}/>
                      </Route>


                      {/* SOLO PRUEBAS */}
                      <Route path='/spiners'  element={< Spiners/>}/> 

                      {/* <Route path='/admin/*'                element={< AdminLayout/>}/>
                      <Route path='/auth/*'                 element={< AuthLayout/>}/> */}
                      {/* <Route path='/admin/default'          element={< MainDashboard/>}/>
                      <Route path='/admin/nft-marketplace'  element={< NFTMarketplace/>}/>
                      <Route path='/admin/data-tables'      element={< DataTables/>}/>
                      <Route path='/admin/profile'          element={< Profile/>}/>                      
                      <Route path='/auth/sign-in'           element={< SignInCentered/>}/> */}

                      <Route path="/admin" element={<AdminLayout />}>
                        <Route path="/admin/"                       element={< Warning404/> } />
                        {/* <Route path='/admin' element={ navigate('/admin/default') }/> */} 
                        {/* <Route path='/admin/'                     element={navigate('/admin/dashboard')}/> */}                       
                        <Route path='/admin/dashboard'              element={< MainDashboardUsers/>}/>
                        
                        <Route path='/admin/users/userslist'        element={< Users/>}/>
                        <Route path='/admin/users/userform'         element={< UserForm/>}/>
                        <Route path='/admin/users/usercreate'       element={< UserCreate/>}/>
                        <Route path='/admin/users/useredit/:id'     element={< UserCreate editActive={true}/>}/>

                        <Route path='/admin/courses/courseslist'    element={< Courses/>}/>
                        <Route path='/admin/courses/coursecreate'   element={< CourseCreate/>}/>
                        <Route path='/admin/courses/courseedit/:id' element={< CourseCreate editActive={true}/>}/>

                        <Route path='/admin/planning/'                    element={< Planning/>}/> 
                        <Route path='/admin/planning/planninglist'        element={< Plannings/>}/>
                        <Route path='/admin/planning/planningcreate'      element={< PlanningCreate/>}/>
                        <Route path='/admin/planning/planningeedit/:id'   element={< CommingSoon/>}/>
                        <Route path='/admin/planning/stepper'             element={< Stepper/>}/>  

                        <Route path='/admin/users/nextform'         element={< NextForm/>}/>
                        <Route path='/admin/system/uploads'         element={< Uploads/>}/>
                        <Route path='/admin/system/role'            element={< Role/>}/>
                        <Route path='/admin/system/periods'         element={< Periods/>}/>
                        {/* <Route path='/admin/planning'               element={< Planning/>}/> */}         
                        {/* <Route path='/reference/default'          element={< MainDashboard/>}/> */}
                        {/* <Route path='/reference/nft-marketplace'  element={< NFTMarketplace/>}/> */}
                        {/* <Route path='/reference/data-tables'      element={< DataTables/>}/> */}
                        <Route path='/admin/myprofile'            element={< MyProfile/>}/>
                        <Route path='/admin/users/userprofile'          element={< UserProfile/>}/>                          
                      </Route>

                      <Route path="/reference" element={<AdminLayout />}>
                        {/* <Route path='/admin' element={ navigate('/admin/default') }/> */}                        
                        {/* <Route path='/admin/default'            element={< MainDashboardUsers/>}/> */}
                        {/* <Route path='/admin/users'              element={< Users/>}/>   */}
                        <Route path='/reference/default'          element={< MainDashboard/>}/>
                        <Route path='/reference/nft-marketplace'  element={< NFTMarketplace/>}/>
                        <Route path='/reference/data-tables'      element={< DataTables/>}/>
                        <Route path='/reference/profile'          element={< Profile/>}/>                          
                      </Route>

                      <Route path="/auth" element={< AuthLayout/>}>
                        <Route path='/auth/sign-in'           element={< SignInCentered/>}/>                         
                      </Route>



                </Route>
                {/* </Layout> */}


                <Route path="*">
                    <Route path="*" element={< Warning404/> } />
                </Route> 

               {/*  <Route path="/admin">
                    <Route path="/" element={<>404</>} />
                </Route> */}


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