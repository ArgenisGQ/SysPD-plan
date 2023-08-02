/* import {Button} from 'react'; */
import { Link, useNavigate }  from "react-router-dom";
import axios from '../config/axios';

function HomePages() {

    const navigate = useNavigate();
    const Logout01 = () => {
       
      };

    const Logout = async (data)  => {
        console.log('borrando cache');          
        /* data.preventDefault(); */
        try {
          await axios.get('/logout',           
          {
              headers: {
                'Authorization': `Bearer ${sessionStorage.accessToken}` 
              }
          })
          .then((response) => {
            /* if (response.data.username) {
              localStorage.setItem("user", JSON.stringify(response.data));
            } */
            console.log(response.data);
            console.log(response.data.message);
            /* console.log(response.data.message);  */
            /* console.log(response.data.accessToken); */
    
            /* if(response.data.status==="success"){
              console.log(response.data);              
              sessionStorage.setItem('accessToken', response.data.accessToken);
              console.log(sessionStorage.accessToken);
              return response.data;
            } else {
              console.log("error")
            } */

            /* return response.data;  */          
          });          
          navigate('/');
          console.log("cache borrada...");
          /* console.log(response.data.message); */      
        } catch (e) {
          console.log(e.response.message);         
          /* swal(e.response.data.message); */
        }       
      };

  return (
    <>
        {/* component */}
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                Sistema de Planificacion Didactica
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                Los usuarios docentes de la Universidad Yacambu, proyecto en desarrollo (DEMTec)
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                to= "/login04"
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
               type="button" onClick={Logout}>
                    Click Me
                </button>
            </div>
            </div>
        </section>
    </>

  )
}

export default HomePages