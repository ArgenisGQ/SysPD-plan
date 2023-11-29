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
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper, 
} from '@chakra-ui/react'

export default function Corts(props) {
    const { unidades } = props;
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
    const [valueC4, setValueC4] = useState("unit04")

    const [valueCor1, setValueCor1] = useState("")

    const formatX = (val) => `$` + val
    const parseX = (val) => val.replace(/^\$/, '')
    const [valueX, setValueX] = useState('1.53')

    {console.log("UNIDADES: ",unidades)}

    if (unidades === "3") {
      return (
        <>
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
            </Flex> 
        </>
      )              
    } else if (unidades === "4") {
      return (
        <>
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
                Unidad de Corte 1
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
                <option value='unit04'>Unidad IV</option>              
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
                Unidad de Corte 2
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
                <option value='unit04'>Unidad IV</option>              
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
                Unidad de Corte 3
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
                <option value='unit04'>Unidad IV</option>              
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
                Unidad de Corte 4
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
                <option value='unit04'>Unidad IV</option>              
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
                Valor de Corte 1
              </FormLabel>
              <Text mb='8px'>Value: {valueCor1}</Text>
              {/* <Input 
                id="unit-1" 
                placeholder="%"
                defaultValue="Post"
                onChange={ (event) => setValueU01( event.target.value ) }
                value={ valueU01 } 
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <NumberInput 
                defaultValue={25} 
                precision={0} 
                step={1}
                min={10} 
                max={30}
                onChange={(valueString) => setValueCor1(parseX(valueString))}
                /* onChange={ (event) => setValueCor1( event.target.value ) } */
                value={formatX(valueCor1)}
                /* keepWithinRange={false} */
                /* clampValueOnBlur={false} */>
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
                Valor de Corte 3
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
                Valor de Corte 4
              </FormLabel>
              <Input 
                id="unit-4" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} />
            </FormControl>        
          </Flex> 
        </>
      )
    } else if (unidades >= 5) {
      return (
      <>
        <p>UNIDADES: 5 o mas</p>
      </>
      ) 
    }
   

}