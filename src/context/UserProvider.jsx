import { createContext, useState } from "react";
import { login } from "../services/Login"; 
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(false);
    const navigate = useNavigate();    

    const signIn = () => {
        setUser(true);
    };
    
    function Loggingg(data) { 
        console.log(data);   
        login(data)    
        .then((status)=>{
          status = sessionStorage.status;
          console.log(status);
          status  === 'success' ? navigate('/') : navigate('/login');
        })
        console.log('here 02 !!');   
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