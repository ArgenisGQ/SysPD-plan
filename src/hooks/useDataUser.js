import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import { localStorageManager } from '@chakra-ui/system';



const useAuthUser = (data) => {
    const navigate = useNavigate();    
    const [userAuth,   setUserAuth]    = useState(null);
    const [userStatus, setUserStatus]  = useState(null);
    const [userToken,  setUserToken]   = useState(null);    
    const queryClient = useQueryClient();


    const mutLogin      = useMutation(
        async (data) => {    
          const [email, password ] = [data.email, data.password];
          try {
              const response = await axios.post('/login', {email, password})                       
              const status = response?.data?.status;
              const accessToken = response?.data?.accessToken;
              setUserAuth(response?.data?.user);
              /* navigate('/'); */
              return response.data;
            } catch (err) {
              console.log("Error de conexx2:", err);
              /* return err.response.data.message; */
              return err.response;
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
    const mutLogout     = useMutation(
      async (data)  => {  
        console.log('borrando cache2 - out');
        try {
          await axios.get('/logout',           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {        
            console.log("token antes2 - out:",localStorage.getItem(["userAuth"]))
            /* queryClient.removeQueries(); */
            localStorage.clear();
            /* localStorage.removeItem(["userAuth"]); */
            console.log("token despues2 - out:",localStorage.getItem(["userAuth"]))           
          });
          console.log("cache borrada...2 - out");   
        } catch (e) {
          console.log(e.response.message);
        }       
      }      
    )

    const mutDataUsers  = useMutation(
      async (data)  => {  
        console.log('creacion de usuario -- 070224');
        try {
          await axios.get('/index',           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("datausers: ", response.data)
            localStorage.setItem("dataUsers",JSON.stringify(response?.data));        
            /* console.log("token antes2 - out:",localStorage.getItem(["userAuth"])) */
            /* queryClient.removeQueries(); */
            /* localStorage.clear(); */
            /* localStorage.removeItem(["userAuth"]); */
            /* console.log("token despues2 - out:",localStorage.getItem(["userAuth"]))  */          
          });
          console.log("terminado de cargar listado de usuarios");   
        } catch (e) {
          console.log("error - DATA: ",e.response.message);
        }       
      }    
    )

    const mutCreateUser = useMutation(
      async (data) => {    
        const [username, idcard, user, lastname, email, password ] = [data.username,
                                                            data.idcard,
                                                            data.user,
                                                            data.lastname,
                                                            data.email];
        try {
            const response = await axios.post('/login', {email, password})                       
            const status = response?.data?.status;
            const accessToken = response?.data?.accessToken;
            setUserAuth(response?.data?.user);
            /* navigate('/'); */
            return response.data;
          } catch (err) {
            console.log("Error de conexx2:", err);
            /* return err.response.data.message; */
            return err.response;
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

    function Login5(data) {
        console.log("--en hooks--")
        mutLogin.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia la mutacion (en hooks)");
            },
            onSuccess: (response) => {
              console.log("response (hooks):", response);
              /* queryClient.setQueryData("userAuth",response?.accessToken);
              queryClient.setQueryData("status",response?.status); */
              localStorage.setItem("responseF",JSON.stringify(response));
              const responseFull =localStorage.getItem("responseF");              
              console.log("response full: ", responseFull);
              const responseFullObj = JSON.parse(responseFull);
              console.log("response Full Obj: ", responseFullObj)
              
              
              
              localStorage.setItem("userAuth",response?.accessToken);
              localStorage.setItem("status",response?.status);
              localStorage.setItem("user",[response?.user]);
              localStorage.setItem("message",response?.message);
              localStorage.setItem("userString",JSON.stringify(response?.user));
              /* const token  = queryClient.getQueryData(["userAuth"]);
              const status = queryClient.getQueryData(["status"]);
              const user   = queryClient.getQueryData(["user"]); */

              const token  = localStorage.getItem(["userAuth"]);
              const status = localStorage.getItem(["status"]);
              const user   = localStorage.getItem(["user"]);
              const message  = localStorage.getItem(["message"]);
              const userString = localStorage.getItem(["userString"])
              /* const userObject = JSON.parse(localStorage.getItem('userString')) */

              console.log ("token (en hooks): ", token);
              console.log ("status (en hooks): ", status);
              console.log ("user (en hooks): ", user); 
              console.log ("message (en hooks - CACHE): ", message);
              console.log ("user String (en hooks): ", userString);
              /* console.log ("user Object (en hooks): ", userObject); */                
              setUserAuth(user);
              setUserStatus(status);
              setUserToken(token);
              if (status === "success") {
                navigate('/');
              } else { 
                navigate('/login');
              }              
            },
            onError: (error) => {
              /* const err =  JSON.parse(error); */
              console.log("Errores(hook):",error);
              /* navigate('/login'); */
            },
            onSettled: (response) => {
              /* queryClient.setQueryData("status",response.status);
              const status = queryClient.getQueryData(["status"]); */
              console.log("RESPONSE(out): ",response.message )
              /* localStorage.setItem("status",response?.status);
              const status = localStorage.getItem(["status"]);
              console.log ("status (en otro hooks): ", status); */
              console.log("Terminada la mutacion (en hooks)")
            }
          });    
    } 

    function Logout5(data) {
        console.log("--en hooks--(out)");
        mutLogout.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia la mutacion (en hooks -- out)");
            },
            onSuccess: (response) => {
              console.log("response(mutate out): ",response)
              console.log("onSucc -- logout");
              console.log("redireccionando a HOME -- logout");
              /* await axios.get('/logout',           
              {
                  headers: {   
                    'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
                  }
              }) */
              localStorage.clear();
              localStorage.removeItem(["userAuth"]);
              navigate('/');
            },
            onError: (error) => { 
              console.log(error);
            },
            onSettled: (response) => {
              
              const status = localStorage.getItem(["status"]);
              const message = localStorage.getItem(["message"]);
              console.log ("status (en otro hooks -- out): ", status);
              console.log ("message (en otro hooks -- out): ", message);
              console.log("Terminada la mutacion (en hooks) -- out")
            }
          });

          /* {
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
              console.log ("status (en otro hooks -- out): ", status);
              console.log("Terminada la mutacion (en hooks) -- out")
            }
          }); */
    }      

    function DataUsers(data){
        console.log("datos de usuario -- 050224");
        mutDataUsers.mutate(data,
        {
          onMutate: () => {
            console.log("Ïnicia la mutacion (en hooks -- DATOS)");
          },
          onSuccess: (response) => {
            console.log("response(DATOS USER out): ",response?.data)
            console.log("storage de datos USUARIOS --", localStorage.getItem("dataUsers"))
           /*  console.log("onSucc -- logout");
            console.log("redireccionando a HOME -- logout"); */
            /* await axios.get('/logout',           
            {
                headers: {   
                  'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
                }
            }) */
            /* localStorage.clear();
            localStorage.removeItem(["userAuth"]);
            navigate('/'); */
          },
          onError: (error) => { 
            console.log(error);
          },
          onSettled: (response) => {
            
            const status = localStorage.getItem(["status"]);
            const message = localStorage.getItem(["message"]);
            console.log ("status (test -- out): ", status);
            console.log ("message (test -- otro hooks -- out): ", message);
            console.log("Terminada la mutacion (en hooks)  DANZA-- out")
          }
        });

        /* {
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
            console.log ("status (en otro hooks -- out): ", status);
            console.log("Terminada la mutacion (en hooks) -- out")
          }
        }); */
    }
    function CreateUser(data) {
        console.log("--en hooks--")
        mutCreateUser.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia la mutacion (en hooks)");
            },
            onSuccess: (response) => {
              console.log("response (hooks):", response);
              /* queryClient.setQueryData("userAuth",response?.accessToken);
              queryClient.setQueryData("status",response?.status); */
              localStorage.setItem("responseF",JSON.stringify(response));
              const responseFull =localStorage.getItem("responseF");              
              console.log("response full: ", responseFull);
              const responseFullObj = JSON.parse(responseFull);
              console.log("response Full Obj: ", responseFullObj)
              
              
              
              localStorage.setItem("userAuth",response?.accessToken);
              localStorage.setItem("status",response?.status);
              localStorage.setItem("user",[response?.user]);
              localStorage.setItem("message",response?.message);
              localStorage.setItem("userString",JSON.stringify(response?.user));
              /* const token  = queryClient.getQueryData(["userAuth"]);
              const status = queryClient.getQueryData(["status"]);
              const user   = queryClient.getQueryData(["user"]); */

              const token  = localStorage.getItem(["userAuth"]);
              const status = localStorage.getItem(["status"]);
              const user   = localStorage.getItem(["user"]);
              const message  = localStorage.getItem(["message"]);
              const userString = localStorage.getItem(["userString"])
              /* const userObject = JSON.parse(localStorage.getItem('userString')) */

              console.log ("token (en hooks): ", token);
              console.log ("status (en hooks): ", status);
              console.log ("user (en hooks): ", user); 
              console.log ("message (en hooks - CACHE): ", message);
              console.log ("user String (en hooks): ", userString);
              /* console.log ("user Object (en hooks): ", userObject); */                
              setUserAuth(user);
              setUserStatus(status);
              setUserToken(token);
              if (status === "success") {
                navigate('/');
              } else { 
                navigate('/login');
              }              
            },
            onError: (error) => {
              /* const err =  JSON.parse(error); */
              console.log("Errores(hook):",error);
              /* navigate('/login'); */
            },
            onSettled: (response) => {
              /* queryClient.setQueryData("status",response.status);
              const status = queryClient.getQueryData(["status"]); */
              console.log("RESPONSE(out): ",response.message )
              /* localStorage.setItem("status",response?.status);
              const status = localStorage.getItem(["status"]);
              console.log ("status (en otro hooks): ", status); */
              console.log("Terminada la mutacion (en hooks)")
            }
          });    
    } 
  return {
        userAuth,
        userStatus,
        userToken,
        Login5,
        Logout5,
        DataUsers,
        CreateUser, 
        mutLogin,
        mutLogout,
        
        /* Logout1, */
        
  }
    
}

export default useAuthUser