import { createContext, useState} from 'react';
import axios from '../services/axios';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {
  /* const [auth, setAuth] = useState({}); */
  const navigate = useNavigate();

  //---//
  const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [ email, setEmail ]     = useState(null); 
  const [ status, setStatus ]   = useState(null);   
  const [ pwd, setPwd ]         = useState("");
  const [ auth, setAuth ]       = useState({});
  const [ success, setSuccess ] = useState(false);
  const [ errMsg, setErrMsg ]   = useState("");
  /* const errRef = useRef();  */
  //---//
  function login2(data) {
    console.log("data:",data);
  }

  const login = async (data) => {
    /* data.preventDefault(); */
    const [email, password ] = [data.email, data.password];
    try {
      const response = await axios.post('/login', {email, password})
  
      /* const user = responde.data.user; */
      const status = response?.data?.status;
      const accessToken = response?.data?.accessToken;
      /* const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true); */
      setStatus(status);
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('status', status);
      setAuth({ status, accessToken });      
      console.log("token:",accessToken);
      navigate('/');
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      /* errRef.current.focus(); */
      swal(err.response.data.message);
    }
  };

  function logout() {
    console.log("log out");
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

