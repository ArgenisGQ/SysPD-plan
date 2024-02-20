import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
  useColorModeValue,
  Switch,
  FormErrorMessage,
  InputRightElement,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text
} from '@chakra-ui/react'
import {useState, useRef, useEffect} from 'react'
import {useForm} from "react-hook-form";
import { Dropzone } from './Dropzone'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

import useDataUser from '../../../hooks/useDataUser'; 



export const ProfileCard = (props) => {
  const { edit,
          userNameL,
          firstNameL,
          lastNameL,
          idCardL,
          emailL } = props;
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  //Estados inciales para usar el formulario en edicion.
  const [userName, setUserName] = useState(userNameL);
  const [idCard, setIdCard] = useState(idCardL);
  const [firstName, setFirstName] = useState(firstNameL);
  const [lastName, setLastName] = useState(lastNameL);
  const [email, setEmail] = useState(emailL);
  const [password, setPassword] = useState("");

  const form = useRef(); //PARA RESET EL FORMULARIO

  const {CreateUser,EditLoadUser,EditUser} = useDataUser();

  const { 
  register, handleSubmit, watch,  
  formState: { errors, isSubmitting },                
              } = useForm({
      
  });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: false});
  
  const onSubmit = (data) => {
    /* console.log("datos dentro del formulario: ", data);
    CreateUser(data);
    console.log("data create front: ",localStorage.getItem("dataCreateUser"));
    const dataCreateUserLocal = JSON.parse(localStorage.getItem("dataCreateUser"));
    console.log("data dataCreateUser en obj: ", dataCreateUserLocal)
    form.current.reset();//PARA RESET EL FORMULARIO
    onOpen(); */

    if (edit) {
      console.log("Control EDITAR");
      EditOnUser(data);
      onOpen();      
    } else {
      console.log("datos dentro del formulario: ", data);
      CreateUser(data);
      console.log("data create front: ",localStorage.getItem("dataCreateUser"));
      const dataCreateUserLocal = JSON.parse(localStorage.getItem("dataCreateUser"));
      console.log("data dataCreateUser en obj: ", dataCreateUserLocal)
      /* if (responseFullObj.status === 401) {
        console.log("datos erroneos")
        setModalMessage(responseFullObj.data.data.error)
        onOpen();
      } */
      form.current.reset();//PARA RESET EL FORMULARIO
      onOpen();
    }
  }
  /* console.log("datos de usuario a editar:",userName) */
  /* useEffect(() => {
    if (edit) {
      ShowForEditData(25);
      console.log("efecto-load: ", load)
    } 
  }, []); 

  console.log('FRONT control de editor: ', edit)
  
  const ShowForEditData = (data) => {
    const userForEdit = JSON.parse(localStorage.getItem("userForEdit"));
    console.log("FRONT full user para editar es: ", userForEdit);
    setUserName(userNameL);
    const name = (userForEdit.name).split(',')
    console.log("nombre EDIT: ",name )
    setFirstName(name[0]);
    setLastName(name[1]);
    setEmail(userForEdit.email);
  } */
  
  const EditOnUser = (data) => {
    console.log("DATA para enviar a editar: ",data)
  }
  
  return(
  <>
  
    <Box
      bg="bg-surface"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      borderRadius="lg"
      flex="1"
      {...props}
    >
      <form  ref={form} onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing="5"
          px={{
            base: '4',
            md: '6',
          }}
          py={{
            base: '5',
            md: '6',
          }}
        > 
          
          <Stack
            spacing="6"
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <FormControl id="userName" isInvalid={errors.username}>
              <FormLabel>Usuario</FormLabel>
              <Input
                  id = "username" 
                  type='text'
                  defaultValue= {userNameL}
                  /* variant='auth' */
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  /* type='email' */
                  placeholder='Usuario unico'
                  mb='24px'
                  fontWeight='500'
                  /* size='lg' */
                  {...register('username', {
                    required: true,
                    /* maxLength: 10 */
                  })} />
              <FormErrorMessage>
                  {/* {errors.username?.type === 'required' && <p>Usuario requerido!</p>} */}
                  {errors.username?.type === 'required' && <p>Usuario requerido!</p>}
                  {/* <p>prueba</p> */}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="idCard" isInvalid={errors.idcard}>
              <FormLabel>Cedula</FormLabel>
              <Input 
                  id = "idcard" 
                  type='text'
                  defaultValue={idCardL}
                  /* variant='auth' */
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  /* type='email' */
                  placeholder='numero de identificacion'
                  mb='24px'
                  fontWeight='500'
                  /* size='lg' */
                  {...register('idcard', {
                    required: true,
                    /* maxLength: 10 */
                  })}/>
              <FormErrorMessage>
                  {errors.idcard?.type === 'required' && <p>Cedula requerido!</p>}
              </FormErrorMessage>
            </FormControl>
            <FormControl /* display="flex" */ /* alignItems="center" */>
              <FormLabel htmlFor="user-active" mb="0">
                Usuario Activo 
              </FormLabel>
              <Switch 
                  id="user-active" 
                  colorScheme="brand" 
                  defaultChecked
                  mb="0"
                  mt="3"
                  ml="8"
                  /* isChecked */
                  {...register('activeuser', {
                    /* required: true, */
                    /* maxLength: 10 */
                  })}/>          
            </FormControl>
          </Stack>
          <Stack
            spacing="6"
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <FormControl id="firstName" isInvalid={errors.firstname}>
              <FormLabel>Nombres</FormLabel>
              <Input 
                  id = "firstName" 
                  type='text'
                  defaultValue={firstNameL}
                  /* variant='auth' */
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  /* type='email' */
                  placeholder='Nombres del usuario'
                  mb='24px'
                  fontWeight='500'
                  /* size='lg' */
                  {...register('firstname', {
                    required: true,
                    /* maxLength: 10 */
                  })} />
              <FormErrorMessage>
                  {errors.firstname?.type === 'required' && <p>Nombre(s) requerido!</p>}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="lastName" isInvalid={errors.lastname}>
              <FormLabel>Apellidos</FormLabel>
              <Input 
                  id = "lastname" 
                  type='text'
                  defaultValue={lastNameL}
                  /* variant='auth' */
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  /* type='email' */
                  placeholder='Apellidos del  usuario'
                  mb='24px'
                  fontWeight='500'
                  /* size='lg' */
                  {...register('lastname', {
                    required: true,
                    /* maxLength: 10 */
                  })} />
            <FormErrorMessage>
                  {errors.lastname?.type === 'required' && <p>Apellido(s) requerido!</p>}
            </FormErrorMessage>      
            </FormControl>            
          </Stack>
          {/* <FormControl id="website">
            <FormLabel>Website</FormLabel>
            <InputGroup>
              <InputLeftAddon>https://</InputLeftAddon>
              <Input defaultValue="www.chakra-ui.com" />
            </InputGroup>
          </FormControl> */}
          <FormControl id="email" isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input 
                id = "email" 
                type='email'
                defaultValue={emailL}
                /* variant='auth' */
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                /* type='email' */
                placeholder='correo electronico unico'
                mb='24px'
                fontWeight='500'
                /* size='lg' */
                {...register('email', {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  required: true,
                  /* maxLength: 10 */
                })} />
            <FormErrorMessage>
                {errors.email?.type === 'required' && <p>Email requerido!</p>}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
              <Input 
                  id = "password" 
                  type={show ? "text" : "password"}
                  defaultValue={password}
                  /* variant='auth' */
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  /* type='email' */
                  placeholder='minimo 8 caracteres'
                  mb='24px'
                  fontWeight='500'
                  /* size='lg' */
                  {...register('password', {
                    /* pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, */
                    required: true,
                    /* maxLength: 10 */
                  })} />              
              <InputRightElement display='flex' alignItems='center' mt='0px'>
                    <Icon
                      color={textColorSecondary}
                      _hover={{ cursor: "pointer" }}
                      as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                      onClick={handleClick}
                    />
              </InputRightElement>
              
            </InputGroup>
            <FormErrorMessage>
                  {errors.password?.type === 'required' && <p>Password requerido!</p>}
            </FormErrorMessage>
          </FormControl>
          
          {/* <FormControl id="bio">
            <FormLabel>Bio</FormLabel>
            <Textarea rows={3} resize="none" />
            <FormHelperText color="subtle">Write a short introduction about yourself</FormHelperText>
          </FormControl> */}
          <FormControl id="picture">
            <FormLabel>Foto</FormLabel>
            <Stack
              spacing={{
                base: '3',
                md: '5',
              }}
              direction={{
                base: 'column',
                sm: 'row',
              }}
            >
              <Avatar size="lg" name="USUARIO" src="https://tinyurl.com/yhkm2ek8" />
              <Dropzone width="full" />
            </Stack>
          </FormControl>      
          </Stack>        
        <Divider />
        <Flex
          direction="row-reverse"
          py="4"
          px={{
            base: '4',
            md: '6',
          }}
        >
          {console.log("ERRORES DATA:", errors)}
          <Button 
              type="submit" 
              /* variant="primary" */
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='20%'
              h='50'
              mb='24px'
              isLoading={isSubmitting}
              /* type='submit' */>
            { edit?'Editar':'Guardar'}
          </Button>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>Alerta</ModalHeader> */}
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Center> */}
                <Text
                  mb='36px'
                  ms='4px'
                  color={textColorSecondary}
                  fontWeight='400'
                  fontSize='md'
                  textAlign={[ 'left', 'center' ]}>
                  {/* Coloque su email y su clave para ingresar! */}
                  {/* {modalMessage}     */}   
                  {/* <p>USUARIO CREADO</p> */}
                  {edit ? 'Usuario Editado' : 'Usuario Creado'}     
                </Text>
              {/* </Center> */}  
            </ModalBody>  
            <ModalFooter>
              <Button
                fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='50%'
                h='50'
                mb='24px'                
                onClick={onClose}
                type='submit'>
                Ok
              </Button>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Ok
              </Button> */}
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </Box>
  
  </>  
  )
}
