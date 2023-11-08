/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// chakra imports
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,  
  Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { FaTruckMonster } from "react-icons/fa";

export function SidebarLinks(props) {
  //   Chakra color mode
  let location = useLocation();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  //create link sub menu
  const subLinks = (route) => {
          <NavLink>TEST</NavLink>
          route.map((route, index) => {
              console.log("subitem: ", index);
              console.log("route: ", route.name);   
                      
              {/* <>              
                <NavLink key={index} to={route.layout + route.path}>                
                {console.log("dentro: ", route.name)}
                  {route.icon ? (
                    <Box>
                      <HStack
                        spacing={
                          activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                        }
                        py='5px'
                        ps='10px'>
                        <Flex w='100%' alignItems='center' justifyContent='center'>
                          <Box
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeIcon
                                : textColor
                            }
                            me='18px'>
                            {route.icon}
                          </Box>
                          <Text
                            me='auto'
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeColor
                                : textColor
                            }
                            fontWeight={
                              activeRoute(route.path.toLowerCase())
                                ? "bold"
                                : "normal"
                            }>
                              uno
                            {route.name}
                            {console.log("SI... ",route.name)}
                          </Text>
                        </Flex>
                        <Box
                          h='36px'
                          w='4px'
                          bg={
                            activeRoute(route.path.toLowerCase())
                              ? brandColor
                              : "transparent"
                          }
                          borderRadius='5px'
                        />
                      </HStack>
                      
                    </Box>
                  ) : (
                    <Box>
                      <HStack
                        spacing={
                          activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                        }
                        py='5px'
                        ps='10px'>
                        <Text
                          me='auto'
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeColor
                              : inactiveColor
                          }
                          fontWeight={
                            activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                          }>
                          {route.name}
                        </Text>
                        <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                      </HStack>
                      {console.log("no...")}
                    </Box>
                  )}
                </NavLink>
              </> */}
            })
  }


  const createSubMenu = (route, index) => {

    return (
      <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
        <AccordionItem border='none'>
          <AccordionButton  
            p={0}
            >                                  
            <Box key={index}>
              {route.icon ? (
                <Box>
                  <HStack
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? "22px" : "26px"                            
                    }
                    py='5px'
                    ps='10px'>
                    <Flex w='100%' alignItems='center' justifyContent='center'>
                      <Box
                        color={
                          activeRoute(route.path.toLowerCase())                                
                            ? activeIcon
                            : textColor
                        }
                        me='18px'>
                        {route.icon}
                      </Box>
                      <Text
                        me='auto'
                        color={
                          activeRoute(route.path.toLowerCase())                                
                            ? activeColor
                            : textColor
                        }
                        fontWeight={
                          activeRoute(route.path.toLowerCase())                               
                            ? "bold"
                            : "normal"
                        }>
                        {route.submenu}
                      </Text>
                    </Flex>
                    {/* <Box
                      h='36px'
                      w='4px'
                      bg={
                        activeRoute(route.path.toLowerCase())
                          ? brandColor
                          : "transparent"
                      }
                      borderRadius='5px'
                    /> */}
                  </HStack>
                </Box>
              ) : (
                <Box>                  
                  <HStack
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                    }
                    py='5px'
                    ps='10px'>
                    <Text
                      me='auto'
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : inactiveColor
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                      }>
                      {route.submenu}
                    </Text>
                    <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                  </HStack>
                </Box>
              )}
            </Box>          
            <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
          </AccordionButton>
          
          <AccordionPanel pb={4}>
            {/* <Text color="gray.600">
              Chakra UI is a simple and modular component library that gives developers
              the building blocks they need to create web applications.
            </Text>
            <NavLink  to={route.layout + route.path}>test</NavLink> */}
            <Box>
              {/* {route.subitem.map((route, index) => {
              console.log("subitem: ", index);
              
              <>              
                <NavLink key={index} to={route.layout + route.path}>                
                {console.log("dentro: ", route.name)}
                  {route.icon ? (
                    <Box>
                      <HStack
                        spacing={
                          activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                        }
                        py='5px'
                        ps='10px'>
                        <Flex w='100%' alignItems='center' justifyContent='center'>
                          <Box
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeIcon
                                : textColor
                            }
                            me='18px'>
                            {route.icon}
                          </Box>
                          <Text
                            me='auto'
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeColor
                                : textColor
                            }
                            fontWeight={
                              activeRoute(route.path.toLowerCase())
                                ? "bold"
                                : "normal"
                            }>
                              uno
                            {route.name}
                            {console.log("SI... ",route.name)}
                          </Text>
                        </Flex>
                        <Box
                          h='36px'
                          w='4px'
                          bg={
                            activeRoute(route.path.toLowerCase())
                              ? brandColor
                              : "transparent"
                          }
                          borderRadius='5px'
                        />
                      </HStack>
                      
                    </Box>
                  ) : (
                    <Box>
                      <HStack
                        spacing={
                          activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                        }
                        py='5px'
                        ps='10px'>
                        <Text
                          me='auto'
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeColor
                              : inactiveColor
                          }
                          fontWeight={
                            activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                          }>
                          {route.name}
                        </Text>
                        <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                      </HStack>
                      {console.log("no...")}
                    </Box>
                  )}
                </NavLink>
              </>
            })} */}
              {console.log("datos: ", route.subitem)}

              <NavLink  to={route.layout + route.path}>test</NavLink>

              {subLinks(route.subitem)}


              {/* { route.subitem.map((route, index) => {

                subLinks(route, index);

                <Box>

                  <NavLink  to={route.layout + route.path}>test</NavLink>

                </Box>
                
              })                
                } */}

                

            </Box>
            
            
            
            
          </AccordionPanel>
        </AccordionItem>  
      </Accordion>

    )
  }

  const createSubLinks = (route, index) => {

    return (
            <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
              <AccordionItem border='none'>
                <AccordionButton  
                  p={0}
                  >                                  
                  <Box key={index}>
                    {route.icon ? (
                      <Box>
                        <HStack
                          spacing={
                            activeRoute(route.path.toLowerCase()) ? "22px" : "26px"                            
                          }
                          py='5px'
                          ps='10px'>
                          <Flex w='100%' alignItems='center' justifyContent='center'>
                            <Box
                              color={
                                activeRoute(route.path.toLowerCase())                                
                                  ? activeIcon
                                  : textColor
                              }
                              me='18px'>
                              {route.icon}
                            </Box>
                            <Text
                              me='auto'
                              color={
                                activeRoute(route.path.toLowerCase())                                
                                  ? activeColor
                                  : textColor
                              }
                              fontWeight={
                                activeRoute(route.path.toLowerCase())                               
                                  ? "bold"
                                  : "normal"
                              }>
                              {route.category}
                            </Text>
                          </Flex>
                          {/* <Box
                            h='36px'
                            w='4px'
                            bg={
                              activeRoute(route.path.toLowerCase())
                                ? brandColor
                                : "transparent"
                            }
                            borderRadius='5px'
                          /> */}
                        </HStack>
                      </Box>
                    ) : (
                      <Box>
                        <HStack
                          spacing={
                            activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                          }
                          py='5px'
                          ps='10px'>
                          <Text
                            me='auto'
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeColor
                                : inactiveColor
                            }
                            fontWeight={
                              activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                            }>
                            {route.name}
                          </Text>
                          <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                        </HStack>
                      </Box>
                    )}
                  </Box>          
                  <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
                </AccordionButton>
                
                <AccordionPanel pb={4}>
                  {/* <Text color="gray.600">
                    Chakra UI is a simple and modular component library that gives developers
                    the building blocks they need to create web applications.
                  </Text> */}
                  
                  <NavLink key={index} to={route.layout + route.path}>
                    {route.icon ? (
                      <Box>
                        <HStack
                          spacing={
                            activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                          }
                          py='5px'
                          ps='10px'>
                          <Flex w='100%' alignItems='center' justifyContent='center'>
                            <Box
                              color={
                                activeRoute(route.path.toLowerCase())
                                  ? activeIcon
                                  : textColor
                              }
                              me='18px'>
                              {route.icon2}
                            </Box>
                            <Text
                              me='auto'
                              color={
                                activeRoute(route.path.toLowerCase())
                                  ? activeColor
                                  : textColor
                              }
                              fontWeight={
                                activeRoute(route.path.toLowerCase())
                                  ? "bold"
                                  : "normal"
                              }>
                              {route.name}
                            </Text>
                          </Flex>
                          <Box
                            h='36px'
                            w='4px'
                            bg={
                              activeRoute(route.path.toLowerCase())
                                ? brandColor
                                : "transparent"
                            }
                            borderRadius='5px'
                          />
                        </HStack>
                      </Box>
                    ) : (
                      <Box>
                        <HStack
                          spacing={
                            activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                          }
                          py='5px'
                          ps='10px'>
                          <Text
                            me='auto'
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeColor
                                : inactiveColor
                            }
                            fontWeight={
                              activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                            }>
                            {route.name}
                          </Text>
                          <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                        </HStack>
                      </Box>
                    )}
                  </NavLink>
                </AccordionPanel>
              </AccordionItem>  
            </Accordion>

    )
  }


  
  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.submenu) {
        
        return (
          <>
            <Accordion allowMultiple width="100%" maxW="lg" rounded="lg" key={index}>
              <AccordionItem border='none'>
                <AccordionButton 
                  p={0}
                  > 
                  {/* <Box key={index}> */}
                  <Box as="span" flex='1' textAlign='left'>
                    {route.icon ? (
                      <Box>
                        <HStack
                          spacing={
                            activeRoute(route.layout.toLowerCase()) ? "100px" : "26px"
                            /* activeRoute(true) ? "22px" : "26px" */
                          }
                          py='5px'
                          ps='10px'>
                          <Flex w='100%' alignItems='center' justifyContent='center'>
                            <Box
                              color={
                                activeRoute(route.layout.toLowerCase())
                                /* activeRoute(true) */
                                  ? activeIcon
                                  : textColor
                              }
                              me='18px'>
                              {route.icon}
                            </Box>
                            <Text
                              me='auto'
                              color={
                                activeRoute(route.layout.toLowerCase())
                                /* activeRoute(true) */
                                  ? activeColor
                                  : textColor
                              }
                              fontWeight={
                                activeRoute(route.layout.toLowerCase())
                                /* activeRoute(true) */
                                  ? "bold"
                                  : "normal"
                              }>
                              {route.name}
                            </Text>
                          </Flex>
                          {/* <Box
                            h='36px'
                            w='4px'
                            bg={
                              activeRoute(route.layout.toLowerCase())
                                ? brandColor
                                : "transparent"
                            }
                            borderRadius='5px'
                          /> */}
                        </HStack>
                      </Box>
                    ) : (
                      <Box>
                        <HStack
                          spacing={
                            activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                          }
                          py='5px'
                          ps='10px'>
                          <Text
                            me='auto'
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeColor
                                : inactiveColor
                            }
                            fontWeight={
                              activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                            }>
                            {route.name}
                          </Text>
                          <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                        </HStack>
                      </Box>
                    )}
                  </Box> 
                  <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
                </AccordionButton>
                <AccordionPanel pb={4}>  
                  {/* {createLinks(route.subitem)} */}
                  {route.items                     
                    ?createLinks(route.items)
                    :console.log('error - no subitems')
                  } 
                </AccordionPanel>
              </AccordionItem>  
            </Accordion>
            {/* {createLinks(route.items)} */}
          </>
        );
      } else if (route.subsub) {
        return (
          <>
            <Accordion allowMultiple width="100%" maxW="lg" rounded="lg" key={index}>
              <AccordionItem border='none'>
                <AccordionButton 
                  p={0}
                  > 
                  {/* <Box key={index}> */}
                  <Box as="span" flex='1' textAlign='left'>
                    {route.icon ? (
                      <Box>
                        <HStack
                          spacing={
                            activeRoute(route.layout.toLowerCase()) ? "100px" : "26px"
                            /* activeRoute(true) ? "22px" : "26px" */
                          }
                          py='5px'
                          ps='10px'>
                          <Flex w='100%' alignItems='center' justifyContent='center'>
                            <Box
                              color={
                                activeRoute(route.layout.toLowerCase())
                                /* activeRoute(true) */
                                  ? activeIcon
                                  : textColor
                              }
                              me='18px'>
                              {route.icon}
                            </Box>
                            <Text
                              me='auto'
                              color={
                                activeRoute(route.layout.toLowerCase())
                                /* activeRoute(true) */
                                  ? activeColor
                                  : textColor
                              }
                              fontWeight={
                                activeRoute(route.layout.toLowerCase())
                                /* activeRoute(true) */
                                  ? "bold"
                                  : "normal"
                              }>
                              {route.name}
                            </Text>
                          </Flex>
                          {/* <Box
                            h='36px'
                            w='4px'
                            bg={
                              activeRoute(route.layout.toLowerCase())
                                ? brandColor
                                : "transparent"
                            }
                            borderRadius='5px'
                          /> */}
                        </HStack>
                      </Box>
                    ) : (
                      <Box>
                        <HStack
                          spacing={
                            activeRoute(route.path.toLowerCase()) ? "100px" : "26px"
                          }
                          py='5px'
                          ps='33px'>
                          <Text fontSize='sm'
                            me='auto'
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeColor
                                : inactiveColor
                            }
                            fontWeight={
                              activeRoute(route.path.toLowerCase()) 
                              ? "bold" 
                              : "normal"
                            }>
                            {route.name}
                          </Text>
                          {/* <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' /> */}
                        </HStack>
                      </Box>
                    )}
                  </Box> 
                  <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
                </AccordionButton>
                <AccordionPanel pb={4}>  
                  {/* {createLinks(route.subitem)} */}
                  {route.items                    
                    ?createLinks(route.items)
                    :console.log('error - no subitems')
                  } 
                </AccordionPanel>
              </AccordionItem>  
            </Accordion>
            {/* {createLinks(route.items)} */}
          </>
        ); 
      } else if (
        route.layout === "/admin" ||
        route.layout === "/reference" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          /* console.log("dos: ",route.path.toLowerCase()),
          console.log("ruta activa:", activeRoute(route.path.toLowerCase())),
          console.log("ruta completa activa:", route.layout + route.path), */
          <NavLink key={index} to={route.layout + route.path}>
            {route.icon ? (
              <Box>
                <HStack
                  spacing={
                    activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                  }
                  py='5px'
                  ps='10px'>
                  <Flex w='100%' alignItems='center' justifyContent='center'>
                    <Box
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeIcon
                          : textColor
                      }
                      me='18px'>
                      {route.icon}
                    </Box>                    
                    <Text
                      me='auto'
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : textColor
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase())
                          ? "bold"
                          : "normal"
                      }>
                      {route.name}
                    </Text>
                  </Flex>
                  <Box
                    h='36px'
                    w='4px'
                    bg={
                      activeRoute(route.path.toLowerCase())
                        ? brandColor
                        : "transparent"
                    }
                    borderRadius='5px'
                  />
                </HStack>
              </Box>
            ) : (
              <Box>
                <HStack
                  spacing={
                    activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                  }
                  py='5px'
                  ps='10px'>
                  <Flex w='100%' alignItems='center' justifyContent='center'>
                    {route.icon3
                     ?<Box
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeIcon
                              : textColor
                          }
                          me='18px'>
                          {route.icon3}
                      </Box> 
                     :<Box
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeIcon
                              : textColor
                          }
                          me='18px'>
                          {route.icon}
                      </Box> }
                    {/* <Box
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeIcon
                            : textColor
                        }
                        me='18px'>
                        {route.icon}
                    </Box> */}                    
                    <Text
                      me='auto'
                      fontSize='sm'
                      ml='5px'
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : inactiveColor
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                      }>
                      {route.name}
                    </Text>
                  </Flex>
                  {/* <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' /> */}
                  <Box
                    h='36px'
                    w='4px'
                    bg={
                      activeRoute(route.path.toLowerCase())
                        ? brandColor
                        : "transparent"
                    }
                    borderRadius='5px'
                  />
                </HStack>
              </Box>
            )}
          </NavLink>
        );      
      }
    });
  };
  //  BRAND
  return createLinks(routes);
}

export default SidebarLinks;
