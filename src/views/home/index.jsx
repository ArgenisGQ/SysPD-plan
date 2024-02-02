/* eslint-disable */
/*!

*/

import React, { useEffect, useState } from "react";
import {Link, useNavigate}  from "react-router-dom";
import {useForm} from "react-hook-form";
// Chakra imports
import {
  Box,
  /* Button, */
  Checkbox,
  Flex,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Button, ButtonGroup,
  Stack, VStack, useBreakpointValue
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "../../components/separator/Separator";
/* import DefaultAuth from "../../layouts/auth/Default"; */
import DefaultAuth from "../../layouts/home";
// Assets
/* import illustration from "../../../assets/img/auth/auth.png"; */
import illustration from "../../assets/img/auth/home-bg.jpg";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import useAuthUser from '../../hooks/useAuthUser';

function homePage() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  /* ---------------------------------- */
  const navigate = useNavigate(); 
  const { 
    register, handleSubmit,watch,  
    formState: { errors, isSubmitting },                
                } = useForm({
    /* defaultValues: {
        email: 'email@email.com',
        password: 'password'
    } */      
    });
  
  const [modalMessage, setModalMessage] = useState();  
  
  const onSubmit = (data) => {
    console.log("Loging...!!");

    /* const responseFullAntes = localStorage?.getItem("responseF"); 
    console.log("response full (login ANTES): ", responseFullAntes) */
    /* const responseFullObjAntes = JSON.parse(responseFullAntes);
    console.log("response full obj (login ANTES): ",responseFullObjAntes.status) */

    Login5(data);

    /* const responseFull = localStorage.getItem("responseF"); */
    const responseFull = localStorage.getItem("responseF"); 
    console.log("response full (login): ", responseFull)
    const responseFullObj = JSON.parse(responseFull);
    console.log("response full obj (login): ",responseFullObj.status)
    console.log("message (login): ",responseFullObj.data.data.error)

    console.log("data: ",data)

    console.log("user: ",userAuth);
    console.log("status: ",userStatus);
    console.log("token: ",userToken);
    

    /* const controlModal = false;
    const openModal = () => ({isOpen}) */
    
    /* if (responseFullObj.status === "success") {
      navigate('/');
    } else {
      console.log("falla de usuario")
      } */

    if (responseFullObj.status === 401) {
      console.log("datos erroneos")
      setModalMessage(responseFullObj.data.data.error)
      onOpen();
    }
    
  }
  /* const [modalControl, setModalControl] = useState(false); */
 
  const {userAuth, userStatus, userToken, Login5, Logout5, mutLogin  }   = useAuthUser();  
  /* const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: modalControl }); */
  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: false});
  /* {setModalControl(false)} */
  const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '100%',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
  }
  const logout = () => {
    console.log("iniciando logout...");
    Logout5();
    /* mutLogout(); */
    console.log("desconexion realizada...")
}
   
  /* ---------------------------------- */
  return (
    <>
   
      <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex 
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'     
        >
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
          Sistema de Planificacion Didactica
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            Diseño Instruccional de la Universidad Yacambu -- proyecto en desarrollo (DEMTec) --            
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          
          <Flex align='center' mb='25px'>
            <HSeparator />
           
            <HSeparator />
          </Flex>
          <Box>
          <ButtonGroup gap='4'>
            <Link to= "/login" >
              <Button
                fontSize='sm'
                
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                colorScheme='brand'>
                Login
              </Button>
            </Link>
            <Link to='/register'>
              <Button
                fontSize='sm'
                
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                
                colorScheme='brand'>
                Registro
              </Button>
            </Link> 
            <Link to='/all'>
              <Button
                fontSize='sm'
                
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                
                colorScheme='brand'>
                Lista
              </Button>
            </Link>
            
              <Button
                fontSize='sm'
                
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                
                colorScheme='brand'
                onClick={logout}>
                Logout
              </Button>
            
            
          </ButtonGroup>
          </Box>
          
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            mt='0px'>
            
          </Flex>
        </Flex>
      </Flex>
      </DefaultAuth>  
    {/* </DefaultAuth> */}

    {/* <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Show me more
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex> */}

    {/* <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Box sx={innerBoxStyles} >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <p>PARRAFO DE PRUEBA</p>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Show me more
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
      </Box>      
    </DefaultAuth>  */}   
    </>
  );
}

export default homePage;
