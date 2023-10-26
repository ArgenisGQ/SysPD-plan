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
  Text  
} from '@chakra-ui/react'

import { HSeparator } from "../../../../components/separator/Separator";

import InputField from '../../../../components/fields/InputField'

import { useToast } from '@chakra-ui/react'

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
    return (
/* export default function Form01(props) { */
      <>    
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          I. Datos de la unidad curricular
        </Heading>
        <FormControl mt="2%">
          <FormLabel 
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
            Nombre de la asignatura
          </FormLabel>
          <Input id="course" /* type="email" */ />
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
          <Textarea rows={3} resize="none" />
          <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText>
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
              placeholder="Codigo de la asignatura" />
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
            <Input id="last-name" placeholder="Seccion" />
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
            <Input id="last-name" placeholder="Prelacion" />
          </FormControl>
        </Flex>

        <Flex mb='45px'>
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
              placeholder="Total de horas" />
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
            <Input id="hours-total" placeholder="Horas docentes" />
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
            <Input id="last-name" placeholder="Horas teoricas" />
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
            <Input id="hours-total" placeholder="Laboratorio/Taller" />
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
            <Input id="iscp" placeholder="Intervencion/Servicio Comunitario/Proyecto" />
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
            <Input id="hiv-s" placeholder="HIV S" />
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
            <Input id="hiv-a" placeholder="HIV-A" />
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
            <Input id="hde" placeholder="HDE" />
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

          <Flex align='center' mb='20px'>
            <HSeparator />
            <Text 
              /* color='gray.400' */
              color={textColor} 
              mx='14px'>
                
            </Text>
            <HSeparator />
          </Flex>



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
              placeholder="Total de horas" />
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
            <Input id="hours-total" placeholder="Horas docentes" />
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
            <Input id="last-name" placeholder="Horas teoricas" />
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
            <Input id="hours-total" placeholder="Laboratorio/Taller" />
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
            <Input id="iscp" placeholder="Intervencion/Servicio Comunitario/Proyecto" />
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
            <Input id="hiv-s" placeholder="HIV S" />
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
            <Input id="hiv-a" placeholder="HIV-A" />
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
            <Input id="hde" placeholder="HDE" />
          </FormControl>
        </Flex>





      </>
/* } */

    )
  }