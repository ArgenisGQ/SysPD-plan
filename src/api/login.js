import axios from "../services/axios";

export const loginx = async (data) => {    
    const [email, password ] = [data.email, data.password];
    try {
      const response = await axios.post('/login', {email, password})
      
      const status = response?.data?.status;
      const accessToken = response?.data?.accessToken;
      /* const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true); */

      //setStatus(status);
      //sessionStorage.setItem('accessToken', accessToken);
      //sessionStorage.setItem('status', status);
      //setAuth({ status, accessToken });
      console.log("status:",status);      
      console.log("token:",accessToken);
      //navigate('/');
      return response;
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
      //swal(err.response.data.message);
      console.log(err);
      return err;
    }
    /* return response; */ //no aplicar aqui
  };