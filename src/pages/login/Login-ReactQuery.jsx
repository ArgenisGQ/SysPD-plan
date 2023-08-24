import React, { useEffect, useState, useContext, useRef  } from 'react'
import { Await, Link, useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
/* import { login, login03 } from '../../services/LoginOut'; */
import { Login, loginTwo, isAuthenticated, loginE, LoginEE } from '../../services/Login';
import {useForm} from "react-hook-form";
import swal from "sweetalert";
/* import UserContext from '../../context/UserContext'; */
import AuthContext from '../../context/AuthContext';
import { loginx } from '../../api/login';
import { useMutation, useQuery, useQueryClient } from 'react-query';



function LoginOn() {    
  const [ emailSend, setEmail ] = useState(null);  
  const [ passwordSend, setPassword ] = useState(null); 
  const [ user, setUser ] = useState( [] ); 
  const [ list, setList ] = useState([]); //
  /* const [ data, setData ] = useState([]);  */
  const [ statusNew, setStatusNew] = useState(null);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  //---//
  /* const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const { setAuth } = useContext(AuthContext);
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef(); */
  //---//
  
  const queryClient = useQueryClient();

  
  //---------------------------------------------------------------------------------------------
  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    /* defaultValues: {
        nombre: 'Luis',
        direccion: 'Calle Gran Vía'
    } */      
});  
  
  //---//
  const Conexion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
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
      errRef.current.focus();
    }
  };
  //---//
 

  function Logging(data) {
    console.log("DATA:",data);
    login(data);
    /* Login(data) 
    .then((status)=>{      
      status = sessionStorage.status;      
      console.log(status);
      status  === 'success' ? navigate('/') : navigate('/login');
    }) */
    /* useEffect (()=>{
      console.log('session efecto..');
    }, []); */
    console.log('here 02 !!:', );   
  }

     
  
  const conexx = async (data) => {    
    const [email, password ] = [data.email, data.password];
    try {
      const response = await axios.post('/login', {email, password});      
      const outfit = response?.data;
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
      console.log("token:::::",accessToken);
      console.log("outfit:",outfit)
      return outfit;
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
        /* errRef.current.focus(); */
        /* swal(err.response.data.message); */
        console.log("Error de conexx:", err);
      }
    
  }  

  /* const {
    mutate,    
    error, 
    isLoading, 
    mutateAsync,
    isSuccess,
    isError,    
    } = useMutation(muta,{
          onSuccess: () => {
            
            console.log("ON SUCCESS inicial");
          }
    }); */
  /* } = useMutation({ mutationFn: muta}); */

  /* const Login2 = async (datax) => {
    console.log("DATA:",datax);      
      try {
        console.log("--INICIO MUTAR--");
        const mutationx = await mutateAsync({ 
              email: datax.email,
              password: datax.password,
        });
        console.log("mutx:",mutationx);
        
      } catch (err) {
        console.log(err);
      }    
    console.log("error Query:",);
    console.log("isLoading Query:",);

    console.log('login2.....!!:',);   
  } */



  /* const Login3 = async (datax) => {
    console.log("DATA:",datax); 
    mutate({
      email: datax.email,
      password: datax.password,
    }, {
      onSuccess: (json) => {
       
        console.log("ON SUCCESS", json);        
      }
    });    
  }; */


  //---//---//
 
    const mutation = useMutation(
      async (data) => {    
        const [email, password ] = [data.email, data.password];
        try {
            const response = await axios.post('/login', {email, password})      
            /* const outfit = JSON.stringify(response?.data); */            
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
            /* errRef.current.focus(); */
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
  

  function Login4(data) {

    mutation.mutate(data,
      {
        onMutate: () => {
          console.log("Ïnicia la mutacion");
        },
        onSuccess: (response) => {
          console.log("response:", response);
          /* queryClient.setQueryData("userAuth",response.accessToken); */
          queryClient.setQueryData("userAuth",response.status);
          const token = queryClient.getQueryData(["userAuth"]);
          console.log ("token: ", token);
        },
        onError: (error) => {
          console.log(error);
        },
        onSettled: () => {
          console.log("Terminada la mutacion")
        }
      });

  }
  //---//---//




  function Loginx(data) {
    console.log("DATA:",data);  

    async (data) => {
    try {
      console.log("inicio mutar");
      const mutationx = await mutateAsync({ 
      email: data.email,
      password: data.password,
     });
    console.log("mutx:",mutationx);
    } catch (error) {
      console.log(error);
    }
    }
    
    console.log("error Query:",error);
    console.log("isLoading Query:",isLoading);

    console.log('login x !!:', );   
  }

  
  //---------------------------------------------------------------------------------------------
  return (
    <>    
    <link
      rel="stylesheet"
      href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css"
    />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          PLANIFICACION DIDACTICA (Version 02)
          {mutation.isLoading && <div>CONECTANDO...</div>}
          {mutation.isSuccess && <div>USUARIO CONECTADO...</div>}
          {mutation.isError && <div>SE A PRODUCIDO UN ERROR</div>}
        </div>
        {/* <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
            <i className="fab fa-facebook-f" />
          </span>
          <span>Login with Facebook</span>
        </button> */}
        {/* <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-xs text-gray-500 uppercase">
              Or Login With Email
            </span>
          </div>
        </div> */}
        <div className="mt-10">
          <form /* action="#"  */onSubmit={handleSubmit(Login4)}>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      required: true,
                      /* maxLength: 10 */
                  })}
                  /* value={email} */
                  /* onChange={(e) => setEmail(e.target.value)} */
                  /* name="email" */
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="E-Mail Address"
                />                
                {errors.email?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                </div>
                <input
                  id="password"
                  type="password"
                  {...register('password', {
                      required: true,
                      maxLength: 10
                  })}
                  /* value={password} */
                  /* onChange={(e) => setPassword(e.target.value)} */
                  /* name="password" */
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                />
                {errors.password?.type === 'required' && <p>El campo nombre es requerido</p>}
              </div>
            </div>
            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a
                  href="#"
                  className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                >
                  Forgot Your Password?
                </a>
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Login</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
          >
            <span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </span>
            <span className="ml-2">You dont have an account?</span>
          </a>
        </div>
      </div>
    </div>
    </>
  

  )
}

export default LoginOn