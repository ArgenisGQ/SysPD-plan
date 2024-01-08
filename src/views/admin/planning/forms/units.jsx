import { useState } from 'react'
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
  AbsoluteCenter  
} from '@chakra-ui/react'

import UnitFiels from './unitFiels'

export default function Unit(props) {
      const { unitsx, others } = props;
      /* const { ...rest } = props; */
      // Chakra color mode
      const textColor = useColorModeValue("navy.700", "white");
      const textColorSecondary = "gray.400";
      const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
      const textColorBrand = useColorModeValue("brand.500", "white");
      const brandStars = useColorModeValue("brand.500", "brand.400");    
      const [show, setShow] = useState(false)
      const handleClick = () => setShow(!show)
      const [value, setValue] = useState(null)
    return (
      <> 

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
          <AbsoluteCenter /* bg='white' */ px='4'>
            <UnitFiels/> {/* boton de crear actividad */}
          </AbsoluteCenter>
        </Box>

        <Flex /* mt="2%" */>
          <FormControl  mt="2%" id="proposito" mr="2%">
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Estrategia de Evaluacion
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
              Instrumento de Evaluacion
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

          
      </>
    )
  }