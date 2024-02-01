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
  Button, ButtonGroup
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "../../components/separator/Separator";
import DefaultAuth from "../../layouts/auth/Default";
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
  const logout = () => {
    console.log("iniciando logout...");
    Logout5();
    /* mutLogout(); */
    console.log("desconexion realizada...")
}
   
  /* ---------------------------------- */
  return (
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
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            Iniciar Sesión
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            Coloque su email y su clave para ingresar!            
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
          {/* <Button
            fontSize='sm'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            fontWeight='500'
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}>
            <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
            Sign in with Google
          </Button> */}
          <Flex align='center' mb='25px'>
            <HSeparator />
           
            <HSeparator />
          </Flex>
          <Box>
          <ButtonGroup gap='4'>
            <Link to= "/login" >
              <Button
                fontSize='sm'
                /* variant='brand' */
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                /* isLoading={isSubmitting} */
                /* type='submit' */
                /* colorScheme='whiteAlpha'  */
                colorScheme='brand'>
                Login
              </Button>
            </Link>
            <Link to='/register'>
              <Button
                fontSize='sm'
                /* variant='brand' */
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                /* isLoading={isSubmitting} */
                /* type='submit'  */
                colorScheme='brand'>
                Registro
              </Button>
            </Link> 
            <Link to='/all'>
              <Button
                fontSize='sm'
                /* variant='brand' */
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                /* isLoading={isSubmitting} */
                /* type='submit' */ 
                colorScheme='brand'>
                Lista
              </Button>
            </Link>
            
              <Button
                fontSize='sm'
                /* variant='brand' */
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                /* isLoading={isSubmitting} */
                /* type='submit'  */
                colorScheme='brand'
                onClick={logout}>
                Logout
              </Button>
            
            
          </ButtonGroup>
          </Box>
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel
                display='flex'
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                mb='8px'>
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                id="email"
                
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='email'
                placeholder='mail@uny.edu.ve'
                mb='24px'
                fontWeight='500'
                size='lg'
                {...register('email', {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  required: true,
                  
                })}
              />
              <FormErrorMessage>
                {errors.email?.type === 'required' && <p>Email requerido!</p>}
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
              </FormErrorMessage>
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                display='flex'>
                Contraseña<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size='md'>
                <Input
                  id="password"
                  
                  fontSize='sm'
                  placeholder='Minimo 8 caracteres'
                  mb='24px'
                  size='lg'
                  type={show ? "text" : "password"}
                  variant='auth'
                  {...register('password', {
                    required: true,
                    maxLength: 10
                  })}
                />
                <FormErrorMessage>
                  {errors.password?.type === 'required' && <p>Password requerido!</p>}
                </FormErrorMessage>
                <InputRightElement display='flex' alignItems='center' mt='4px'>
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <Flex justifyContent='space-between' align='center' mb='24px'>
                <FormControl display='flex' alignItems='center'>
                  <Checkbox
                    id='remember-login'
                    colorScheme='brandScheme'
                    me='10px'
                  />
                  <FormLabel
                    htmlFor='remember-login'
                    mb='0'
                    fontWeight='normal'
                    color={textColor}
                    fontSize='sm'>
                    Mantenerse conectado
                  </FormLabel>
                </FormControl>
                <NavLink to='/auth/forgot-password'>
                  <Text
                    color={textColorBrand}
                    fontSize='sm'
                    w='124px'
                    fontWeight='500'>
                    Olvido la clave?
                  </Text>
                </NavLink>
              </Flex>
              <Button
                fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                isLoading={isSubmitting}
                type='submit'>
                Conectar
              </Button>
            </FormControl>
          </form>   */}
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
  );
}

export default homePage;
