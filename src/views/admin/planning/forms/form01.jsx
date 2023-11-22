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
  Text,
  Divider,
  AbsoluteCenter,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Radio, RadioGroup, Center     
} from '@chakra-ui/react'

import { HSeparator } from "../../../../components/separator/Separator";

import InputField from '../../../../components/fields/InputField'

import { useToast } from '@chakra-ui/react'

/* import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select"; */

/* const Form1 = () => { */    

export default function Form01() {
      // Chakra color mode
      const textColor = useColorModeValue("navy.700", "white");
      const textColorSecondary = "gray.400";
      const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
      const textColorBrand = useColorModeValue("brand.500", "white");
      const brandStars = useColorModeValue("brand.500", "brand.400");    
      const [show, setShow] = useState(false)
      const handleClick = () => setShow(!show)
      const [value, setValue] = useState(null)
      const [valuePre, setValuePre] = useState(null)
      const [valuePos, setValuePos] = useState(null)
      const [valueMod, setValueMod] = useState(null)
    return (
/* export default function Form01(props) { */
      <>    
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          I. Identificacion de la unidad curricular
        </Heading>
        <FormControl mt="2%">
          <FormLabel 
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
            Nombre de la asignatura
          </FormLabel>
          <Input 
            id="course" 
            /* value=""  */
            /* type="email" */
            disabled={false}
            defaultValue="testing"
            focusBorderColor="brand.400"
            color={textColorSecondary} />
          <FormHelperText color="subtle">Nombre asignado..</FormHelperText>
          {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl  mt="2%" id="proposito">
          <FormLabel
          htmlFor="course"
          fontSize='sm' 
          fontWeight={'normal'}
          color={textColor}>
            Proposito
          </FormLabel>
          <Textarea rows={3} resize="none" defaultValue="testing" color={textColorSecondary}
            focusBorderColor="brand.400"/>
          <FormHelperText color="subtle"  >Escriba el proposito de la asignatura</FormHelperText>
        </FormControl>

        <Flex>
          <FormControl mt="2%" mr="5%">
            <FormLabel
              display='flex'
              /* ms='4px' */
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              /* mb='8px' */
               
              htmlFor="code-course" 
              /* fontWeight={'normal'} */>
              Codigo de Asignatura
            </FormLabel>
            <Input 
              id="first-name" 
              placeholder="Codigo de la asignatura"
              defaultValue="testing"
              focusBorderColor="brand.400"
              color={textColorSecondary} />
          </FormControl>
  
          <FormControl mt="2%" mr="5%">
            <FormLabel 
              display='flex'
              /* ms='4px' */
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              /* mb='8px' */
              htmlFor="seccion-course" 
              /* fontWeight={'normal'} */>
              Seccion
            </FormLabel>
            <Input 
              id="last-name" 
              placeholder="Seccion"
              defaultValue="testing"
              focusBorderColor="brand.400"
              color={textColorSecondary} />
          </FormControl>

          <FormControl mt="2%">
            <FormLabel 
              display='flex'
              /* ms='4px' */
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              /* mb='8px' */
              htmlFor="prelacion" 
              /* fontWeight={'normal'} */>
              Prelacion
            </FormLabel>
            <Input 
              id="last-name" 
              placeholder="Prelacion"
              defaultValue="testing"
              focusBorderColor="brand.400"
              color={textColorSecondary} />
          </FormControl>
        </Flex>

        {/* <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight={'normal'}>
            Email address
          </FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
        </FormControl> */}
  
        {/* <FormControl>
          <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>             */}

          
          <Flex>
            <FormControl mt="2%" mr="4%">
              <FormLabel
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                
                htmlFor="hours-total" 
                /* fontWeight={'normal'} */>
                Total horas
              </FormLabel>
              <Input 
                id="hours-total" 
                placeholder="Total de horas"
                defaultValue="2"
                focusBorderColor="brand.400"
                color={textColorSecondary} />
            </FormControl>
    
            <FormControl mt="2%" mr="1%">
              <FormLabel 
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                htmlFor="hours-user" 
                /* fontWeight={'normal'} */>
                HD
              </FormLabel>
              <Input 
                id="hours-total" 
                placeholder="Horas docentes"
                defaultValue="2"
                focusBorderColor="brand.400"
                color={textColorSecondary} />
            </FormControl>

            <FormControl mt="2%" mr="1%">
              <FormLabel 
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                htmlFor="hours-teory" 
                /* fontWeight={'normal'} */>
                T
              </FormLabel>
              <Input 
                id="last-name" 
                placeholder="Horas teoricas"
                defaultValue="2"
                focusBorderColor="brand.400"
                color={textColorSecondary} />
            </FormControl>

            <FormControl mt="2%" mr="1%">
              <FormLabel 
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                htmlFor="hours-user" 
                /* fontWeight={'normal'} */>
                L/T
              </FormLabel>
              <Input 
                id="hours-total" 
                placeholder="Laboratorio/Taller"
                defaultValue="2"
                focusBorderColor="brand.400"
                color={textColorSecondary} />
            </FormControl>

            <FormControl mt="2%" mr="4%">
              <FormLabel 
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                htmlFor="iscp" 
                /* fontWeight={'normal'} */>
                I/SC/P
              </FormLabel>
              <Input 
              id="iscp" 
              placeholder="Intervencion/Servicio Comunitario/Proyecto"
              defaultValue="2"
              focusBorderColor="brand.400"
              color={textColorSecondary} />
            </FormControl>

            <FormControl mt="2%" mr="1%">
              <FormLabel 
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                htmlFor="hiv-s" 
                /* fontWeight={'normal'} */>
                HIV S
              </FormLabel>
              <Input 
                id="hiv-s" 
                placeholder="HIV S"
                defaultValue="2"
                focusBorderColor="brand.400"
                color={textColorSecondary} />
            </FormControl>

            <FormControl mt="2%" mr="5%">
              <FormLabel 
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                htmlFor="hiv-a" 
                /* fontWeight={'normal'} */>
                HIV A
              </FormLabel>
              <Input 
                id="hiv-a" 
                placeholder="HIV-A"
                defaultValue="2"
                focusBorderColor="brand.400"
                color={textColorSecondary} />
            </FormControl>

            <FormControl mt="2%" >
              <FormLabel 
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                htmlFor="hde" 
                /* fontWeight={'normal'} */>
                HDE
              </FormLabel>
              <Input 
                id="hde" 
                placeholder="HDE"
                defaultValue="2"
                focusBorderColor="brand.400"
                color={textColorSecondary} />
            </FormControl>
          </Flex>

        <Box position='relative' padding='10'>
          <Divider />
          {/* <AbsoluteCenter bg='white' px='4'>
            Content
          </AbsoluteCenter> */}
        </Box>

        <FormControl>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              /* overflow='hidden' */
              /* variant='outline' */>
              <CardHeader>
                <Heading size='md'>Componente Pregrado</Heading>
              </CardHeader>

              <CardBody>
                  <RadioGroup onChange={setValue} value={value} /* defaultValue='2' */>
                    <Stack direction='row'>                                              
                      <Radio value='1' mr="12%">General</Radio>
                      <Radio value='2' mr="12%">Basica</Radio> {/* isChecked is only for testing */}
                      <Radio value='3' mr="12%"isChecked>Profesional</Radio>
                      <Radio value='4' >Investigacion/Pasantias</Radio>
                    </Stack>
                  </RadioGroup>   
              </CardBody>
            </Card>
        </FormControl>

        

        <Box position='relative' padding='10'>
          <Divider />
          {/* <AbsoluteCenter bg='white' px='4'>
            Content
          </AbsoluteCenter> */}
        </Box>

        <FormControl>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              /* overflow='hidden' */
              /* variant='outline' */>
              <CardHeader>
                <Heading size='md'>Componente Postgrado</Heading>
              </CardHeader>

              <CardBody>
                  <RadioGroup onChange={setValue} value={value} /* defaultValue='2' */>
                    <Stack direction='row'>
                      <Radio value='1' mr="25%">Obligatorio</Radio>
                      <Radio value='2' mr="25%" isChecked>Electiva</Radio> {/* isChecked is only for testing */}
                      <Radio value='3' >Investigacion</Radio>                      
                    </Stack>
                  </RadioGroup>   
              </CardBody>
            </Card>
        </FormControl>

        

          <Flex align='center' mb='20px' padding='10'>
            <HSeparator />
            <Text 
              /* color='gray.400' */
              color={textColor} 
              mx='14px'>
            </Text>
            <HSeparator />
          </Flex>

        <Flex mb='45px'>
          <FormControl mt="2%" mr="1%" w='50%'>
            <FormLabel
              display='flex'
              /* ms='4px' */
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              /* mb='8px' */
               
              htmlFor="hours-total" 
              /* fontWeight={'normal'} */>
              Periodo Academico
            </FormLabel>
            <Input 
              id="hours-total" 
              placeholder="2023-3"
              defaultValue="2023-3"
              focusBorderColor="brand.400"
              color={textColorSecondary} />
          </FormControl> 
          
          <FormControl mt="2%" mr="1%" w='50%'>
            <FormLabel 
              display='flex'
              /* ms='4px' */
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              /* mb='8px' */
              htmlFor="iscp" 
              /* fontWeight={'normal'} */>
              Faculdad/Carrera
            </FormLabel>
            <Input 
              id="iscp" 
              placeholder="---"
              defaultValue="FACAD/Administracion"
              focusBorderColor="brand.400"
              color={textColorSecondary} />
          </FormControl>

          <FormControl mt="2%" mr="1%" w='50%'>
            <FormLabel 
              display='flex'
              /* ms='4px' */
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              /* mb='8px' */
              htmlFor="hiv-s" 
              /* fontWeight={'normal'} */>
              Programa/Postgrado
            </FormLabel>
            <Input 
              id="hiv-s" 
              placeholder="---"
              defaultValue="Post"
              focusBorderColor="brand.400"
              color={textColorSecondary} />
          </FormControl>
          
          <FormControl>
            <Card
              /* direction={{ base: 'column', sm: 'row' }} */
              /* overflow='hidden' */
              /* variant='outline' */>
              <CardHeader>
                <Heading size='md'>Modalidad</Heading>
              </CardHeader>

              <CardBody>
                  <RadioGroup onChange={setValue} value={value} /* defaultValue='2' */>
                    <Stack direction='row'>
                      <Radio value='1'>Presencial</Radio>
                      <Radio value='2' isChecked>Mixta</Radio> {/* isChecked is only for testing */}
                      <Radio value='3'>Virtual</Radio>
                    </Stack>
                  </RadioGroup>   
              </CardBody>
            </Card>
          </FormControl>
        </Flex>
        {console.log("valuesPre: ", valuePre )}
        {console.log("valuesPos: ", valuePos )}
        {console.log("valuesMod: ", valueMod )}
        {console.log("values: ", value )}


      </>
/* } */

    )
  }