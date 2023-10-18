import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,  
  InputRightElement,
  InputLeftAddon,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  Switch,  
} from '@chakra-ui/react';
/* import * as React  from 'react'; */
import React, { useEffect, useState } from "react";
import { Dropzone } from './Dropzone';
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

/* const textColor = useColorModeValue("navy.700", "white");
const textColorSecondary = "gray.400";
const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
const textColorBrand = useColorModeValue("brand.500", "white");
const brandStars = useColorModeValue("brand.500", "brand.400"); */
/* const [show, setShow] = useState(false); */
/* const handleClick = () => setShow(!show); */



export const PasswordCard = (props) => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return ( 
 <Box
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    flex="1"
    {...props}
  >
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
      <FormControl id="old-password">
        <FormLabel>Contraseña actual</FormLabel>
        <Input defaultValue="********" />
      </FormControl>

      <FormControl id="new-password">
        <FormLabel>Nueva contraseña</FormLabel>
        <Input defaultValue="********" />
      </FormControl>

      <FormControl id="confirm-password">
        <FormLabel>Confirmar contraseña</FormLabel>
        <Input defaultValue="********" />
      </FormControl>

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
                isRequired={true}
                fontSize='sm'
                placeholder='Minimo 8 caracteres'
                mb='24px'
                size='lg'
                type={show ? "text" : "password"}
                variant='auth'
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
         
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
      <Button type="submit" variant="primary">
        Guardar
      </Button>
    </Flex>
  </Box>)
}




