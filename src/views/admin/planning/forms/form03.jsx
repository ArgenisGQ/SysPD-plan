import { useState, useEffect } from 'react'
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
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,    
} from '@chakra-ui/react'

import InputField from '../../../../components/fields/InputField'

import { useToast } from '@chakra-ui/react'

import Corts  from './corts'



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
    /* const [valueC1, setValueC1] = useState(25)
    const [valueC2, setValueC2] = useState(25)
    const [valueC3, setValueC3] = useState(25)
    const [valueC4, setValueC4] = useState(25) */
    const [valueCor1, setValueCor1] = useState(25)
    const [valueCor2, setValueCor2] = useState(25)
    const [valueCor3, setValueCor3] = useState(25)
    const [valueCor4, setValueCor4] = useState(25)

    const courtC1 = (valueString) => {
      setValueCor1(parseX(valueString));
      /* setValueCor11(parseX(valueString)); */
      /* courtC11(valueCor1); */
      /* console.log("corte 1: ", parseInt(valueCor1)) */      
    }
    const courtC2 = (valueString) => {
      setValueCor2(parseX(valueString));
      /* setValueCor22(parseX(valueString)); */
      /* courtC22(valueCor2); */
      /* console.log("corte 1: ", parseInt(valueCor1)) */      
    }
    const courtC3 = (valueString) => {
      setValueCor3(parseX(valueString));
      /* setValueCor33(parseX(valueString)); */
      /* courtC33(valueCor3); */
      /* console.log("corte 1: ", parseInt(valueCor1)) */      
    }
    const courtC4 = (valueString) => {
      setValueCor4(parseX(valueString));
      /* setValueCor44(parseX(valueString)); */
      /* courtC44(valueCor4); */
      /* console.log("corte 1: ", parseInt(valueCor1)) */      
    }

    const formatX = (val) => `% ` + val
    const parseX = (val) => val.replace(/^\$/, '')
    
    const [valueSel, setValueSel] = useState("4")
    const [valueTotal, setValueTotal ] = useState("15")

    const [totalOver, setTotalOver] = useState("");
    const [totalLower, setTotalLower] = useState("");
    const [message, setMessage] = useState("");

    const Total = (C1, C2, C3, C4) => {
      const TotalT = parseInt(C1)+parseInt(C2)+parseInt(C3)+parseInt(C4)
      setValueTotal(TotalT)
      console.log("TT: ",TotalT)
      if (TotalT > 100) {
        setMessage("Supera el 100% de puntuacion");
        console.log("C1: ",C1,"C2: ",C2,"C3: ",C3,"C4: ",C4)
        if (C1 == 30 ) {
          setValueCor1(25)          
        } else if (C2 == 30) {
          setValueCor2(25)
        } else if (C3 == 30) {
          setValueCor3(25)
        } else if (C4 == 30) {
          setValueCor4(25)
        }
        onOpen()
        console.log("C1: ",C1,"C2: ",C2,"C3: ",C3,"C4: ",C4)
        const TotalT = parseInt(C1)+parseInt(C2)+parseInt(C3)+parseInt(C4)
        setValueTotal(TotalT)
      }
      if (TotalT < 100) {
        const FaltaP = 100 - parseInt(TotalT) 
        setMessage("Falta colocar: "+ FaltaP + " %")
        onOpen()
      }
      /* if (TotalT != 100) {
        onOpen()
      } */
            
    }
    /* {Total(valueCor1,valueCor2,valueCor3,valueCor4)} */
    useEffect(()=>{
      Total(valueCor1,valueCor2,valueCor3,valueCor4)      
    },[valueCor1,valueCor2,valueCor3,valueCor4])

    const cortes = (unidades) => {
      if (!unidades) {
        return <>
         <p>NO CONTIENE UNIDADES</p>         
        </>        
      } else {
        return <>
         <p>SI CONTIENE UNIDADES</p>
         {/* {console.log("unidades: ", unidades)} */}
         <Corts 
            unidades = {unidades}
             />
          {/* {setValueTotal(parseInt(valueCor1)+parseInt(valueCor2)+parseInt(valueCor3)+parseInt(valueCor4))} */}
          {console.log("C1: ", valueCor1, "C2: ", valueCor2, "C3: ", valueCor3, "C4: ", valueCor4)} 
        </>
      }
      /* return <Unit unitsx={unidades} others="50"/>}; */      
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
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
                <option value='5'>5 o más! </option>                            
              </Select>

          </FormControl>
        </Flex>

        {cortes(valueSel)}

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
                Valor de Corte 1
              </FormLabel>
              {/* <Text mb='8px'>Value: {valueCor1}</Text> */}
              {/* <Input 
                id="unit-1" 
                placeholder="%"
                defaultValue="Post"
                onChange={ (event) => setValueU01( event.target.value ) }
                value={ valueU01 } 
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <NumberInput 
                /* defaultValue={25}  */
                precision={0} 
                step={5}
                min={10} 
                max={30}
                /* onChange={(valueString) => setValueCor1(parseX(valueString))} */
                onChange={courtC1}                
                value={formatX(valueCor1)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
                /* keepWithinRange={false} */
                /* clampValueOnBlur={false} */>
                {/* {console.log("corte 1-2: ", parseInt(valueCor1))} */}
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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
                Valor de Corte 2
              </FormLabel>
              {/* <Input 
                id="unit-2" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <NumberInput 
                /* defaultValue={25}  */
                precision={0} 
                step={5}
                min={10} 
                max={30}
                onChange={courtC2}
                /* onChange={(valueString) => setValueCor2(parseX(valueString))}   */              
                value={formatX(valueCor2)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
                /* keepWithinRange={false} */
                /* clampValueOnBlur={false} */>
                {/* {console.log("corte 2-2: ", parseInt(valueCor2))} */}
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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
                Valor de Corte 3
              </FormLabel>
              {/* <Input 
                id="unit-3" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <NumberInput 
                /* defaultValue={25}  */
                precision={0} 
                step={5}
                min={10} 
                max={30}
                onChange={courtC3}
                /* onChange={(valueString) => setValueCor3(parseX(valueString))}  */               
                value={formatX(valueCor3)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
                /* keepWithinRange={false} */
                /* clampValueOnBlur={false} */>
                {/* {console.log("corte 3-2: ", parseInt(valueCor3))} */}
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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
                Valor de Corte 4
              </FormLabel>
              {/* <Input 
                id="unit-4" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <NumberInput 
                /* defaultValue={25}  */
                precision={0} 
                step={5}
                min={10} 
                max={30}
                onChange={courtC4}
                /* onChange={(valueString) => setValueCor4(parseX(valueString))} */                
                value={formatX(valueCor4)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
                /* keepWithinRange={false} */
                /* clampValueOnBlur={false} */>
                {/* {console.log("corte 4-2: ", parseInt(valueCor4))} */}
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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
              {/* <p>C1: {valueCor1},C2: {valueCor2},C3: {valueCor3},C4: {valueCor4},</p> */}
            </CardHeader>
            {/* {setValueTotal(valueC1 + valueC2 + valueC3 + valueC4)} */}
            
            {/* {Total(valueCor1,valueCor2,valueCor3,valueCor4)} */}
            {console.log("TOTAL: ", valueTotal)}
            {/* {console.log("C1: ", valueCor1, "C2: ", valueCor2, "C3: ", valueCor3, "C4: ", valueCor4)} */} 
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
                        
                        htmlFor="total" 
                        /* fontWeight={'normal'} */>
                        %
                      </FormLabel>
                      <Input
                        id="total" 
                        /* placeholder="---" */
                        disabled
                        value={valueTotal}
                        /* w='50%'  */
                        /* size="sm" */
                        /* defaultValue="Post" */
                                                  
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

          {/* <Button onClick={onOpen}>Open Modal</Button> */}

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* <Lorem count={2} /> */}
                {/* <p>PRUEBAS</p> */}
                <p>{message}</p>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Cerrar
                </Button>
                {/* <Button variant='ghost'>Secondary Action</Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>




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