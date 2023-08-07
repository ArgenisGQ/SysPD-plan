import axios from "./axios";
import swal from "sweetalert";
import React, { useEffect, useState} from 'react';
import { Link, useNavigate }  from "react-router-dom";

const login = async (data) => {
    /* console.log(data.email); */
    const [email, password ] = [data.email, data.password ];
    /* const csrf = () => axios.get("/sanctum/csrf-cookie");    */ 
    /* data.preventDefault(); */
    /* await csrf(); */
    /* console.log(csrf); */
    /* const navigate = useNavigate(); */
    try {      
      await axios.post('/login', {email, password})
      .then((response) => {
        /* if (response.data.username) {
          localStorage.setItem("user", JSON.stringify(response.data));
        } */
        /* console.log(response.data); */
        /* console.log(response.data.message);  */
        /* console.log(response.data.accessToken); */
  
        if(response.data.status==="success"){
          console.log(response.data);
          /* sessionStorage.setItem('userr', response.data); */
          console.log('probando grabado de session storage..')
          sessionStorage.setItem('accessToken', response.data.accessToken);
          /* sessionStorage.setItem('user', response.data.user); */
          sessionStorage.user = JSON.stringify(response.data.user);//REVISAR

          /* sessionStorage.setItem([
            'accessToken', response.data.accessToken,
            'status',           response.data.status,
          ]); */
          /* sessionStorage.setItem('accessToken', response.data.accessToken);   */   
          console.log(sessionStorage.accessToken);
          console.log(sessionStorage.user);
          console.log(sessionStorage);
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
  
  
    //*************** */  
      /* const logg = useEffect(() => {
        axios.get('/login').then((response) => {
          setPost(response.data);
        }); */
    //*************** */  
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

  //---------------testing-----------------//
  function login20() { 
    
  
    
  }
  export {login20};

  function useLogin(data) {    
    const navigate = useNavigate();
    console.log('testing...');
    console.log(data);
    /* navigate('/'); */
    useEffect(function () {
        console.log('used');
        /* navigate('/'); */
      })
  }
  export {useLogin};

  