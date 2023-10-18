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



export const PwdUserCard = (props) => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");  
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
        <Input defaultValue="Minimo 8 caracteres" />
      </FormControl>

      <FormControl id="confirm-password">
        <FormLabel>Confirmar contraseña</FormLabel>
        <Input defaultValue="La misma contraseña anterior" />
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
      <Button type="submit" variant="primary">
        Guardar
      </Button>
    </Flex>
  </Box>)
}




