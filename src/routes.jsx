import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlinePersonalInjury,
} from "react-icons/md";

// Admin Imports
import MainDashboardUsers from "./views/admin/dashboard";
import Users from "./views/admin/users";
import MyProfile from "./views/admin/myprofile";
import MainDashboard from "./views/reference/default";
import NFTMarketplace from "./views/reference/marketplace";
import Profile from "./views/reference/profile";
import DataTables from "./views/reference/dataTables";
import RTL from "./views/reference/rtl";

// Auth Imports
import SignInCentered from "./views/auth/signIn";


const routes = [
  {
    name: "Panel Principal",
    layout: "/admin",
    path: "/dashboard",
    /* category: "Category",
    items: "ITEMS",  */   
    /* category: "uno", */
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: "MainDashboardUsers",
  },
  { 
    submenu: "submenu",
    name: "Usuarios",    
    layout: "/admin",
    category: "category",
    /* items: "ITEMS",  */
    /* category: "uno", */
    /* path: "/profile", */
    
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    items:[               
              {
                name: "Usuarios",
                layout: "/admin",
                path: "/users",
                icon: <Icon as={MdOutlinePersonalInjury} width='20px' height='20px' color='inherit' />,
                component: "Users",
                /* category: "Category",
                items: "ITEMS",  */
              },
              {
                name: "Gestion de Usuarios",
                layout: "/admin",
                path: "/userform",
                icon: <Icon as={MdOutlinePersonalInjury} width='20px' height='20px' color='inherit' />,
                component: "Userform",
              },
              {
                name: "Create/Edit de Usuarios",
                layout: "/admin",
                path: "/usercreate",
                icon: <Icon as={MdOutlinePersonalInjury} width='20px' height='20px' color='inherit' />,
                component: "Userform",
              },
              {
                name: "Perfil de Usuario",
                layout: "/admin",
                path: "/userprofile",
                icon: <Icon as={MdOutlinePersonalInjury} width='20px' height='20px' color='inherit' />,
                component: "Userform",
              },             
            ]
  },
  /* {
    name: "Usuarios",
    layout: "/admin",
    path: "/users",
    icon: <Icon as={MdOutlinePersonalInjury} width='20px' height='20px' color='inherit' />,
    component: "Users",
  }, */
  /* {
    name: "Gestion de Usuarios",
    layout: "/admin",
    path: "/userform",
    icon: <Icon as={MdOutlinePersonalInjury} width='20px' height='20px' color='inherit' />,
    component: "Userform",
  }, */
  /* {
    name: "Create/Edit de Usuarios",
    layout: "/admin",
    path: "/usercreate",
    icon: <Icon as={MdOutlinePersonalInjury} width='20px' height='20px' color='inherit' />,
    component: "Userform",
  }, */
  { 
    submenu: "submenu",
    name: "Sistema",    
    layout: "/reference",
    category: "Category",
    /* path: "/profile", */
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    items:[                           
              {
                name: "Carga masiva de datos",
                layout: "/admin",
                path: "/uploads",
                icon: <Icon as={MdOutlinePersonalInjury} width='20px' height='20px' color='inherit' />,
                component: "Uploads",
              },
              {
                name: "Roles del sistema",
                layout: "/admin",
                path: "/role",
                icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
                component: "Role",
              },
              {
                name: "Periodos",
                layout: "/admin",
                path: "/periods",
                icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
                component: "Periods",
              },            
            ]
  }, 
  
  {
    name: "Planificacion Didactica",
    layout: "/admin",
    path: "/planning",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: "Planning",
  },  
  /* {
    name: "NFT Marketplace",
    layout: "/reference",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: "NFTMarketplace",
    secondary: true,
  }, */
  /* {
    name: "Data Tables",
    layout: "/reference",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: "DataTables",
  }, */
  {
    name: "Mi perfil",
    layout: "/admin",
    path: "/myprofile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,    
    component: "MyProfile",
    /* items: "ITEMS", */
  },

  { 
    submenu: "submenu",
    name: "Ejemplo Formatos",    
    layout: "/reference",
    category: "/category",
    /* path: "/profile", */
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    items:[ 
              {
                name: "Formulario next",
                layout: "/admin",
                path: "/nextform",
                icon: <Icon as={MdOutlinePersonalInjury} width='20px' height='20px' color='inherit' />,
                component: "Nextform",
              },             
            ]
  },

  { 
    submenu: "submenu",
    name: "Ejemplo Referencias",    
    layout: "/reference",
    category: "Category",
    /* path: "/profile", */
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    items:[ /* {
                name: "Perfil 1",
                layout: "/reference",
                path: "/data-tables",
                icon1: <Icon as={MdPerson} width='10px' height='10px' color='inherit' />,
                icon2: <Icon viewBox="0 0 200 200" boxSize={3}  color="inherit">
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>,
                component: "Profile",
                category: "Category",
                items: "ITEMS",
              }, */
              /* {
                name: "Perfil 2",
                layout: "/reference",
                path: "/nft-marketplace",
                icon1: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
                icon2: <Icon viewBox="0 0 200 200" boxSize={3}  color="inherit">
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>,
                component: "Profile",
                category: "Category",
                items: "ITEMS",
              }, */
              /* {
                name: "Perfil 3",
                layout: "/reference",
                path: "/default",
                icon1: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
                icon2: <Icon viewBox="0 0 200 200" boxSize={3}  color="inherit">
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>,
                component: "D",
                category: "Category",
                items: "ITEMS",
              }, */
              {
                name: "Panel Principal",
                layout: "/reference",
                path: "/default",
                icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
                icon2: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
                component: "MainDashboard",
              },
              {
                name: "NFT Marketplace",
                layout: "/reference",
                path: "/nft-marketplace",
                icon: (
                  <Icon
                    as={MdOutlineShoppingCart}
                    width='20px'
                    height='20px'
                    color='inherit'
                  />
                ),
                icon2: (
                  <Icon
                    as={MdOutlineShoppingCart}
                    width='20px'
                    height='20px'
                    color='inherit'
                  />
                ),
                component: "NFTMarketplace",
                /* secondary: true, */
              },
              {
                name: "Data Tables",
                layout: "/reference",
                icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
                icon2: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
                path: "/data-tables",
                component: "DataTables",
              },
              {
                name: "Profile",
                layout: "/reference",
                path: "/profile",
                icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
                icon2: <Icon viewBox="0 0 200 200" color="inherit">
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>,
                component: "Profile",
                /* category: "Category", */
                /* items: "ITEMS", */
              },
            ]
  },
  { 
    submenu: "submenu2",
    name: "Ejemplo SubMenu",    
    layout: "/reference",
    category: "Category",
    /* path: "/profile", */
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    items:[ {
                name: "Perfil 3",
                layout: "/reference",
                path: "/data-tables",
                icon1: <Icon as={MdPerson} width='10px' height='10px' color='inherit' />,
                icon2: <Icon viewBox="0 0 200 200" boxSize={3}  color="inherit">
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>,
                component: "Profile",
                /* category: "Category", */
                /* items: "ITEMS", */
              },
              {
                name: "Perfil 4",
                layout: "/reference",
                path: "/nft-marketplace",
                icon1: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
                icon2: <Icon viewBox="0 0 200 200" boxSize={3}  color="inherit">
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>,
                component: "Profile",
                /* category: "Category", */
                /* items: "ITEMS", */
              },
              {
                subsub: "SUB",
                name: "Perfil 5",
                layout: "/reference",
                category: "category",
                path: "/nft-marketplace",
                icon1: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
                icon2: <Icon viewBox="0 0 200 200" boxSize={3}  color="inherit">
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>,
                items: [ {
                            name: "Perfil 6",
                            layout: "/reference",
                            path: "/data-tables",
                            icon1: <Icon as={MdPerson} width='10px' height='10px' color='inherit' />,
                            icon3: <Icon viewBox="0 0 200 200" boxSize={3}  color="inherit">
                                    <path
                                      fill="currentColor"
                                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                    />
                                  </Icon>,
                            component: "Profile",
                            category: "Category",
                            items: "ITEMS",
                          },
                          {
                            name: "Perfil 7",
                            layout: "/reference",
                            path: "/nft-marketplace",
                            icon1: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
                            icon3: <Icon viewBox="0 0 200 200" boxSize={3}  color="inherit">
                                    <path
                                      fill="currentColor"
                                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                    />
                                  </Icon>,
                            component: "Profile",
                            category: "Category",
                            items: "ITEMS",
                          },                          
                        ],
                component: "Profile",
                /* category: "Category", */
                /* items: "ITEMS",  */
              }
            ]
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: "SignInCentered",
  },
  /* {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: "RTL",
  }, */
];

export default routes;
