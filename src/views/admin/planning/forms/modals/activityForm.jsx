import {useState, useRef} from 'react'

import {  
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,  
    FormLabel,  
    Textarea,  
    useColorModeValue,
    Card,
    CardHeader,
    CardBody,
    Divider,  
    Stack,  
    Radio, RadioGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,  
    Input,
    SimpleGrid,
    Center,
    Select,
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,  
  } from '@chakra-ui/react'

const ActivityForm = (props) => {
    const { unit, activity } = props;
    /* const { isOpen, onOpen, onClose } = useDisclosure() */
    /* const { isOpenACtivities, onOpen, onClose } = useDisclosure() */

    const modalCreate = useDisclosure();
    const modalEdit = useDisclosure();
    const modalDelete = useDisclosure();

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const initialRefActivities = useRef(null)
    const finalRefActivities = useRef(null)

    const initialRefDelete = useRef(null)
    const finalRefDelete = useRef(null)

    /* const sizes = 'full' */
    const sizes = '6xl'
    const scrollBehavior = 'inside'

    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    
    const [value, setValue] = useState(null);
    const [valueEdit, setValueEdit] = useState(null);
    const [valueWeek, setValueWeek] = useState(null);
    
    const format = (val) => `% ` + val
    const parse = (val) => val.replace(/^\$/, '')
    const [valuePoints, setValuePoints] = useState(0)

  return (<>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(380px, 1fr))' mt="5%" >
              <FormControl  mt="2%" id="proposito" mr="2%">
                <FormLabel
                htmlFor="course"
                fontSize='sm' 
                fontWeight={'normal'}
                color={textColor}>
                  Competencia especifica{/*  <h1>U: {unitsx}</h1> */}
                </FormLabel>
                {/* <Editable defaultValue='Take some chakra'
                  rows={4} resize="none"
                  borderWidth='1px' borderRadius='lg'                 
                  focusBorderColor="brand.400"
                  color={textColorSecondary}
                  >
                  <EditablePreview />
                  <EditableTextarea />
                </Editable> */}
                <Textarea rows={4} resize="none"
                  defaultValue="Post"
                  focusBorderColor="brand.400"
                  color={textColorSecondary}
                  ref={initialRef}  />
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
                <Textarea rows={4} resize="none"
                  defaultValue="Post"
                  focusBorderColor="brand.400"
                  color={textColorSecondary} />
                {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
              </FormControl>          
            </SimpleGrid>

            <Box position='relative' padding='10'>
              <Divider />
              {/* <AbsoluteCenter bg='white' px='4'>
                Content
              </AbsoluteCenter> */}
            </Box>

            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(380px, 1fr))' /* mt="5%" */>
              <FormControl  mt="2%" id="proposito" mr="2%">
                <FormLabel
                htmlFor="course"
                fontSize='sm' 
                fontWeight={'normal'}
                color={textColor}>
                  Evidencia de Evaluacion
                </FormLabel>
                <Textarea rows={4} resize="none"
                  defaultValue="Post"
                  focusBorderColor="brand.400"
                  color={textColorSecondary} />
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
                <Textarea rows={4} resize="none"
                  defaultValue="Post"
                  focusBorderColor="brand.400"
                  color={textColorSecondary} />
                {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
              </FormControl>          
            </SimpleGrid>

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
                        <Radio value='2' isChecked>Formativa</Radio> {/* isChecked is only for testing */}
                        <Radio value='3'>Sumativa</Radio>
                      </Stack>
                    </RadioGroup>   
                </CardBody>
              </Card>
            </FormControl>         

            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(380px, 1fr))'>
              <FormControl  mt="2%" id="proposito" mr="2%">
                <FormLabel
                htmlFor="course"
                fontSize='sm' 
                fontWeight={'normal'}
                color={textColor}>
                  Lapso/Entrega
                </FormLabel>
                {/* <Textarea rows={4} resize="none"
                  defaultValue="Post"
                  focusBorderColor="brand.400"
                  color={textColorSecondary} /> */}

                <RadioGroup defaultValue='1' mt="2%" ml="4%"
                /* onChange={(event) => setValuePre( event)} */
                value={valueWeek} onChange={ (event) => setValueWeek(event) }>
                  <Stack>
                    <Radio value='1' /* isDisabled */>Semana 1</Radio>                    
                    <Radio value='2'>Semana 2</Radio>
                    <Radio value='3'>Semana 3</Radio>
                  </Stack>
                </RadioGroup>
                {console.log({valueWeek})}
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
                {/* <Textarea rows={4} resize="none"
                  defaultValue="Post"
                  focusBorderColor="brand.400"
                  color={textColorSecondary} /> */}
                <FormControl mt="2%" mr="4%">
                  {/* <FormLabel
                    display='flex'
                    
                    fontSize='sm'
                    fontWeight='500'
                    color={textColor}
                    
                    
                    htmlFor="unit-4" 
                    >
                    Porcentaje
                  </FormLabel> */}
                  {/* <Input 
                    id="unit-4" 
                    placeholder="%"
                    defaultValue="Post"
                    focusBorderColor="brand.400"
                    color={textColorSecondary} /> */}
                      
                </FormControl>
                      <NumberInput 
                        /* defaultValue={25}  */
                        size='lg' 
                        precision={0} 
                        step={1}
                        min={0} 
                        max={30}
                        onChange={(valueString) => setValuePoints(parse(valueString))}
                        value={format(valuePoints)}
                        focusBorderColor="brand.400"
                        color={textColorSecondary}
                        /* color='gray.300' */
                        /* keepWithinRange={false} */
                        /* clampValueOnBlur={false} */>
                        {/* {console.log("corte 4-2: ", parseInt(valueCor4))} */}
                        {console.log({valuePoints})}
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
              </FormControl>          
            </SimpleGrid>
  </>)
}

export default ActivityForm