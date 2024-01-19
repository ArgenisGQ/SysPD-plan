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
    Select  
  } from '@chakra-ui/react'

const UnitFiels = (props) => {
    const { unitsx, others } = props;
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
  return (<>
    <Button onClick={modalCreate.onOpen} height='48px' width='450px'>Crear</Button>
    <Button onClick={modalEdit.onOpen} height='48px' width='450px'>Editar</Button>
    <Button onClick={modalDelete.onOpen} height='48px' width='450px'>Borrar</Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={modalCreate.isOpen}
        onClose={modalCreate.onClose}
        size={sizes}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Completar los datos</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <FormControl>
              <FormLabel>Estrategia de Evaluacion</FormLabel>
              <Input ref={initialRef} placeholder='--' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Instrumento de Evaluacion</FormLabel>
              <Input placeholder='--' />
            </FormControl> */}
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(380px, 1fr))' mt="5%" >
              <FormControl  mt="2%" id="proposito" mr="2%">
                <FormLabel
                htmlFor="course"
                fontSize='sm' 
                fontWeight={'normal'}
                color={textColor}>
                  Competencia especifica{/*  <h1>U: {unitsx}</h1> */}
                </FormLabel>
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
                  Ponderacion/Calificacion
                </FormLabel>
                <Textarea rows={4} resize="none"
                  defaultValue="Post"
                  focusBorderColor="brand.400"
                  color={textColorSecondary} />
                {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
              </FormControl>          
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Guardar
            </Button>
            <Button onClick={modalCreate.onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* ------------------------------------------------------------------------------- */}

      <Modal
        initialFocusRef={initialRefActivities}
        finalFocusRef={finalRefActivities}
        isOpen={modalEdit.isOpen}
        onClose={modalEdit.onClose}
        size="sm"
        scrollBehavior={scrollBehavior}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Seleccionar actividad a editar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              <Center>
                <h1>lista de actividades para editar</h1>
              </Center>               
              <Center mt="5%">               
                <Stack spacing={3} mt="2%"  w='50%' mr="5%">
                  {/* <Select variant='outline' placeholder='Outline' /> */}
                  {/* <Select variant='filled' placeholder='Filled' /> */}
                  {/* <Select variant='flushed' placeholder='Flushed' /> */}
                  {/* <Select variant='unstyled' placeholder='Unstyled' /> */}

                  <Select variant='flushed' placeholder='Seleccione la Unidad'
                          value={ valueEdit } onChange={ (event) => setValueEdit( event.target.value ) }>
                    <option value='1'>Actividad 1</option>
                    <option value='2'>Actividad 2</option>
                    <option value='3'>Actividad 3</option>                    
                  </Select>
                </Stack>
              </Center>
              {console.log({valueEdit})}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Seleccion
            </Button>
            <Button onClick={modalEdit.onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>        
      </Modal>

      {/* ------------------------------------------------------------------------------- */}

      <Modal
        initialFocusRef={initialRefDelete}
        finalFocusRef={finalRefDelete}
        isOpen={modalDelete.isOpen}
        onClose={modalDelete.onClose}
        size="sm"
        scrollBehavior={scrollBehavior}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Seleccionar actividad a editar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              <h1>lista de actvidades para borrar</h1>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Seleccion
            </Button>
            <Button onClick={modalDelete.onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>        
      </Modal>
  </>)
}

export default UnitFiels