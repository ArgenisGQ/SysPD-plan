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

    


    {console.log("UNIDADES: ",unidades)
     /* console.log("corte 1: ", valueCor1) */
     /* console.log("corte 2: ", valueCor2) */
     /* console.log("corte 3: ", valueCor3) */
     /* console.log("corte 4: ", valueCor4)  */
    }

    if (unidades === "3") {
      return (
        <>
          <Text>UNIDADES: 3</Text>
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
              </Select>
            </FormControl>        
          </Flex>         
        </>
        </>
      )              
    } else if (unidades === "4") {
      return (
        <>
          <Text>UNIDADES: 4</Text>
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
              <Select placeholder='Seleccione UNIDAD' disabled
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
              <Select placeholder='Seleccione UNIDAD' disabled
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
              <Select placeholder='Seleccione UNIDAD' disabled
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
              <Select placeholder='Seleccione UNIDAD' disabled
                    value={ valueC4 } onChange={ (event) => setValueC4( event.target.value ) }>
                <option value='unit01'>Unidad I</option>
                <option value='unit02'>Unidad II</option>
                <option value='unit03'>Unidad III</option>
                <option value='unit04'>Unidad IV</option>              
              </Select>
            </FormControl>        
          </Flex>

           
        </>
      )
    } else if (unidades >= 5) {
      return (
      <>        
        <Text>UNIDADES: 5 o mas</Text>
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
                <option value='unit04'>Unidad V + +</option>              
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
                <option value='unit04'>Unidad V + +</option>               
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
                <option value='unit04'>Unidad V + +</option>               
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
                <option value='unit04'>Unidad V + +</option>               
              </Select>
            </FormControl>        
          </Flex>
          
        </>
      </>
      ) 
    }
   

}