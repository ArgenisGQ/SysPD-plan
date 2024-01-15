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
  AbsoluteCenter,
  Image,
  Badge,  
} from '@chakra-ui/react'

import UnitFiels from './unitFiels'
import ListActivities from './listActivities';

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
      const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }
      const numbers = ["1 - uno dos tres",
                       "2 - uno dos tres",
                       "3 - uno dos tres",
                       "4 - uno dos tres",
                       "5 - uno dos tres"];
      const listItems = numbers.map((number) =>
        <>
          {/* <li key={number.toString()}> */}
          {/* <li key={index}>
            {number}
          </li> */}
          <li>
            {number}
          </li>
        </>        
      );

      const list3 = () => (
        <>
          <h1>LISTA 3</h1>
        </>
      )

      function List2() {
        /* const listItemsx = numbers.map(number =>
          <li key={number.toString()}>
            {number}
          </li>
        ); */
        return <>
                <h1>FUNCION2</h1>                
                {/* <ul>{listItemsx}</ul> */}
               </>;
      }
      function List() {
        const listItemsx = numbers.map((number) =>
          <li key={number.toString()}>
            {number}
          </li>
        );
        return <>
                <h1>FUNCION</h1>                
                <ul>{listItemsx}</ul>
                
               </>;
      }
    return (
      <> 

        <Flex mt="5%">
          <FormControl  mt="2%" id="proposito" mr="2%">
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              {/* Competencia especifica <h1>U: {unitsx}</h1> */}
              Competencia especifica --- U: {unitsx}
            </FormLabel>
            {console.log()}
            <Textarea rows={4} resize="none"              
              defaultValue="nada"
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

        <Flex mt="5%">
          <Box  mt="2%" mr="2%" w='100%'
                maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>           
            <Box p='6'>
              {/* <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  New
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box> */}
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={3}                
              >
              
                  <ListActivities/>
                               
              </Box>
              {/* <Box>
                {property.formattedPrice}
                <Box as='span' color='gray.600' fontSize='sm'>
                  / wk
                </Box>
              </Box> */}
              {/* <Box display='flex' mt='2' alignItems='center'>                
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {property.reviewCount} reviews
                </Box>
              </Box> */}
            </Box>
          </Box>
          <Box  mt="2%" mr="0%" w='100%'
                maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>           
            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  New
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {property.title}
              </Box>
              <Box>
                {property.formattedPrice}
                <Box as='span' color='gray.600' fontSize='sm'>
                  / wk
                </Box>
              </Box>
              <Box display='flex' mt='2' alignItems='center'>                
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>


        {/* boton de crear actividad */}        
        <Box position='relative' padding='10'>
          <Flex alignItems="center" gap={6}>
            <Divider size={10} />
              <UnitFiels/>
            <Divider/>
          </Flex> 
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

          {/* <FormControl mt="2%" w='50%' >
            <Card>
              <CardHeader>
                <Heading size='md'>Tipo de Evaluacion</Heading>
              </CardHeader>
              <CardBody>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='row'>
                      <Radio value='1'>Diagnostica</Radio>
                      <Radio value='2' isChecked>Formativa</Radio>
                      <Radio value='3'>Sumativa</Radio>
                    </Stack>
                  </RadioGroup>   
              </CardBody>
            </Card>
          </FormControl> */}


        <Flex /* mt="5%" */>
          <FormControl  mt="2%" id="proposito" mr="0%">
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
        </Flex>

        <Flex /* mt="5%" */>
          <FormControl  mt="2%" id="proposito" mr="0%">
            <FormLabel
            htmlFor="course"
            fontSize='sm' 
            fontWeight={'normal'}
            color={textColor}>
              Tipo de Evaluacion
            </FormLabel>
            <Textarea rows={4} resize="none"
              defaultValue="Post"
              focusBorderColor="brand.400"
              color={textColorSecondary} />
            {/* <FormHelperText color="subtle">Escriba el proposito de la asignatura</FormHelperText> */}
          </FormControl>                    
        </Flex>
           

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