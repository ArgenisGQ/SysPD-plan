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
          await axios.get('/users/',           
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

    const mutShowUser  = useMutation(
      async (data)  => {  
        console.log('Datos de usuario -- 090224');
        try {
          await axios.get('/users/show'+data.id,           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show user: ", response)
            /* localStorage.setItem("dataUsers",JSON.stringify(response?.data)); */ 

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
        console.log("datos para enviar: ", data)   
        const [username, idcard, firstname, lastname, email, password ] = [data.username,
                                                                           data.idcard,
                                                                           data.firstname,
                                                                           data.lastname,
                                                                           data.email,
                                                                           data.password];
        try {
            /* const response = await axios.post('/login', {email, password}) */
            const name = firstname + ', ' + lastname;
            /* console.log("nombre concatenado: ", name) */
            /* await axios.post('/register', 
            { username, email, name, password }); */ 
            
            const response = await axios.post('/store', 
            { username, name, email, password },
            {
              headers: {
                  /* 'Authorization': `Bearer ${sessionStorage.accessToken}` */
                  /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}` */
                  'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}`  
              }
            });
              console.log("data en create user: ", response)
              localStorage.setItem("dataCreateUser",JSON.stringify(response));
              console.log("dataCreateUser en origen: ",localStorage.getItem("dataCreateUser"))
            /* const status = response?.data?.status; */
            /* const accessToken = response?.data?.accessToken; */
            /* setUserAuth(response?.data?.user); */
            /* navigate('/'); */
              console.log('datos de usuarios enviados..')
              return response;            
            } catch (err) {
              console.log("Error de envio o registro de usuario: ", err);
              /* return err.response.data.message; */
              console.log("Tipo de error: ", err )
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
            /* console.log("storage de datos USUARIOS --", localStorage.getItem("dataUsers")) */
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
        console.log("creando usuario--en hooks--")
        mutCreateUser.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia creacion de usuario(en hooks)");
            },
            onSuccess: (response) => {
              console.log("response PROCESANDO CREAR USuARIO(hooks):", response);
              console.log("datos del registro de usuario: ",response.data);
              console.log("mensaje del registro de usuario: ",response.message);
              /* queryClient.setQueryData("userAuth",response?.accessToken);
              queryClient.setQueryData("status",response?.status); */
              /* localStorage.setItem("responseF",JSON.stringify(response));
              const responseFull =localStorage.getItem("responseF");              
              console.log("response full: ", responseFull);
              const responseFullObj = JSON.parse(responseFull);
              console.log("response Full Obj: ", responseFullObj) */
              
              
              
              /* localStorage.setItem("userAuth",response?.accessToken);
              localStorage.setItem("status",response?.status);
              localStorage.setItem("user",[response?.user]);
              localStorage.setItem("message",response?.message);
              localStorage.setItem("userString",JSON.stringify(response?.user)); */

              /* const token  = queryClient.getQueryData(["userAuth"]);
              const status = queryClient.getQueryData(["status"]);
              const user   = queryClient.getQueryData(["user"]); */

              /* const token  = localStorage.getItem(["userAuth"]);
              const status = localStorage.getItem(["status"]);
              const user   = localStorage.getItem(["user"]);
              const message  = localStorage.getItem(["message"]);
              const userString = localStorage.getItem(["userString"]) */

              /* const userObject = JSON.parse(localStorage.getItem('userString')) */

              /* console.log ("token (en hooks): ", token);
              console.log ("status (en hooks): ", status);
              console.log ("user (en hooks): ", user); 
              console.log ("message (en hooks - CACHE): ", message);
              console.log ("user String (en hooks): ", userString); */

              /* console.log ("user Object (en hooks): ", userObject); */                
              /* setUserAuth(user);
              setUserStatus(status);
              setUserToken(token); */
              
              /* if (status === "success") {
                navigate('/');
              } else { 
                navigate('/login');
              } */              
            },
            onError: (error) => {
              /* const err =  JSON.parse(error); */
              console.log("Errores creando usuarios(hook):",error);
              /* navigate('/login'); */
            },
            onSettled: (response) => {
              /* queryClient.setQueryData("status",response.status);
              const status = queryClient.getQueryData(["status"]); */
              console.log("RESPONSE creando usuarios (out): ",response )
              /* localStorage.setItem("status",response?.status);
              const status = localStorage.getItem(["status"]);
              console.log ("status (en otro hooks): ", status); */
              console.log("Terminado el proceso de crear usuario (en hooks)")
            }
          });    
    }
    function ShowUser(data) {
        console.log("Mostrando usuario--en hooks--")
        mutCreateUser.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia Muestra de usuario(en hooks)");
            },
            onSuccess: (response) => {
              console.log("response PROCESANDO MOSTRAR USuARIO(hooks):", response);
              console.log("datos del USUARIO: ",response.data);
              console.log("mensaje de LA MUESTRA DE USUARIO: ",response.message);
              /* queryClient.setQueryData("userAuth",response?.accessToken);
              queryClient.setQueryData("status",response?.status); */
              /* localStorage.setItem("responseF",JSON.stringify(response));
              const responseFull =localStorage.getItem("responseF");              
              console.log("response full: ", responseFull);
              const responseFullObj = JSON.parse(responseFull);
              console.log("response Full Obj: ", responseFullObj) */
              
              
              
              /* localStorage.setItem("userAuth",response?.accessToken);
              localStorage.setItem("status",response?.status);
              localStorage.setItem("user",[response?.user]);
              localStorage.setItem("message",response?.message);
              localStorage.setItem("userString",JSON.stringify(response?.user)); */

              /* const token  = queryClient.getQueryData(["userAuth"]);
              const status = queryClient.getQueryData(["status"]);
              const user   = queryClient.getQueryData(["user"]); */

              /* const token  = localStorage.getItem(["userAuth"]);
              const status = localStorage.getItem(["status"]);
              const user   = localStorage.getItem(["user"]);
              const message  = localStorage.getItem(["message"]);
              const userString = localStorage.getItem(["userString"]) */

              /* const userObject = JSON.parse(localStorage.getItem('userString')) */

              /* console.log ("token (en hooks): ", token);
              console.log ("status (en hooks): ", status);
              console.log ("user (en hooks): ", user); 
              console.log ("message (en hooks - CACHE): ", message);
              console.log ("user String (en hooks): ", userString); */

              /* console.log ("user Object (en hooks): ", userObject); */                
              /* setUserAuth(user);
              setUserStatus(status);
              setUserToken(token); */
              
              /* if (status === "success") {
                navigate('/');
              } else { 
                navigate('/login');
              } */              
            },
            onError: (error) => {
              /* const err =  JSON.parse(error); */
              console.log("Errores creando usuarios(hook):",error);
              /* navigate('/login'); */
            },
            onSettled: (response) => {
              /* queryClient.setQueryData("status",response.status);
              const status = queryClient.getQueryData(["status"]); */
              console.log("RESPONSE creando usuarios (out): ",response )
              /* localStorage.setItem("status",response?.status);
              const status = localStorage.getItem(["status"]);
              console.log ("status (en otro hooks): ", status); */
              console.log("Terminado el proceso de crear usuario (en hooks)")
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
        ShowUser, 
        mutLogin,
        mutLogout,
        
        /* Logout1, */
        
  }
    
}

export default useAuthUser