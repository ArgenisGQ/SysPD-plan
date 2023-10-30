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
  Radio, RadioGroup     
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
      const [value, setValue] = useState('1')
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

        <Box position='relative' padding='10'>
          <Divider />
          {/* <AbsoluteCenter bg='white' px='4'>
            Content
          </AbsoluteCenter> */}
        </Box>

        <Card
          direction={{ base: 'column', sm: 'row' }}
          /* overflow='hidden' */
          /* variant='outline' */>
          <CardHeader>
            <Heading size='md'>Componente Pregrado</Heading>
          </CardHeader>

          <CardBody>
          <Flex>
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
                      General
                    </FormLabel>
                    <Input 
                      id="hours-total" 
                      placeholder="General"
                      /* w='50%'  */
                      /* size="sm" */ />
                  </FormControl>
          
                  <FormControl mt="2%" mr="1%" w='50%'>
                    <FormLabel 
                      display='flex'
                      /* ms='4px' */
                      fontSize='sm'
                      fontWeight='500'
                      color={textColor}
                      /* mb='8px' */
                      htmlFor="hours-user" 
                      /* fontWeight={'normal'} */>
                      Basica
                    </FormLabel>
                    <Input 
                    id="hours-total" 
                    placeholder="Basica"
                    /* w='50%' */ />
                  </FormControl>

                  <FormControl mt="2%" mr="1%" w='50%'>
                    <FormLabel 
                      display='flex'
                      /* ms='4px' */
                      fontSize='sm'
                      fontWeight='500'
                      color={textColor}
                      /* mb='8px' */
                      htmlFor="hours-teory" 
                      /* fontWeight={'normal'} */>
                      Profesional
                    </FormLabel>
                    <Input 
                    id="last-name" 
                    placeholder="Profesional"
                    /* w='50%' */ />
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
                      Investigacion/Pasantia
                    </FormLabel>
                    <Input id="hours-total" placeholder="Investigacion/Pasantia" />
                  </FormControl>
                </Flex>

            {/* <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack> */}
          </CardBody>
        </Card>

        <Box position='relative' padding='10'>
          <Divider />
          {/* <AbsoluteCenter bg='white' px='4'>
            Content
          </AbsoluteCenter> */}
        </Box>

        <Card
          direction={{ base: 'column', sm: 'row' }}
          /* overflow='hidden' */
          /* variant='outline' */>
          <CardHeader>
            <Heading size='md'>Componente Postgrado</Heading>
          </CardHeader>

          <CardBody>
          <Flex>
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
                      Obligatorio
                    </FormLabel>
                    <Input 
                      id="hours-total" 
                      placeholder="---"
                      /* w='50%'  */
                      /* size="sm" */ />
                  </FormControl>
          
                  <FormControl mt="2%" mr="1%" w='50%'>
                    <FormLabel 
                      display='flex'
                      /* ms='4px' */
                      fontSize='sm'
                      fontWeight='500'
                      color={textColor}
                      /* mb='8px' */
                      htmlFor="hours-user" 
                      /* fontWeight={'normal'} */>
                      Mixta
                    </FormLabel>
                    <Input 
                    id="hours-total" 
                    placeholder="--"
                    /* w='50%' */ />
                  </FormControl>

                  <FormControl mt="2%" mr="1%" w='50%'>
                    <FormLabel 
                      display='flex'
                      /* ms='4px' */
                      fontSize='sm'
                      fontWeight='500'
                      color={textColor}
                      /* mb='8px' */
                      htmlFor="hours-teory" 
                      /* fontWeight={'normal'} */>
                      Investigacion
                    </FormLabel>
                    <Input 
                    id="last-name" 
                    placeholder="---"
                    /* w='50%' */ />
                  </FormControl>                  
                </Flex>

            {/* <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack> */}
          </CardBody>
        </Card>

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
              placeholder="2023-3" />
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
            <Input id="iscp" placeholder="---" />
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
            <Input id="hiv-s" placeholder="---" />
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

                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction='row'>
                    <Radio value='1'>Presencial</Radio>
                    <Radio value='2'>Mixta</Radio>
                    <Radio value='3'>Virtual</Radio>
                  </Stack>
                </RadioGroup>   
            </CardBody>
          </Card>
          </FormControl>
        </Flex>



      </>
/* } */

    )
  }