import axios from "./axios";

function logout01() {
    alert('You clicked me!');
    console.log('clicked')
 }
export {logout01};

  
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