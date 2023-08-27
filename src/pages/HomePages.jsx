/* import {Button} from 'react'; */
import { useContext } from "react";
import { Link, useNavigate }  from "react-router-dom";
import {logout} from "../services/Login";
import AuthContext from "../context/AuthContext";
import {  useQueryClient } from 'react-query';
import useAuthUser from "../hooks/useAuthUser";


function HomePages() {
  /* const [Login5, userAuth, Logout1, Logout5]   = useAuthUser(); */
  const { userAuth, Fuera, Logout5 } = useAuthUser();   
    /* const navigate = useNavigate();  */  
  const queryClient = useQueryClient();
  const statusLogg = queryClient.getQueryData(["status"]);
  console.log("status luego del hook: ",statusLogg);
  const data = 'nada';

    const log = () => {
        /* defaultValues: {
        email: 'admin@uny.edu.ve',
        password: 'admin'
    } */
        console.log('log-----');
        /* console.log("user: ", queryClient.getQueryData(["user"])); */
        /* const data = {
            email: 'admin@uny.edu.ve',
            password: 'admin'
        } */
        console.log("data: ",data);
        /* Login1(); */
        /* Fuera(); */
        Logout5();
        
        console.log('fuera-----');
        /* Logout1(); */
    }

    

  /* const Auth   = useContext(AuthContext);
  console.log( "autorizacion:", Auth.auth.status);
  console.log("status en storage:",sessionStorage.status) */

  

  
  return (
    <>
        {/* component */}
        {/* <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"> */}
        <section className="bg-center bg-no-repeat bg-[url('/images/home-bg.jpg')]   bg-cover   bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                Sistema de Planificacion Didactica
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                Diseño Instruccional de la Universidad Yacambu -- proyecto en desarrollo (DEMTec) --
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                to= "/login"
                /* to= "/login04" */
                /* href="/login" */
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                Login
                <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </Link>
                {/* <Link to="/login01" >LOGIN</Link> */}
                
                <Link
                to= "/register"
                /* href="#" */
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                >
                Registro
                </Link>                
                {/* <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" 
                onClick={this.Logout}>
                    Click me!
                </button> */}
                {/* <button 
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" 
                onClick={Logout}>Default</button>; */}

               <button 
               className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" 
               type="button" onClick={log}>
                    Logout
                </button>
            </div>
            </div>
        </section>
    </>

  )
}

export default HomePages