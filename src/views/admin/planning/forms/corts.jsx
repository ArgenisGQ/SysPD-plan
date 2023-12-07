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
    const { unidades, courtC11, courtC22, courtC33, courtC44,
            setValueCor1, setValueCor2, setValueCor3, setValueCor4 } = props;
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

    const [valueCor11, setValueCor11] = useState("25")
    const [valueCor22, setValueCor22] = useState("25")
    const [valueCor33, setValueCor33] = useState("25")
    const [valueCor44, setValueCor44] = useState("25")

    const courtC1 = (valueString) => {
      setValueCor1(parseX(valueString));
      setValueCor11(parseX(valueString));
      /* courtC11(valueCor1); */
      /* console.log("corte 1: ", parseInt(valueCor1)) */      
    }
    const courtC2 = (valueString) => {
      setValueCor2(parseX(valueString));
      setValueCor22(parseX(valueString));
      /* courtC22(valueCor2); */
      /* console.log("corte 1: ", parseInt(valueCor1)) */      
    }
    const courtC3 = (valueString) => {
      setValueCor3(parseX(valueString));
      setValueCor33(parseX(valueString));
      /* courtC33(valueCor3); */
      /* console.log("corte 1: ", parseInt(valueCor1)) */      
    }
    const courtC4 = (valueString) => {
      setValueCor4(parseX(valueString));
      setValueCor44(parseX(valueString));
      /* courtC44(valueCor4); */
      /* console.log("corte 1: ", parseInt(valueCor1)) */      
    }
     
    const formatX = (val) => `% ` + val
    const parseX = (val) => val.replace(/^\$/, '')
    

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
                step={1}
                min={10} 
                max={30}
                onChange={(valueString) => setValueCor1(parseX(valueString))}
                /* onChange={courtC1()}    */               
                value={formatX(valueCor1)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
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
              {/* <Input 
                id="unit-2" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <NumberInput 
                /* defaultValue={25}  */
                precision={0} 
                step={1}
                min={10} 
                max={30}
                onChange={(valueString) => setValueCor2(parseX(valueString))}                
                value={formatX(valueCor2)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
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
                step={1}
                min={10} 
                max={30}
                onChange={(valueString) => setValueCor3(parseX(valueString))}                
                value={formatX(valueCor3)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
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
                step={1}
                min={10} 
                max={30}
                onChange={(valueString) => setValueCor4(parseX(valueString))}                
                value={formatX(valueCor4)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
                /* keepWithinRange={false} */
                /* clampValueOnBlur={false} */>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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
                step={1}
                min={10} 
                max={30}
                /* onChange={(valueString) => setValueCor1(parseX(valueString))} */
                onChange={courtC1}                
                value={formatX(valueCor11)}
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
                step={1}
                min={10} 
                max={30}
                onChange={courtC2}
                /* onChange={(valueString) => setValueCor2(parseX(valueString))}   */              
                value={formatX(valueCor22)}
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
                step={1}
                min={10} 
                max={30}
                onChange={courtC3}
                /* onChange={(valueString) => setValueCor3(parseX(valueString))}  */               
                value={formatX(valueCor33)}
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
                step={1}
                min={10} 
                max={30}
                onChange={courtC4}
                /* onChange={(valueString) => setValueCor4(parseX(valueString))} */                
                value={formatX(valueCor44)}
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
                step={1}
                min={10} 
                max={30}
                onChange={(valueString) => setValueCor1(parseX(valueString))}                
                value={formatX(valueCor1)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
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
              {/* <Input 
                id="unit-2" 
                placeholder="%"
                defaultValue="Post"
                focusBorderColor="brand.400"
                color={textColorSecondary} /> */}
              <NumberInput 
                /* defaultValue={25}  */
                precision={0} 
                step={1}
                min={10} 
                max={30}
                onChange={(valueString) => setValueCor2(parseX(valueString))}                
                value={formatX(valueCor2)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
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
                step={1}
                min={10} 
                max={30}
                onChange={(valueString) => setValueCor3(parseX(valueString))}                
                value={formatX(valueCor3)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
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
                step={1}
                min={10} 
                max={30}
                onChange={(valueString) => setValueCor4(parseX(valueString))}                
                value={formatX(valueCor4)}
                focusBorderColor="brand.400"
                color={textColorSecondary} 
                /* keepWithinRange={false} */
                /* clampValueOnBlur={false} */>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>        
          </Flex> 
        </>
      </>
      ) 
    }
   

}