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
} from '@chakra-ui/react'
import * as React from 'react'
import { Dropzone } from './Dropzone'

export const PasswordCard = (props) => (
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
  </Box>
)
