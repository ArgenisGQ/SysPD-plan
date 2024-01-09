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
  } from '@chakra-ui/react'

const UnitFiels = (props) => {
    const { unitsx, others } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const sizes = 'full'
    const scrollBehavior = 'inside'

    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    
    const [value, setValue] = useState(null)
  return (<>
    <Button onClick={onOpen} height='48px' width='400px'>Crear Actividad</Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
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
            <Flex mt="5%">
              <FormControl  mt="2%" id="proposito" mr="2%">
                <FormLabel
                htmlFor="course"
                fontSize='sm' 
                fontWeight={'normal'}
                color={textColor}>
                  Competencia especifica <h1>U: {unitsx}</h1>
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
                  Criterio de Desempeño
                </FormLabel>
                <Textarea rows={4} resize="none"
                  defaultValue="Post"
                  focusBorderColor="brand.400"
                  color={textColorSecondary} />
                {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
              </FormControl>          
            </Flex>

            <Box position='relative' padding='10'>
              <Divider />
              {/* <AbsoluteCenter bg='white' px='4'>
                Content
              </AbsoluteCenter> */}
            </Box>

            <Flex /* mt="5%" */>
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
        </Flex>

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

        <Flex /* mt="3%" */>
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
        </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>)
}

export default UnitFiels