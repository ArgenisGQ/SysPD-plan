import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import { localStorageManager } from '@chakra-ui/system';



const useDataCourse = (data) => {
    const navigate = useNavigate();    
      
    const queryClient = useQueryClient();
    const [out, setOut] = useState("base")


    const mutDataCourses  = useMutation(
      async (data)  => {  
        console.log('creacion de cursos -- 070324');
        try {
          await axios.get('/courses/',           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("dataCourses: ", response.data)
            localStorage.setItem("dataCourses",JSON.stringify(response?.data));        
            /* console.log("token antes2 - out:",localStorage.getItem(["userAuth"])) */
            /* queryClient.removeQueries(); */
            /* localStorage.clear(); */
            /* localStorage.removeItem(["userAuth"]); */
            /* console.log("token despues2 - out:",localStorage.getItem(["userAuth"]))  */          
          });
          console.log("terminado de cargar listado de Course");   
        } catch (e) {
          console.log("error - DATA: ",e.response.message);
        }       
      }    
    )

    const mutShowCourse  = useMutation(
      async (data)  => {  
        console.log('Datos de Course -- 070324');
        console.log('Datos de entrada SHOW: ', data)
        try {
          await axios.get('/courses/'+data,           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show Course: ", response)
            /* localStorage.setItem("dataUsers",JSON.stringify(response?.data)); */ 

            /* console.log("token antes2 - out:",localStorage.getItem(["userAuth"])) */
            /* queryClient.removeQueries(); */
            /* localStorage.clear(); */
            /* localStorage.removeItem(["userAuth"]); */
            /* console.log("token despues2 - out:",localStorage.getItem(["userAuth"]))  */          
          });
          console.log("terminado de cargar listado de Course");   
        } catch (e) {
          console.log("error - DATA: ",e.response.message);
        }       
      }    
    )

    const mutCreateCourse = useMutation(
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
            
            const response = await axios.post('/courses', 
            { name, code, section},
            {
              headers: {
                  /* 'Authorization': `Bearer ${sessionStorage.accessToken}` */
                  /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}` */
                  'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}`  
              }
            });
              console.log("data en create Course: ", response)
              localStorage.setItem("dataCreateCourse",JSON.stringify(response));
              console.log("dataCreateUser en origen: ",localStorage.getItem("dataCreateCourse"))
            /* const status = response?.data?.status; */
            /* const accessToken = response?.data?.accessToken; */
            /* setUserAuth(response?.data?.user); */
            /* navigate('/'); */
              console.log('datos de usuarios enviados..')
              return response;            
            } catch (err) {
              console.log("Error de envio o registro de usuario: ", err.message);
              /* return err.response.data.message; */
              /* console.log("Tipo de error: ", err ) */
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

    const mutEditLoadCourse = useMutation(
      async (data)  => {  
        console.log('Editor Conector: ',data);
        try {
          await axios.get('/courses/'+data,           
          {
              headers: { 
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })          
          /* return response */
          
          .then((response) => {
            console.log("Edit Data User full: ", response.data.users)            
            localStorage.setItem('courseForEdit',JSON.stringify(response.data.users))
            /* return response */
          });
          console.log("Terminado DATA DE USUARIO");
          /* return response */
        } catch (e) {
          console.log("error - DATA PARA EDITAR: ",e.response.message)
        }       
      } 
    )

    const mutEditCourse = useMutation(
      async (data)  => {  
        console.log('Editor Conector: ',data);
        const [idcourse, name, code, section] = [data.idcourse,
                                                 data.name,
                                                 data.code,
                                                 data.section];
        try {
          /* const name = firstname + ', ' + lastname; */

          await axios.put('/courses/'+idcourse,
          { name, code, section },           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show course edited: ", response)
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

    const mutDeleteCourse = useMutation(
      async (data)  => {  
        console.log('BORRAR USUARIO: ',data);
        try {
          await axios.delete('/courses/'+data,           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show Course BORRAR: ", response)
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
                await axios.get('/courses/',           
                  {
                      headers: {                
                        /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                        'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
                      }
                  })
                  .then((response) => {
                    console.log("dataCourses UPDATE/DELETE: ", response.data)
                    localStorage.setItem("dataCourses",JSON.stringify(response?.data)); 
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

    const mutDestroyCourse  = useMutation(
      async (data)  => {  
        console.log('Datos de usuario -- DESTROY');
        console.log('Datos de entrada DESTROY: ', data)
        try {
          await axios.get('/courses/'+data,           
          {
              headers: {                
                /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}`  */
                'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}` 
              }
          })
          .then((response) => {
            console.log("show Course DESTROY: ", response)
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
      

    function DataCourses(data){
        console.log("datos de usuario -- 070324");
        mutDataCourses.mutate(data,
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
    function CreateCourse(data) {
        console.log("creando cursos--en hooks--")
        mutCreateCourse.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia creacion de cursos(en hooks)");
            },
            onSuccess: (response) => {
              console.log("response PROCESANDO CREAR cursos(hooks):", response);
              console.log("datos del registro de cursos: ",response.data);
              console.log("mensaje del registro de cursos: ",response.message);
              navigate('/admin/courses/courseslist');// ruta de listado de  usuarios
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
    function ShowCourse(data) {
        console.log("Mostrando cursos--en hooks--")
        mutShowCourse.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia Muestra de cursos(en hooks)");
            },
            onSuccess: (response) => {
              console.log("response PROCESANDO MOSTRAR cursos(hooks):", response);
              console.log("datos del cursos: ",response.data);
              console.log("mensaje de LA MUESTRA DE cursos: ",response.message);
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
    function EditLoadCourse(data) {
      console.log("Precarga de datos para edicion-HOOKS")
      mutEditLoadCourse.mutate(data,
        {
          onMutate: () => {
            console.log("Ïnicia LOAD -HOOKS-)");
          },
          onSuccess: (response) => {
            /* console.log("ZZZZZ response LOAD EDIT USuARIO(hooks):", response); */
            /* localStorage.setItem("userForEdit",JSON.stringify(response.data.users)); */
            console.log('DATOS A EDITAR - HOOK: ', localStorage.getItem("courseForEdit"));
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
    function EditCourse(data) {
      console.log("Mostrando cursos--en hooks--")
      mutEditCourse.mutate(data,
        {
          onMutate: () => {
            console.log("Ïnicia Muestra de cursos(en hooks)");
          },
          onSuccess: (response) => {
            console.log("response PROCESANDO MOSTRAR cursos(hooks):", response);
            console.log("datos del cursos: ",response);
            console.log("mensaje de LA MUESTRA DE cursos: ",response);
            navigate('/admin/courses/courseslist'); //ruta de lista de usuarios
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
    function DeleteCourse(data) {
      console.log("Mostrando usuario BORRAR--en hooks--: ",data)
      mutDeleteCourse.mutate(data,
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
        DataCourses,
        CreateCourse,
        ShowCourse,
        EditLoadCourse,
        EditCourse,
        DeleteCourse, 
        mutEditLoadCourse,
        mutDataCourses,
        mutDeleteCourse,
        mutDestroyCourse
  }
    
}

export default useDataCourse