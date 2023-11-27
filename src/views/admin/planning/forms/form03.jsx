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
    const [value, setValue] = useState(null)
    const [valueC1, setValueC1] = useState("unit01")
    const [valueC2, setValueC2] = useState("unit02")
    const [valueC3, setValueC3] = useState("unit03")
    const [valueC4, setValueC4] = useState("unit03")
    const [valueSel, setValueSel] = useState("4")
    const unitsxx = (unidades) => {
      if (!unidades) {
        return <>
          <Center mt="5%">
            <p>Seleccione la UNIDAD</p>
          </Center>            
        </>
        
      }
      return <Unit unitsx={unidad} others="50"/>};

    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
          Ajustes de puntos de las unidades 
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
            /* type="email" */
            defaultValue="Post"
            focusBorderColor="brand.400"
            color={textColorSecondary} />
          <FormHelperText color="subtle">Nombre asignado..</FormHelperText>
          {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
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
              defaultValue="Post"
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
              defaultValue="Post"
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
              htmlFor="units" 
              /* fontWeight={'normal'} */>
              Unidades de Asignatura
            </FormLabel>  
            <Input 
              id="last-name" 
              placeholder="Unidades"
              defaultValue={valueSel}
              focusBorderColor="brand.400"
              color={textColorSecondary} />
              
              <Heading as='h6' size='xs' mt="10%">
              Unidades de prueba de referencia
              </Heading>
              <Select placeholder='Cantidad de Unidades'
                    value={ valueSel } onChange={ (event) => setValueSel( event.target.value ) }>
                <option value='3'>3</option>
                <option value='4'>4</option>                            
              </Select>

          </FormControl>
        </Flex>

        <Flex mt="5%">
            <FormControl mt="2%" mr="4%">
              <FormLabel
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                
                htmlFor="unit-1" 
                /* fontWeight={'normal'} */>
                Corte 1
              </FormLabel>
              {/* <Input 
                id="unit-1" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <Select placeholder='Seleccione UNIDAD'
                    value={ valueC1 } onChange={ (event) => setValueC1( event.target.value ) }>
                <option value='unit01'>Unidad I</option>
                <option value='unit02'>Unidad II</option>
                <option value='unit03'>Unidad III</option>              
              </Select>
            </FormControl>
    
            
            <FormControl mt="2%" mr="4%">
              <FormLabel
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                
                htmlFor="unit-2" 
                /* fontWeight={'normal'} */>
                Corte 2
              </FormLabel>
              {/* <Input 
                id="unit-2" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <Select placeholder='Seleccione UNIDAD'
                    value={ valueC2 } onChange={ (event) => setValueC2( event.target.value ) }>
                <option value='unit01'>Unidad I</option>
                <option value='unit02'>Unidad II</option>
                <option value='unit03'>Unidad III</option>              
              </Select>
            </FormControl>

            <FormControl mt="2%" mr="4%">
              <FormLabel
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                
                htmlFor="unit-3" 
                /* fontWeight={'normal'} */>
                Corte 3
              </FormLabel>
              {/* <Input 
                id="unit-3" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <Select placeholder='Seleccione UNIDAD'
                    value={ valueC3 } onChange={ (event) => setValueC3( event.target.value ) }>
                <option value='unit01'>Unidad I</option>
                <option value='unit02'>Unidad II</option>
                <option value='unit03'>Unidad III</option>              
              </Select>
            </FormControl>

            <FormControl mt="2%" mr="4%">
              <FormLabel
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                
                htmlFor="unit-4" 
                /* fontWeight={'normal'} */>
                Corte 4
              </FormLabel>
              {/* <Input 
                id="unit-4" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <Select placeholder='Seleccione UNIDAD'
                    value={ valueC4 } onChange={ (event) => setValueC4( event.target.value ) }>
                <option value='unit01'>Unidad I</option>
                <option value='unit02'>Unidad II</option>
                <option value='unit03'>Unidad III</option>              
              </Select>
            </FormControl>        
          </Flex>

        <Flex mt="5%">
            <FormControl mt="2%" mr="4%">
              <FormLabel
                display='flex'
                /* ms='4px' */
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                /* mb='8px' */
                
                htmlFor="unit-1" 
                /* fontWeight={'normal'} */>
                Unidad 1
              </FormLabel>
              <Input 
                id="unit-1" 
                placeholder="%"
                defaultValue="Post"
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
                
                htmlFor="unit-2" 
                /* fontWeight={'normal'} */>
                Unidad 2
              </FormLabel>
              <Input 
                id="unit-2" 
                placeholder="%"
                defaultValue="Post"
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
                
                htmlFor="unit-3" 
                /* fontWeight={'normal'} */>
                Unidad 3
              </FormLabel>
              <Input 
                id="unit-3" 
                placeholder="%"
                defaultValue="Post"
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
                
                htmlFor="unit-4" 
                /* fontWeight={'normal'} */>
                Unidad 4
              </FormLabel>
              <Input 
                id="unit-4" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} />
            </FormControl>        
          </Flex>

          <Card
            direction={{ base: 'column', sm: 'row' }}
            mt="5%"
            w='50%'
            /* overflow='hidden' */
            /* variant='outline' */>
            <CardHeader>
              <Heading size='md'>Total de puntos de la Asignatura</Heading>
            </CardHeader>

            <CardBody>
            <Flex>
                  <FormControl mt="2%" mr="1%" /* w='50%' */>
                      <FormLabel
                        display='flex'
                        /* ms='4px' */
                        fontSize='sm'
                        fontWeight='500'
                        color={textColor}
                        /* mb='8px' */
                        
                        htmlFor="hours-total" 
                        /* fontWeight={'normal'} */>
                        %
                      </FormLabel>
                      <Input 
                        id="hours-total" 
                        placeholder="---"
                        /* w='50%'  */
                        /* size="sm" */
                        defaultValue="Post"
                        focusBorderColor="brand.400"
                        color={textColorSecondary} />
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