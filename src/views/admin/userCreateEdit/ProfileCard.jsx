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

export const ProfileCard = (props) => (
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
      <Stack
        spacing="6"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <FormControl id="username">
          <FormLabel>Usuario</FormLabel>
          <Input defaultValue="Usuario unico" />
        </FormControl>
        <FormControl id="cedula">
          <FormLabel>Cedula</FormLabel>
          <Input defaultValue="Cedula" />
        </FormControl>
        <FormControl display="flex" /* alignItems="center" */>
          <FormLabel htmlFor="user-active" mb="0">
            Usuario Activo
          </FormLabel>
          <Switch id="user-active" colorScheme="brand" />          
        </FormControl>
      </Stack>
      <Stack
        spacing="6"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <FormControl id="firstName">
          <FormLabel>Nombres</FormLabel>
          <Input defaultValue="Nombres del Usuario" />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Apellidos</FormLabel>
          <Input defaultValue="Apellidos del Usuario" />
        </FormControl>
      </Stack>
      {/* <FormControl id="website">
        <FormLabel>Website</FormLabel>
        <InputGroup>
          <InputLeftAddon>https://</InputLeftAddon>
          <Input defaultValue="www.chakra-ui.com" />
        </InputGroup>
      </FormControl> */}
      <FormControl id="street">
        <FormLabel>Email</FormLabel>
        <Input defaultValue="user@email.com" />
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
      <Button type="submit" variant="primary">
        Guardar
      </Button>
    </Flex>
  </Box>
)
