import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import { localStorageManager } from '@chakra-ui/system';



const useDataPlanning = (data) => {
    const navigate = useNavigate();    
      
    const queryClient = useQueryClient();
    const [out, setOut] = useState("base")


    const mutDataPlannings  = useMutation(
      async (data)  => {  
        console.log('creacion de plan -- 110324');
        try {
          await axios.get('/plannings/',           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("dataPlannings: ", response.data)
            localStorage.setItem("dataPlannings",JSON.stringify(response?.data));        
            /* console.log("token antes2 - out:",localStorage.getItem(["userAuth"])) */
            /* queryClient.removeQueries(); */
            /* localStorage.clear(); */
            /* localStorage.removeItem(["userAuth"]); */
            /* console.log("token despues2 - out:",localStorage.getItem(["userAuth"]))  */          
          });
          console.log("terminado de cargar listado de Planning");   
        } catch (e) {
          console.log("error - DATA: ",e.response.message);
        }       
      }    
    )

    const mutShowPlanning  = useMutation(
      async (data)  => {  
        console.log('Datos de Planning -- 110324');
        console.log('Datos de entrada SHOW: ', data)
        try {
          await axios.get('/plannings/'+data,           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show Planning: ", response)
            /* localStorage.setItem("dataUsers",JSON.stringify(response?.data)); */ 

            /* console.log("token antes2 - out:",localStorage.getItem(["userAuth"])) */
            /* queryClient.removeQueries(); */
            /* localStorage.clear(); */
            /* localStorage.removeItem(["userAuth"]); */
            /* console.log("token despues2 - out:",localStorage.getItem(["userAuth"]))  */          
          });
          console.log("terminado de cargar listado de Planning");   
        } catch (e) {
          console.log("error - DATA: ",e.response.message);
        }       
      }    
    )

    const mutCreatePlanning = useMutation(
      async (data) => { 
        console.log("datos para enviar (HOOOKS): ", data)   
        const [name, code, section] = [data.name,
                                       data.code,
                                       data.section];
        try {
            /* const response = await axios.post('/login', {email, password}) */
           /*  const name = firstname + ', ' + lastname; */
            /* console.log("nombre concatenado: ", name) */
            /* await axios.post('/register', 
            { username, email, name, password }); */ 

           /*  console.log("IDCARD (HOOKS)", idcard)
            console.log("ACTIVED (HOOKS)", actived) */
            
            const response = await axios.post('/plannings', 
            { name, code, section},
            {
              headers: {
                  /* 'Authorization': `Bearer ${sessionStorage.accessToken}` */
                  /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}` */
                  'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}`  
              }
            });
              console.log("data en create Planning: ", response)
              localStorage.setItem("dataCreatePlanning",JSON.stringify(response));
              console.log("dataCreatePlanning en origen: ",localStorage.getItem("dataCreatePlanning"))
            /* const status = response?.data?.status; */
            /* const accessToken = response?.data?.accessToken; */
            /* setUserAuth(response?.data?.user); */
            /* navigate('/'); */
              console.log('datos de usuarios enviados..')
              return response;            
            } catch (err) {
              console.log("Error de envio o registro de planning: ", err.message);
              /* return err.response.data.message; */
              /* console.log("Tipo de error: ", err ) */
              return err.response;
            }
        /* return outfit.json(); */
      }
    )

    const mutEditLoadPlanning = useMutation(
      async (data)  => {  
        console.log('Editor Conector: ',data);
        try {
          await axios.get('/plannings/'+data,           
          {
              headers: { 
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })          
          /* return response */
          
          .then((response) => {
            console.log("Edit Data Planning full: ", response.data.users)            
            localStorage.setItem('courseForPlanning',JSON.stringify(response.data.users))
            /* return response */
          });
          console.log("Terminado DATA DE PLAN");
          /* return response */
        } catch (e) {
          console.log("error - DATA PARA EDITAR: ",e.response.message)
        }       
      } 
    )

    const mutEditPlanning = useMutation(
      async (data)  => {  
        console.log('Editor Conector: ',data);
        const [idcourse, name, code, section] = [data.idcourse,
                                                 data.name,
                                                 data.code,
                                                 data.section];
        try {
          /* const name = firstname + ', ' + lastname; */

          await axios.put('/plannings/'+idcourse,
          { name, code, section },           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show planning edited: ", response)
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

    const mutDeletePlanning = useMutation(
      async (data)  => {  
        console.log('BORRAR USUARIO: ',data);
        try {
          await axios.delete('/plannings/'+data,           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show Planning BORRAR: ", response)
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
                await axios.get('/plannings/',           
                  {
                      headers: {                
                        /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                        'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
                      }
                  })
                  .then((response) => {
                    console.log("dataPlannings UPDATE/DELETE: ", response.data)
                    localStorage.setItem("dataPlannings",JSON.stringify(response?.data)); 
                  });
                  console.log("terminado de cargar listado de planes");   
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

    const mutDestroyPlanning  = useMutation(
      async (data)  => {  
        console.log('Datos de usuario -- DESTROY');
        console.log('Datos de entrada DESTROY: ', data)
        try {
          await axios.get('/plannings/'+data,           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show Planning DESTROY: ", response)
            /* localStorage.setItem("dataUsers",JSON.stringify(response?.data)); */ 

            /* console.log("token antes2 - out:",localStorage.getItem(["userAuth"])) */
            /* queryClient.removeQueries(); */
            /* localStorage.clear(); */
            /* localStorage.removeItem(["userAuth"]); */
            /* console.log("token despues2 - out:",localStorage.getItem(["userAuth"]))  */          
          });
          console.log("terminado de cargar listado de planes");   
        } catch (e) {
          console.log("error - DATA: ",e.response.message);
        }       
      }    
    )
      
//--------------------------------------------------------------------------------------------//


    function DataPlannings(data){
        console.log("datos de plan -- 110324");
        mutDataPlannings.mutate(data,
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
    function CreatePlanning(data) {
        console.log("creando planes--en hooks--")
        mutCreatePlanning.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia creacion de cursos(en hooks)");
            },
            onSuccess: (response) => {
              console.log("response PROCESANDO CREAR cursos(hooks):", response);
              console.log("datos del registro de cursos: ",response.data);
              console.log("mensaje del registro de cursos: ",response.message);
              navigate('/admin/plannings/planningslist');// ruta de listado de  usuarios
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
    function ShowPlanning(data) {
        console.log("Mostrando planes--en hooks--")
        mutShowPlanning.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia Muestra de planes(en hooks)");
            },
            onSuccess: (response) => {
              console.log("response PROCESANDO MOSTRAR planes(hooks):", response);
              console.log("datos del planes: ",response.data);
              console.log("mensaje de LA MUESTRA DE PLANES: ",response.message);
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
              console.log("Errores MOSTRANDO PLANES (hook):",error);
              /* navigate('/login'); */
            },
            onSettled: (response) => {
              /* queryClient.setQueryData("status",response.status);
              const status = queryClient.getQueryData(["status"]); */
              console.log("RESPONSE MOSTRANDO PLANEs (out): ",response )
              /* localStorage.setItem("status",response?.status);
              const status = localStorage.getItem(["status"]);
              console.log ("status (en otro hooks): ", status); */
              console.log("Terminado el proceso de MOSTRAR PLAN (en hooks)")
            }
          });    
    }
    function EditLoadPlanning(data) {
      console.log("Precarga de datos para edicion-HOOKS")
      mutEditLoadPlanning.mutate(data,
        {
          onMutate: () => {
            console.log("Ïnicia LOAD -HOOKS-)");
          },
          onSuccess: (response) => {
            /* console.log("ZZZZZ response LOAD EDIT USuARIO(hooks):", response); */
            /* localStorage.setItem("userForEdit",JSON.stringify(response.data.users)); */
            console.log('DATOS A EDITAR - HOOK: ', localStorage.getItem("planningForEdit"));
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
    function EditPlanning(data) {
      console.log("Mostrando cursos--en hooks--")
      mutEditPlanning.mutate(data,
        {
          onMutate: () => {
            console.log("Ïnicia Muestra de PLANES(en hooks)");
          },
          onSuccess: (response) => {
            console.log("response PROCESANDO MOSTRAR PLANES(hooks):", response);
            console.log("datos del PLANES: ",response);
            console.log("mensaje de LA MUESTRA DE PLANES: ",response);
            navigate('/admin/plannings/planningslist'); //ruta de lista de usuarios
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
            console.log("Errores MOSTRANDO PLANES(hook):",error);
            /* navigate('/login'); */
          },
          onSettled: (response) => {
            /* queryClient.setQueryData("status",response.status);
            const status = queryClient.getQueryData(["status"]); */
            console.log("RESPONSE MOSTRANDO PLANES (out): ",response )
            /* localStorage.setItem("status",response?.status);
            const status = localStorage.getItem(["status"]);
            console.log ("status (en otro hooks): ", status); */
            console.log("Terminado el proceso de MOSTRAR PLANES(en hooks)")
          }
        });    
    }
    function DeletePlanning(data) {
      console.log("Mostrando usuario BORRAR--en hooks--: ",data)
      mutDeletePlanning.mutate(data,
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
        DataPlannings,
        CreatePlanning,
        ShowPlanning,
        EditLoadPlanning,
        EditPlanning,
        DeletePlanning, 
        mutEditLoadPlanning,
        mutDataPlannings,
        mutDeletePlanning,
        mutDestroyPlanning
  }
    
}

export default useDataPlanning