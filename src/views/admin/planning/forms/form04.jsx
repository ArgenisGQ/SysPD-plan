import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement, 
  Grid,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  Divider,  
  Stack,
  StackDivider,
  Radio, RadioGroup 
} from '@chakra-ui/react'

import InputField from '../../../../components/fields/InputField'

import { useToast } from '@chakra-ui/react'

export default function Form03() {
      // Chakra color mode
      const textColor = useColorModeValue("navy.700", "white");
      const textColorSecondary = "gray.400";
      const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
      const textColorBrand = useColorModeValue("brand.500", "white");
      const brandStars = useColorModeValue("brand.500", "brand.400");    
      const [show, setShow] = useState(false)
      const handleClick = () => setShow(!show)
      const [value, setValue] = useState('1')
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
          III. Plan de evaluacion
        </Heading>


        <Flex mt="5%">
          <FormControl  mt="2%" id="proposito" mr="2%">
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Competencia especifica
            </FormLabel>
            <Textarea rows={4} resize="none" />
            {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
          </FormControl>
          <FormControl  mt="2%" id="proposito" /* mr="2%" */>
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Criterio de Desempeño
            </FormLabel>
            <Textarea rows={4} resize="none" />
            {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
          </FormControl>          
        </Flex>

        <Box position='relative' padding='10'>
          <Divider />
          {/* <AbsoluteCenter bg='white' px='4'>
            Content
          </AbsoluteCenter> */}
        </Box>

        <Flex /* mt="2%" */>
          <FormControl  mt="2%" id="proposito" mr="2%">
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Estrategia de Evaluacion
            </FormLabel>
            <Textarea rows={4} resize="none" />
            {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
          </FormControl>
          <FormControl  mt="2%" id="proposito" /* mr="2%" */>
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Instrumento de Evaluacion
            </FormLabel>
            <Textarea rows={4} resize="none" />
            {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
          </FormControl>          
        </Flex>

        <Box position='relative' padding='10'>
          <Divider />
          {/* <AbsoluteCenter bg='white' px='4'>
            Content
          </AbsoluteCenter> */}
        </Box>

        <Flex /* mt="5%" */>
          <FormControl  mt="2%" id="proposito" mr="2%">
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Evidencia de Evaluacion
            </FormLabel>
            <Textarea rows={4} resize="none" />
            {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
          </FormControl>
          <FormControl  mt="2%" id="proposito" /* mr="2%" */>
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Retroalimentacion
            </FormLabel>
            <Textarea rows={4} resize="none" />
            {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
          </FormControl>          
        </Flex>

          <FormControl mt="2%" w='50%' >
            <Card
              /* direction={{ base: 'column', sm: 'row' }} */
              /* overflow='hidden' */
              /* variant='outline' */>
              <CardHeader>
                <Heading size='md'>Tipo de Evaluacion</Heading>
              </CardHeader>

              <CardBody>

                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='row'>
                      <Radio value='1'>Diagnostica</Radio>
                      <Radio value='2'>Formativa</Radio>
                      <Radio value='3'>Sumativa</Radio>
                    </Stack>
                  </RadioGroup>   
              </CardBody>
            </Card>
          </FormControl>

        <Flex /* mt="3%" */>
          <FormControl  mt="2%" id="proposito" mr="2%">
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Lapso/Entrega
            </FormLabel>
            <Textarea rows={4} resize="none" />
            {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
          </FormControl>
          <FormControl  mt="2%" id="proposito" /* mr="2%" */>
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Ponderacion/Calificacion
            </FormLabel>
            <Textarea rows={4} resize="none" />
            {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
          </FormControl>          
        </Flex>

        {/* <SimpleGrid columns={1} spacing={6}>
          <FormControl as={GridItem} colSpan={[3, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              Website
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: 'gray.800',
                }}
                color="gray.500"
                rounded="md">
                http://
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="www.example.com"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
  
            <InputField
              mb="0px"
              me="30px"
              id="username"
              label="Username"
              placeholder="@simmmple.web"
            />
            <FormHelperText>
              Brief description for your profile. URLs are hyperlinked.
            </FormHelperText>
  
          </FormControl>
  
          <FormControl id="email" mt={1} >
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              About
            </FormLabel>
            <Textarea
              placeholder="you@example.com"
              rows={3}
              shadow="sm"
              size="sm"
              focusBorderColor="brand.400"
              fontSize={{
                sm: 'sm',
              }}
            />                  
          </FormControl>
        </SimpleGrid> */}
      </>
    )
  }