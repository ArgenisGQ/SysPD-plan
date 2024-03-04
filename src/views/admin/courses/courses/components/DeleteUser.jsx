/* import React from 'react' */
import useDataUser from '../../../../../hooks/useDataUser'; 
/* import { useParams } from 'react-router-dom'; */

const DeleteUser = (props) => {
    const { deleteActive } = props;
    const { mutDeleteUser } = useDataUser;
    /* const paramms = useParams(); */

    const LocalDeleteUser = (data) => {
        console.log("Mostrando usuario--DELETE USER-- :: ", data)
        mutDeleteUser.mutate(data,
          {
            onMutate: () => {
              console.log("Ïnicia BORRADO de usuario");
            },
            onSuccess: (response) => {
              console.log("response BORRAR USuARIO:", response);
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
              console.log("Errores BORRAR usuarios:",error);
              /* navigate('/login'); */
            },
            onSettled: (response) => {
              /* queryClient.setQueryData("status",response.status);
              const status = queryClient.getQueryData(["status"]); */
              console.log("RESPONSE BORRAR usuarios: ",response )
              /* localStorage.setItem("status",response?.status);
              const status = localStorage.getItem(["status"]);
              console.log ("status (en otro hooks): ", status); */
              console.log("Terminado el proceso de BORRAR usuario")
            }
          });    
    };

    if (deleteActive === true) {
      console.log("control borrar usuarios!!")
    }

    const deleteUserLocal = (id) => {
        console.log("borrar usuario....COMPONENTE:", id)
        LocalDeleteUser(id);
    }
    /* deleteUserLocal(ids) */
    
    /* LocalDeleteUser(ids) */
  return (
    <>
      
    </>
  )
}

export default DeleteUser