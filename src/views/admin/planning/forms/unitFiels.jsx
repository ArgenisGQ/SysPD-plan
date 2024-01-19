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

import ActivityForm from './modals/activityForm';

const UnitFiels = (props) => {
    const { unitsx, others } = props;
    /* const { isOpen, onOpen, onClose } = useDisclosure() */
    /* const { isOpenACtivities, onOpen, onClose } = useDisclosure() */

    const modalCreate = useDisclosure();
    const modalEdit = useDisclosure();
    const modalDelete = useDisclosure();
    const modalActivityEdit = useDisclosure();

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const initialRefActivities = useRef(null)
    const finalRefActivities = useRef(null)

    const initialRefDelete = useRef(null)
    const finalRefDelete = useRef(null)

    const initialRefActivityEdit = useRef(null)
    const finalRefActivityEdit = useRef(null)

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
    const activitySelect = (activity) => {
      if (!activity) {
        return <>
          <Center mt="5%">
            <p>Seleccione la Actividad</p>
          </Center>            
        </>
        
      }
      return <ActivityForm unit="1" activity="3"/>};      
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
            

            <ActivityForm unit="1" activity="3"/>
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
        size={sizes}
        scrollBehavior={scrollBehavior}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Seleccionar actividad a editar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              {/* <Center>
                <h1>Actividad a editar</h1>
              </Center>  */}              
              <Center mt="1%">               
                <Stack spacing={3} mt="2%"  w='30%' mr="5%">
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
              {activitySelect(valueEdit)}
          </ModalBody>
          <ModalFooter>
           {/*  <Button onClick={modalActivityEdit.onOpen} colorScheme='blue' mr={3}>
              Seleccion aa
            </Button>  */}
            <Button  colorScheme='blue' mr={3}>
              Guardar
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
          <ModalHeader>Seleccionar actividad a borrar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              <Center mt="1%">               
                <Stack spacing={3} mt="2%"  w='30%' mr="5%">
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
          </ModalBody> 
          <ModalFooter>
            <Button colorScheme='red' mr={3}>
              borrar
            </Button>
            <Button onClick={modalDelete.onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>        
      </Modal>

      {/* ------------------------------------------------------------------------------- */}
      {/* DONT USED */}
      <Modal
        initialFocusRef={initialRefActivityEdit}
        finalFocusRef={finalRefActivityEdit}
        isOpen={modalActivityEdit.isOpen}
        onClose={modalActivityEdit.onClose}
        size="sm"
        scrollBehavior={scrollBehavior}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>EDITAR ACTIVIDAD</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              <Center>
                <h1>lista de actividades para editar</h1>
              </Center>  
          </ModalBody>
          <ModalFooter>
            <Button  colorScheme='blue' mr={3}>
              Guardar
            </Button>            
            <Button onClick={modalActivityEdit.onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>        
      </Modal>

  </>)
}

export default UnitFiels