import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000/api";

export default axios.create({
    baseURL: BASE_URL,
    //headers: { 'Content-Type': 'application/json' },
    //withCredentials: true,
})


//ejemplo a usar para JWT
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export function Logout() {
    alert('You clicked me!');
  }

export const Logout01 = async data => {
    console.log('log out');
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
   
    } catch (e) {     
      
      /* console.log(data)   */    
      /* swal(e.response.data.message); */
    }
  };