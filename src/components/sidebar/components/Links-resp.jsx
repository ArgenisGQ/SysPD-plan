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

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <>
            {/* <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight='bold'
              mx='auto'
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt='18px'
              pb='12px'
              key={index}>
              {route.name}
            </Text> */}
            <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
              <AccordionItem border='none'>
                <AccordionButton                                  
                  /* alignItems="center" */
                  /* justifyContent="space-between" */
                  p={0}
                  > 
                  {/* {route.layout === "/admin" }  */}                 
                  <Box key={index}>
                    {route.icon ? (
                      <Box>
                        <HStack
                          spacing={
                            /* activeRoute(route.path.toLowerCase()) ? "22px" : "26px" */
                            activeRoute(true) ? "22px" : "26px"
                          }
                          py='5px'
                          ps='10px'>
                          <Flex w='100%' alignItems='center' justifyContent='center'>
                            <Box
                              color={
                                /* activeRoute(route.path.toLowerCase()) */
                                activeRoute(true)
                                  ? activeIcon
                                  : textColor
                              }
                              me='18px'>
                              {route.icon}
                            </Box>
                            <Text
                              me='auto'
                              color={
                                /* activeRoute(route.path.toLowerCase()) */
                                activeRoute(true)
                                  ? activeColor
                                  : textColor
                              }
                              fontWeight={
                                /* activeRoute(route.path.toLowerCase()) */
                                activeRoute(true)
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
                  </Box>          
                  <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Chakra UI is a simple and modular component library that gives developers
                    the building blocks they need to create web applications.
                  </Text>
                  {route.layout === "/admin" }

                  {/* <NavLink key={index} to={route.layout + route.path}>
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
                  </NavLink>  */}           


                </AccordionPanel>
              </AccordionItem>  
            </Accordion>   
            {/* {createLinks(route.items)} */}
          </>
        );
      } else if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
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
        );
      }
    });
  };
  //  BRAND
  return createLinks(routes);
}

export default SidebarLinks;
