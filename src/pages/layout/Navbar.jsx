import { useState } from 'react'

function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
        {/* <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" /> */}
        
        <div className="flex items-center justify-between">
        {/*<div className="flex flex-wrap place-items-center h-screen">
            <section className="relative mx-auto"> */}
            {/* navbar */}
            <nav className="flex justify-between bg-gray-900 text-white w-screen">
                <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="/">
                        {/* <img class="h-9" src="/images/uny-svg.svg" alt="logo"> */}
                        <img className="h-9" src="/images/uny_vector_sm.png" alt="logo" />
                        {/* UNY */}
                    </a>
                    {/* Nav Links */}
                    <ul className="hidden xl:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li>
                        <a className="hover:text-gray-200" href="/">
                            Inicio
                        </a>
                        </li>
                        <li>
                        <a className="hover:text-gray-200" href="/register">
                            Registro
                        </a>
                        </li>
                        <li>
                        <a className="hover:text-gray-200" href="/">
                            Formato
                        </a>
                        </li>
                        {/* <li>
                        <a className="hover:text-gray-200" href="#">
                            Contacto
                        </a>
                        </li> */}
                    </ul>
                    {/* Header Icons */}
                    <div className="hidden xl:flex items-center space-x-5">
                        {/* Corazon de likes */}
                        {/* <a className="hover:text-gray-200" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </a> */}
                        {/* Carrito de compra    */}
                        {/* <a className="flex items-center hover:text-gray-200" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="flex absolute -mt-5 ml-4">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                            </span>
                        </a> */}
                        {/* Sign In / Register      */}
                        <a className="flex items-center hover:text-gray-200" href="/login">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 hover:text-gray-200"                    
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Responsive navbar */}
                {/* icono - carrito*/}
            {/*  <a className="xl:hidden flex mr-6 items-center" href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                    </span>
                </a> */}

                {/* icono - burguer */}
                <div className='navbar-burger self-center mr-12 xl:hidden'>
                    {/* <div className="navbar-burger self-center mr-12 xl:hidden"> */}
                    <div className="" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 hover:text-gray-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>                   
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                        >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        </div>

                        
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                            {/* <a href="/about">About</a> */}
                                <a className="hover:text-gray-800 text-gray-500" href="/">
                                    Inicio
                                </a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a className="hover:text-gray-800 text-gray-500" href="/register">
                                    Registro
                                </a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a className="hover:text-gray-800 text-gray-500" href="/">
                                    Formato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                


                {/* <section className="MOBILE-MENU flex xl:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                        >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/about">About</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                </section> */}



            </nav>
        {/*     </section>
        </div> */}

        <style>{`
            .hideMenuNav {
                display: none;
            }
            .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: white;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
        `}</style>

        </div>
        {/* Does this resource worth a follow? */}
        {/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
            <a
                title="Follow me on twitter"
                href="https://www.twitter.com/asad_codes"
                target="_blank"
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
                <img
                className="object-cover object-center w-full h-full rounded-full"
                src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
                />
            </a>
            </div>
        </div> */}
    </>

    )
}

export default Navbar