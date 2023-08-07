import axios from "./axios";
import swal from "sweetalert";
import React, { useEffect, useState, useNavigate } from 'react'

/* const [ email, setEmail ] = useState( [] );  
const [ password, setPassword ] = useState( [] );  */
/* const [ user, setUser ] = useState( [] ); 
const [list, setList] = useState([]); // */
/* const navigate = useNavigate(); */


function logout01() {
    const [ email, setEmail ] = useState( [] );
    alert('You clicked me!');
    console.log('clicked')
 }
export {logout01};


function login02() {

  console.log("via services/axios");

  const [ email, setEmail ] = useState( [] );  
  const [ password, setPassword ] = useState( [] ); 
  const [ user, setUser ] = useState( [] ); 
  const [list, setList] = useState([]); //
  const navigate = useNavigate();

  const onSubmit01 = async data => {
    /* console.log(data.email); */
    const [email, password ] = [data.email, data.password ];
    /* const csrf = () => axios.get("/sanctum/csrf-cookie");    */ 
    /* data.preventDefault(); */
    /* await csrf(); */
    /* console.log(csrf); */
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
          sessionStorage.setItem('accessToken', response.data.accessToken);
          console.log(sessionStorage.accessToken);
          return response.data;
        } else {
          console.log("error")
        }
        /* return response.data;  */          
      });
      setEmail('');
      setPassword('');
      navigate('/');
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

}
export {login02};
/* export default login02; */


/* function login03() {
  const [ email, setEmail ] = useState( [] );  
  alert('You clicked me!');
  console.log(email);
  return (email);
} */



function login03() {    
    const [ email, setEmail ] = useState( [] );
    alert('You clicked me!');
    console.log(email); 
    /* return login03  */
  }
export {login03};

function login20() {    
  /* const [ email, setEmail ] = useLogin( [] ); */
  /* alert('You clicked me!'); */
  console.log('testing');
  /* return login03  */
}
export {login20};

function useLogin() {    
  const navigate = useNavigate();
  console.log('testing');
  navigate('/');
}
export {useLogin};



//-------------------//------------------------//
const login = async (data) => {
  /* console.log(data.email); */
  const [email, password ] = [data.email, data.password ];
  /* const csrf = () => axios.get("/sanctum/csrf-cookie");    */ 
  /* data.preventDefault(); */
  /* await csrf(); */
  /* console.log(csrf); */
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
        sessionStorage.setItem('accessToken', response.data.accessToken);
        console.log(sessionStorage.accessToken);
        return response.data;
      } else {
        console.log("error")
      }
      /* return response.data;  */          
    });

    
    /* setEmail('');
    setPassword('');
    navigate('/'); */


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