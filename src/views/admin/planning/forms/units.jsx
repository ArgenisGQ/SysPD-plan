import { 
  useState, userReview,
  setUserReview, } from 'react'
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
  Text,
  SimpleGrid,
  CardFooter  
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
      /* const [value, setValue] = useState(property.beds) */
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
      const [value, setValue] = useState(<ul>
        <li>uno</li>
        <li>dos</li>
        <li>tres</li>
      </ul>)
      function handleChange(e) {
        setUserReview(e.target.value);
      }
      const onChangex = (e) => {
        setValue(e)
      } 
    return (
      <>  

        {/* {() => setValue(<>
        <ul>
          <li>uno</li>
          <li>dos</li>
          <li>tres</li>
        </ul>
        </>)} */}
        

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'
                    mt="5%">
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
              defaultValue="escribir aqui.."
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
        </SimpleGrid>        

        

        {/* boton de crear actividad */}        
        <Box position='relative' padding='10'>
          <Flex alignItems="center" gap={6}>
            <Divider size={10} />
              <UnitFiels/>
            <Divider/>
          </Flex> 
        </Box>
        {/* ------------------------------- */}

        {/* <Flex mt="2%"> */}
          {/* <Heading as='h1' size='md' noOfLines={1}>I'm a Heading</Heading> */}          
          <SimpleGrid /* autoRows="100px" */
                      /* gridTemplateColumns="repeat(3, 1fr)" */
                      maxW="1280px"
                      /* gap="4px" */
                      /* margin="0 auto" */>
            <Heading size='md' /* fontSize='50px' */
                    htmlFor="course"
                    fontSize='sm' 
                    fontWeight={'normal'}
                    color={textColor}
                    mb="2%">
              Estrategia de Evaluacion
            </Heading>
            <Box  mt="0%" mr="0%" w='100%' 
                  /* bg="gray.50" */
                  _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s"
                  /* _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s" */
                  /* _hover={{ bg: 'blue.500' }}
                  transition="background-color 1s" */
                  maxW='6xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>           
              <Box p='6'>
                <Box
                  mt='0'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={[3,5,7]}
                > 
                  {/* <Text isTruncated> */}
                  <Text>
                    <ListActivities/>
                  </Text>                
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        {/* </Flex> */}

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(380px, 1fr))' mt="2%">
          {/* <Heading as='h1' size='md' noOfLines={1}>I'm a Heading</Heading> */}
          <SimpleGrid>
            <Heading size='md' /* fontSize='50px' */
                    htmlFor="course"
                    fontSize='sm' 
                    fontWeight={'normal'}
                    color={textColor}
                    mb="2%">
              Instrumento de Evaluacion
            </Heading>
            <Box  mt="0%" mr="2%" w='100%'
                  _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s"
                  maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>           
              <Box p='6'>              
                <Box
                  mt='0'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={[3,5,7]}                
                >              
                  <ListActivities/>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
          <SimpleGrid>
            <Heading size='md' /* fontSize='50px' */
                    htmlFor="course"
                    fontSize='sm' 
                    fontWeight={'normal'}
                    color={textColor}
                    mb="2%">
              Tipo de Evaluacion
            </Heading>
            <Box  mt="0%" mr="0%" w='100%'
                  /* bg="gray.50" */
                  _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s"
                  /* _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s" */
                  /* _hover={{ bg: 'blue.500' }}
                  transition="background-color 1s" */
                  maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>           
              <Box p='6'>
                <Box
                  mt='0'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={[3,5,7]}
                > 
                  {/* <Text isTruncated> */}
                  <Text>
                    <ListActivities/>
                  </Text>                
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </SimpleGrid>

        <Box position='relative' padding='10'>
          <Divider />
          {/* <AbsoluteCenter bg='white' px='4'>
            Content
          </AbsoluteCenter> */}
        </Box>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(380px, 1fr))' mt="0%">
          {/* <Heading as='h1' size='md' noOfLines={1}>I'm a Heading</Heading> */}
          <SimpleGrid>
            <Heading size='md' /* fontSize='50px' */
                    htmlFor="course"
                    fontSize='sm' 
                    fontWeight={'normal'}
                    color={textColor}
                    mb="2%">
              Evidencia de Evaluacion
            </Heading>
            <Box  mt="0%" mr="2%" w='100%'
                  _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s"
                  maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>           
              <Box p='6'>              
                <Box
                  mt='0'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={[3,5,7]}                
                >              
                  <ListActivities/>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
          <SimpleGrid>
            <Heading size='md' /* fontSize='50px' */
                    htmlFor="course"
                    fontSize='sm' 
                    fontWeight={'normal'}
                    color={textColor}
                    mb="2%">
              Retroalimentacion
            </Heading>
            <Box  mt="0%" mr="0%" w='100%'
                  /* bg="gray.50" */
                  _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s"
                  /* _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s" */
                  /* _hover={{ bg: 'blue.500' }}
                  transition="background-color 1s" */
                  maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>           
              <Box p='6'>
                <Box
                  mt='0'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={[3,5,7]}
                > 
                  {/* <Text isTruncated> */}
                  <Text>
                    <ListActivities/>
                  </Text>                
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </SimpleGrid>    

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(380px, 1fr))' mt="2%">
          {/* <Heading as='h1' size='md' noOfLines={1}>I'm a Heading</Heading> */}
          <SimpleGrid>
            <Heading size='md' /* fontSize='50px' */
                    htmlFor="course"
                    fontSize='sm' 
                    fontWeight={'normal'}
                    color={textColor}
                    mb="2%">
              Lapso/Entrega
            </Heading>
            <Box  mt="0%" mr="2%" w='100%'
                  _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s"
                  maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>           
              <Box p='6'>              
                <Box
                  mt='0'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={[3,5,7]}                
                >              
                  <ListActivities/>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
          <SimpleGrid>
            <Heading size='md' /* fontSize='50px' */
                    htmlFor="course"
                    fontSize='sm' 
                    fontWeight={'normal'}
                    color={textColor}
                    mb="2%">
              Ponderacion/Calificacion
            </Heading>
            <Box  mt="0%" mr="0%" w='100%'
                  /* bg="gray.50" */
                  _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s"
                  /* _hover={{ bg: 'gray.800', transition: "background-color 3s" }}
                  transition="background-color 1s" */
                  /* _hover={{ bg: 'blue.500' }}
                  transition="background-color 1s" */
                  maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>           
              <Box p='6'>
                <Box
                  mt='0'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={[3,5,7]}
                > 
                  {/* <Text isTruncated> */}
                  <Text>
                    <ListActivities/>
                  </Text>                
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </SimpleGrid>      


          
      </>
    )
  }