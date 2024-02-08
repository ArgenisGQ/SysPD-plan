import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';

function Register() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors]  = useState([]);

    const handleRegister = async (event) => {
        event.preventDefault();
        
        try {
            await axios.post('/register', { username, name, email, password, /* password_confirmation */});
            setUsername('');
            setName('');
            setEmail('');
            setPassword('');
            /* setPasswordConfirmation(''); */
            navigate('/'); 
            console.log('registrado..');           
        } catch (e) {
            console.log('NO registrado..');
            console.log(e);
        }
    }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300'>
        <form className="w-full max-w-lg" onSubmit={handleRegister}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-username"
                >
                    Usuario
                </label>
                {/* border-red-500  */}
                <input
                    className="appearance-none block w-full 
                    bg-gray-200 text-gray-700 border 
                   
                     rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}                    
                    type="text"
                    placeholder=""
                />
                <p className="text-red-500 text-xs italic">....</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-name"
                >
                    Nombre
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}  
                    type="text"
                    placeholder=""
                />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                >
                    Email
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  
                    type="email"
                    placeholder=""
                />
                <p className="text-gray-600 text-xs italic">
                    Correo electronico Valido
                </p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Password
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password"
                    placeholder="******************"
                />
                <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as youd like
                </p>
                </div>
            </div>

            {/* <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-passwordconfirm"
                    >
                        Password confirmar
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-passwordconfirm"
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)} 
                        type="password"
                        placeholder="******************"
                    />
                
                </div>
            </div> */}

           {/*  <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                >
                    City
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Albuquerque"
                />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                >
                    State
                </label>
                <div className="relative">
                    <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                    </div>
                </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                >
                    Zip
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder={90210}
                />
                </div>
            </div> */}

            <div className="flex w-full">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Registrar</span>
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
    

  )
}

export default Register