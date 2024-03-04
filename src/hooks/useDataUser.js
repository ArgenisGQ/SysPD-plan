import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import { localStorageManager } from '@chakra-ui/system';



const useDataUser = (data) => {
    const navigate = useNavigate();    
    const [userAuth,   setUserAuth]    = useState(null);
    const [userStatus, setUserStatus]  = useState(null);
    const [userToken,  setUserToken]   = useState(null);    
    const queryClient = useQueryClient();
    const [out, setOut] = useState("base")


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
        console.log('Datos de entrada SHOW: ', data)
        try {
          await axios.get('/users/'+data,           
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
            
            const response = await axios.post('/users', 
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

    const mutEditLoadUser = useMutation(
      async (data)  => {  
        console.log('Editor Conector: ',data);
        try {
          await axios.get('/users/'+data,           
          {
              headers: { 
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })          
          /* return response */
          
          .then((response) => {
            console.log("Edit Data User full: ", response.data.users)            
            localStorage.setItem('userForEdit',JSON.stringify(response.data.users))
            /* return response */
          });
          console.log("Terminado DATA DE USUARIO");
          /* return response */
        } catch (e) {
          console.log("error - DATA PARA EDITAR: ",e.response.message)
        }       
      } 
    )

    const mutEditUser = useMutation(
      async (data)  => {  
        console.log('Editor Conector: ',data);
        const [iduser, username, idcard, firstname, lastname, email, password ] = [data.iduser,
                                                                          data.username,
                                                                          data.idcard,
                                                                          data.firstname,
                                                                          data.lastname,
                                                                          data.email,
                                                                          data.password];
        try {
          const name = firstname + ', ' + lastname;

          await axios.put('/users/'+iduser,
          { username, name, email, password },           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show user edited: ", response)
            /* localStorage.setItem("dataUsers",JSON.stringify(response?.data)); */ 

            /* console.log("token antes2 - out:",localStorage.getItem(["userAuth"])) */
            /* queryClient.removeQueries(); */
            /* localStorage.clear(); */
            /* localStorage.removeItem(["userAuth"]); */
            /* console.log("token despues2 - out:",localStorage.getItem(["userAuth"]))  */          
          });
          console.log("Terminado EDITAR USUARIO");   
        } catch (e) {
          /* console.log("error - EDITAR: ",e.response.message); */
          console.log("error - EDITAR: ",e.message);
        }       
      } 
    )

    const mutDeleteUser = useMutation(
      async (data)  => {  
        console.log('BORRAR USUARIO: ',data);
        try {
          await axios.delete('/users/'+data,           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show user BORRAR: ", response)
            /* localStorage.setItem("dataUsers",JSON.stringify(response?.data)); */ 

            /* console.log("token antes2 - out:",localStorage.getItem(["userAuth"])) */
            /* queryClient.removeQueries(); */
            /* localStorage.clear(); */
            /* localStorage.removeItem(["userAuth"]); */
            /* console.log("token despues2 - out:",localStorage.getItem(["userAuth"]))  */
            
          }),
          /* .then(() => { */
            /* async (data)  => {  */ 
              /* console.log('LIST AFTER DELETING');
              try { */
                await axios.get('/users/',           
                  {
                      headers: {                
                        /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                        'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
                      }
                  })
                  .then((response) => {
                    console.log("datausers UPDATE/DELETE: ", response.data)
                    localStorage.setItem("dataUsers",JSON.stringify(response?.data)); 
                  });
                  console.log("terminado de cargar listado de usuarios");   
              /* } catch (e) {
                console.log("error - DATA: ",e.response.message);
              }    */    
            /* }  */
          /* }); */
          console.log("Terminado BORRAR USUARIO");   
        } catch (e) {
          console.log("error - BORRAR: ",e.response.message);
        }       
      },
      
    )

    const mutDestroyUser  = useMutation(
      async (data)  => {  
        console.log('Datos de usuario -- DESTROY');
        console.log('Datos de entrada DESTROY: ', data)
        try {
          await axios.get('/users/'+data,           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show user DESTROY: ", response)
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
              navigate('/admin/users/users');// ruta de listado de  usuarios
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
        mutShowUser.mutate(data,
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
              console.log("Errores MOSTRANDO usuarios(hook):",error);
              /* navigate('/login'); */
            },
            onSettled: (response) => {
              /* queryClient.setQueryData("status",response.status);
              const status = queryClient.getQueryData(["status"]); */
              console.log("RESPONSE MOSTRANDOusuarios (out): ",response )
              /* localStorage.setItem("status",response?.status);
              const status = localStorage.getItem(["status"]);
              console.log ("status (en otro hooks): ", status); */
              console.log("Terminado el proceso de MOSTRAR usuario (en hooks)")
            }
          });    
    }
    function EditLoadUser(data) {
      console.log("Precarga de datos para edicion-HOOKS")
      mutEditLoadUser.mutate(data,
        {
          onMutate: () => {
            console.log("Ïnicia LOAD -HOOKS-)");
          },
          onSuccess: (response) => {
            /* console.log("ZZZZZ response LOAD EDIT USuARIO(hooks):", response); */
            /* localStorage.setItem("userForEdit",JSON.stringify(response.data.users)); */
            console.log('DATOS A EDITAR - HOOK: ', localStorage.getItem("userForEdit"));
            /* queryClient.setQueriesData('userForEdit',JSON.stringify(response)) */
            /* console.log('DATOS A EDITAR - HOOK: ', queryClient.getItem('userForEdit')) */
           

            /* setOut('SALIDA ONSUCCESS') */

            /* console.log("datos del USUARIO: ",response.data);
            console.log("mensaje de LA MUESTRA DE USUARIO: ",response.message); */
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
            console.log("Errores LOAD EDIT usuarios(hook):",error);
            /* navigate('/login'); */
          },
          onSettled: (response) => {
            /* queryClient.setQueryData("status",response.status);
            const status = queryClient.getQueryData(["status"]); */
            /* console.log("RESPONSE LOAD EDIT (out): ",response ) */
            /* localStorage.setItem("status",response?.status);
            const status = localStorage.getItem(["status"]);
            console.log ("status (en otro hooks): ", status); */
            console.log("Terminado el proceso de LOAD EDIT (en hooks)")
          }
        });
        /* return {out} */   
    }
    function EditUser(data) {
      console.log("Mostrando usuario--en hooks--")
      mutEditUser.mutate(data,
        {
          onMutate: () => {
            console.log("Ïnicia Muestra de usuario(en hooks)");
          },
          onSuccess: (response) => {
            console.log("response PROCESANDO MOSTRAR USuARIO(hooks):", response);
            console.log("datos del USUARIO: ",response);
            console.log("mensaje de LA MUESTRA DE USUARIO: ",response);
            navigate('/admin/users/users'); //ruta de lista de usuarios
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
            console.log("Errores MOSTRANDO usuarios(hook):",error);
            /* navigate('/login'); */
          },
          onSettled: (response) => {
            /* queryClient.setQueryData("status",response.status);
            const status = queryClient.getQueryData(["status"]); */
            console.log("RESPONSE MOSTRANDOusuarios (out): ",response )
            /* localStorage.setItem("status",response?.status);
            const status = localStorage.getItem(["status"]);
            console.log ("status (en otro hooks): ", status); */
            console.log("Terminado el proceso de MOSTRAR usuario (en hooks)")
          }
        });    
    }
    function DeleteUser(data) {
      console.log("Mostrando usuario BORRAR--en hooks--: ",data)
      mutDeleteUser.mutate(data,
        {
          onMutate: () => {
            console.log("Ïnicia BORRADO de usuario(en hooks)");
          },
          onSuccess: (response) => {
            console.log("response BORRAR USuARIO(hooks):", response);
                       
          },
          onError: (error) => {
            
            console.log("Errores BORRAR usuarios(hook):",error);
            
          },
          onSettled: (response) => {
            
            console.log("RESPONSE BORRAR usuarios (out): ",response )
            
            console.log("Terminado el proceso de BORRAR usuario (en hooks)")
          }
        });    
    }
         
  return {
        userAuth,
        userStatus,
        userToken,
        DataUsers,
        CreateUser,
        ShowUser,
        EditLoadUser,
        EditUser,
        DeleteUser, 
        mutLogin,
        mutLogout,
        mutEditLoadUser,
        mutDataUsers,
        mutDeleteUser,
        mutDestroyUser
        
        /* Logout1, */
        
  }
    
}

export default useDataUser