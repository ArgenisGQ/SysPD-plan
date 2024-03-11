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
  Text,
  effect
} from '@chakra-ui/react'
import {useState, useRef, useEffect} from 'react'
import {useForm} from "react-hook-form";
import { Dropzone } from './Dropzone'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

import useDataUser from '../../../../hooks/useDataCourse';

export const ProfileCard = (props) => {
  /* const { edit,
          idUserL,
          userNameL,
          firstNameL,
          lastNameL,
          idCardL,
          emailL } = props; */
  const { edit,
          idCourseL,
          nameL,
          codeL,
          sectionL} = props;        
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const form = useRef(); //PARA RESET EL FORMULARIO

  /* const {CreateUser,EditUser} = useDataUser(); */
  const {CreateCourse,EditCourse} = useDataUser();

  

 

  const { 
  register, handleSubmit, reset,  
  formState: { errors, isSubmitting },                
              } = useForm({
               /*  defaultValues:preloadedValuesx */

                /* defaultValues:{
                  username:userForEdit.username,
                  idcard:idCard,
                  activeuser:false,
                  firstname:name[0],
                  lastname:name[1],
                  email:userForEdit.email
                }, */
                /* values: 
                { 
                  iduser:idUserL,
                  username:userNameL,
                  idcard:idCardL,
                  activeuser:false,
                  firstname:firstNameL,
                  lastname:lastNameL,
                  email:emailL,
                }, */
                values: 
                { 
                  idcourse:idCourseL,
                  name:nameL,
                  code:codeL,
                  section:sectionL,
                },
                },);

 //----------------------------------------------------------------------------------//
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: false});
  
  const onSubmit = (data) => {

    if (edit) {
      console.log("Control EDITAR");
      EditOnCourse(data);
      onOpen();      
    } else {
      CreateCourse(data);
      const dataCreateCourseLocal = JSON.parse(localStorage.getItem("dataCreateCourse"));
      console.log("data dataCreateCourse en obj: ", dataCreateCourseLocal)
      form.current.reset();//PARA RESET EL FORMULARIO
      onOpen();
    }
  }

  const EditOnCourse = (data) => {
    console.log("DATA para enviar a editar: ",data)
    EditCourse(data);
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
            <FormControl id="name" isInvalid={errors.name}>
              <FormLabel>Nombre de la asignatura</FormLabel>
              <Input
                  id = "name" 
                  type='text'
                  /* defaultValue= {userNameL} */
                  /* variant='auth' */
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  /* type='email' */
                  placeholder='Nombre de la Asignatura'
                  mb='24px'
                  fontWeight='500'
                  /* size='lg' */
                  {...register('name', {
                    required: !edit,
                    /* maxLength: 10 */
                    minLength:2
                  })} />
              <FormErrorMessage>
                  {/* {errors.username?.type === 'required' && <p>Usuario requerido!</p>} */}
                  {errors.name?.type === 'required' && <p>Nombre del curso requerido!</p>}
                  {/* <p>prueba</p> */}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="code" isInvalid={errors.code}>
              <FormLabel>Codigo de Asignatura</FormLabel>
              <Input 
                  id = "code" 
                  type='text'
                  /* defaultValue={idCardL} */
                  /* variant='auth' */
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  /* type='email' */
                  placeholder='Codigo de la Asignatura'
                  mb='24px'
                  fontWeight='500'
                  /* size='lg' */
                  {...register('code', {
                    required: !edit,
                    /* maxLength: 10 */
                    minLength:2
                  })}/>
              <FormErrorMessage>
                  {errors.code?.type === 'required' && <p>Codigo requerido!</p>}
              </FormErrorMessage>
            </FormControl>

          </Stack>
          <Stack
            spacing="6"
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <FormControl id="section" isInvalid={errors.section}>
              <FormLabel>Seccion</FormLabel>
              <Input 
                  id = "section" 
                  type='text'
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  placeholder='Seccion de la Asignatura'
                  mb='24px'
                  fontWeight='500'
                  /* size='lg' */
                  {...register('section', {
                    required: !edit,
                    /* maxLength: 10 */
                    minLength:2
                  })} />
              <FormErrorMessage>
                  {errors.section?.type === 'required' && <p>Seccion requerida!</p>}
              </FormErrorMessage>
            </FormControl>

          </Stack>

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
        {/* MODAL */}
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
