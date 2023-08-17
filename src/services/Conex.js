
import React, { useEffect, useState, useContext, useRef  } from 'react'
import AuthContext from '../context/AuthContext';
import axios from "./axios";

export function Conex() {
  const { setAuth } = useContext(AuthContext);

  //---//
  /* const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [ email, setEmail ] = useState(null); 
  const [ status, setStatus] = useState(null);    
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();   */
  //---// 

  const handleSubmitx = async (e) => {
    e.preventDefault();
    const [email, password ] = [e.email, e.password];
    try {
      const response = await axios.post('/login', {email, password})
        /* const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }); */
      const accessToken = response?.data?.accessToken;
      console.log("TOKEN:",accessToken)
      /* const roles = response?.data?.roles; */
      setAuth({ email, pwd, accessToken });
      setEmail("");
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
}