import { createContext, useState } from "react";
import { login } from "../services/Login"; 
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider = (props) => {
    /* const [user, setUser] = useState(false); */
    const [user, setUser] = useState(false);
    const navigate = useNavigate();    

    const signIn = (data) => {
        Loggingg(data)
        setUser(true);
        console.log(data);
    };

    
    
    function Loggingg(data) { 
        console.log(data);   
        const datos = login(data)    
        .then((status)=>{
          status = sessionStorage.status;
          /* console.log(status); */
          status  === 'success' ? navigate('/') : navigate('/login');
        })
        .then((userr)=>{
            userr = JSON.parse( sessionStorage.user );
            setUser.userr = userr;
            /* console.log(userr); */
        })
        /* .then((userr)=>{
            userr = JSON.parse( sessionStorage.user );
            console.log(userr);
        }) */
        console.log('login.....');
        console.log(user.userr);
        console.log(datos);      
        
      }

    const signOut = () => {
        setUser(false);
    };

    return (
        <UserContext.Provider value={{ user, signIn, signOut, Loggingg }}>
            {props.children}
        </UserContext.Provider>
    );

};

export default UserProvider;