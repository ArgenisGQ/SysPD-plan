import axios from "./axios";
import swal from "sweetalert";
import React, { useEffect, useState} from 'react';
import { Link, useNavigate }  from "react-router-dom";

const login = async (data) => {    
    const [email, password ] = [data.email, data.password ];    
    try {      
      await axios.post('/login', {email, password})
      .then((response) => {        
        /* console.log(response.data); */
        /* console.log(response.data.message);  */
        /* console.log(response.data.accessToken); */  
        if(response.data.status==="success"){
          /* console.log(response.data); */          
          console.log('session storage..')
          sessionStorage.setItem('accessToken', response.data.accessToken);
          sessionStorage.setItem('status', response.data.status);
          sessionStorage.setItem('permissions', ["analize"] );
          sessionStorage.setItem('roles', ["admin"]);          
          sessionStorage.user = JSON.stringify(response.data.user);//REVISAR
          // let user = JSON.parse( localStorage.user ); //REVISAR
          
          /* sessionStorage.setItem('accessToken', response.data.accessToken);   */   
          /* console.log(sessionStorage.accessToken); */
          console.log(sessionStorage.status);
          console.log(sessionStorage.permissions);
          console.log(sessionStorage.roles);
          //console.log(sessionStorage.user);//USUARIO COMPLETO 
          /* console.log(sessionStorage); */
          /* login20(); */
          return response.data;
        } else {
          console.log("error")
        }
        /* return response.data;  */          
      });
  
      
      /* setEmail('');
      setPassword(''); */
      /* navigate('/'); */ 
    
    } catch (e) {     
      /* if (e.response.status === 401) {
        setErrors(e.response.data.message);
      } */
      /* console.log(data)   */    
      swal(e.response.data.message);
    }
  };
  export {login};

  //----------------//----------------//  
const logout = async (data)  => {  
    console.log('borrando cache');          
    /* data.preventDefault(); */
    try {
      await axios.get('/logout',           
      {
          headers: {
            'Authorization': `Bearer ${sessionStorage.accessToken}` 
          }
      })
      .then((response) => {        
        console.log("token antes:")
        console.log(sessionStorage.accessToken);
        sessionStorage.clear();
        console.log("token despues:")
        console.log(sessionStorage.accessToken);
        console.log(response.data);
        console.log(response.data.message);
        /* if(response.data.status==="success"){
          console.log(response.data);              
          sessionStorage.setItem('accessToken', response.data.accessToken);
          console.log(sessionStorage.accessToken);
          return response.data;
        } else {
          console.log("error")
        } */

        /* return response.data;  */          
      });          
      /* navigate('/'); */
      console.log("cache borrada...");
      /* console.log(response.data.message); */      
    } catch (e) {
      console.log(e.response.message);         
      /* swal(e.response.data.message); */
    }       
  };
  export {logout};

  
  