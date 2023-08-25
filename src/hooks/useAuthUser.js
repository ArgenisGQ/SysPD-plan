import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';



const useAuthUser = (data) => {
    const navigate = useNavigate();    
    const [userAuth,   setUserAuth]    = useState(null);
    const [userStatus, setUserStatus]  = useState(null);
    const [userToken,  setUserToken]   = useState(null);    
    const queryClient = useQueryClient();
    const mutLogin    = useMutation(
        async (data) => {    
          const [email, password ] = [data.email, data.password];
          try {
              const response = await axios.post('/login', {email, password})                       
              const status = response?.data?.status;
              const accessToken = response?.data?.accessToken;
              /* const roles = response?.data?.roles;
              setAuth({ user, pwd, roles, accessToken });
              setUser("");
              setPwd("");
              setSuccess(true); */
              /* setStatus(status);
              sessionStorage.setItem('accessToken', accessToken);
              sessionStorage.setItem('status', status);
              setAuth({ status, accessToken });      
              console.log("token:",accessToken); */
              /* navigate('/'); */
  
              /* console.log("token:::::2",accessToken); */
              setUserAuth(response?.data?.user);
              /* navigate('/'); */
              return response.data;
            } catch (err) {
              /* if (!err?.response) {
                setErrMsg("No Server Response");
              } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
              } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
              } else {
                setErrMsg("Login Failed");
              } */
             
              /* swal(err.response.data.message); */
  
              /* console.log("Error de conexx2:", err); */
              return err.response.data.message;
            }
          /* return outfit.json(); */
        },
        {
          /* onMutate: () => {
            console.log("Ïnicia la mutacion");
          },
          onSuccess: (response) => {
            console.log("response:", response);
          },
          onError: (error) => {
            console.log(error);
          },
          onSettled: () => {
            console.log("Terminada la mutacion")
          } */
        }
    )
    const mutLogout   = useMutation(
      async (data)  => {  
        console.log('borrando cache2');          
        /* data.preventDefault(); */
        try {
          await axios.get('/logout',           
          {
              headers: {                
                'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}` 
                /* 'Authorization': `Bearer ${sessionStorage.accessToken}` */ 
              }
          })
          .then((response) => {        
            console.log("token antes2:")
            console.log(queryClient.getQueryData(["userAuth"]));
            /* sessionStorage.clear(); */
            queryClient.removeQueries();
            console.log("token despues2:")
            console.log(queryClient.getQueryData(["userAuth"]));
            /* console.log(response.data); */
            /* console.log(response.data.message); */
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
          console.log("cache borrada...2");
          /* console.log(response.data.message); */      
        } catch (e) {
          console.log(e.response.message);         
          /* swal(e.response.data.message); */
        }       
      }      
    )

    function Login5(data) {
        console.log("--en hooks--")
        mutLogin.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia la mutacion (en hooks)");
            },
            onSuccess: (response) => {
              console.log("response (hooks):", response);
              queryClient.setQueryData("userAuth",response?.accessToken);
              queryClient.setQueryData("status",response?.status);
              queryClient.setQueryData("user",response?.user);
              const token  = queryClient.getQueryData(["userAuth"]);
              const status = queryClient.getQueryData(["status"]);
              const user   = queryClient.getQueryData(["user"]);
              console.log ("token (en hooks): ", token);
              console.log ("status (en hooks): ", status);
              console.log ("user (en hooks): ", user);
              /* setUserAuth('user'); */
              setUserStatus(status);
              setUserToken(token);
              navigate('/');
            },
            onError: (error) => {
              console.log(error);
            },
            onSettled: (response) => {
              queryClient.setQueryData("status",response.status);
              const status = queryClient.getQueryData(["status"]);
              console.log ("status (en otro hooks): ", status);
              console.log("Terminada la mutacion (en hooks)")
            }
          });    
      }

    /* const Logout1 = () => {
      console.log("log out");
    } */

    function Logout1 () {
      console.log("log out");
    }
    
    function Logout5(data) {
        console.log("--en hooks--(out)")
        /* mutLogout.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia la mutacion (en hooks -- out)");
            },
            onSuccess: (response) => {
              console.log("onSucc -- logout");
            },
            onError: (error) => {
              console.log(error);
            },
            onSettled: (response) => {
              
              const status = queryClient.getQueryData(["status"]);
              console.log ("status (en otro hooks): ", status);
              console.log("Terminada la mutacion (en hooks)")
            }
          }); */
      }

  return [
        userAuth,
        userStatus,
        userToken,
        Login5,
        mutLogin,
        mutLogout,
        Logout5,
        Logout1 
  ] 
    
}

export default useAuthUser