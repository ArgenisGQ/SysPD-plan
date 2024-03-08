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
  Divider,  
  Stack,
  StackDivider,  
  Radio, RadioGroup,
  Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator,
  Center 
} from '@chakra-ui/react'

import InputField from '../../../../components/fields/InputField'

import { useToast } from '@chakra-ui/react'

import Unit  from './units'



export default function Form03() {
      // Chakra color mode
      const textColor = useColorModeValue("navy.700", "white");
      const textColorSecondary = "gray.400";
      const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
      const textColorBrand = useColorModeValue("brand.500", "white");
      const brandStars = useColorModeValue("brand.500", "brand.400");    
      const [show, setShow] = useState(false)
      const handleClick = () => setShow(!show)
      const [value, setValue] = useState(null)
      /* const unitsx = (unidad) => {<Unit unitsx="UNIDAD I" others="50"/>}; */
      const unitsxx = (unidad) => {
        if (!unidad) {
          return <>
            <Center mt="5%">
              <p>Seleccione la UNIDAD</p>
            </Center>            
          </>
          
        }
        return <Unit unitsx={unidad} others="50"/>};
        
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
          III. Plan de evaluacion
        </Heading>

        <Center mt="5%">
          <Stack spacing={3} mt="2%"  w='50%' mr="5%">
            {/* <Select variant='outline' placeholder='Outline' /> */}
            {/* <Select variant='filled' placeholder='Filled' /> */}
            {/* <Select variant='flushed' placeholder='Flushed' /> */}
            {/* <Select variant='unstyled' placeholder='Unstyled' /> */}

            <Select variant='flushed' placeholder='Seleccione la Unidad'
                    value={ value } onChange={ (event) => setValue( event.target.value ) }>
              <option value='1'>Unidad I</option>
              <option value='2'>Unidad II</option>
              <option value='3'>Unidad III</option>
              <option value='4'>Unidad IV</option>
            </Select>
          </Stack>
        </Center>

        {unitsxx(value)}

        {/* {if ({value!=0}) {
          
          <Unit unitsx="UNIDAD I" others="50"/>
        }} */}

        {/* <Unit unitsx="UNIDAD I" others="50"/> */}

        {/* <Tabs position="relative" variant="unstyled" mt="5%">
          <Center>
            <TabList>
              <Tab>Unidad I</Tab>
              <Tab>Unidad II</Tab>
              <Tab>Unidad III</Tab>
              <Tab>Unidad IV</Tab>
            </TabList>
          </Center>          
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
            <Center>
                <p>one!</p>
              </Center>              
              <Unit unitsx="UNIDAD I" others="50"/>
            </TabPanel>
            <TabPanel>
              <Center>
                <p>two!</p>
              </Center> 
              <Unit unitsx="UNIDAD II" others="50"/>
            </TabPanel>
            <TabPanel>
              <Center>
                <p>three!</p>
              </Center> 
              <Unit unitsx="UNIDAD III" others="50"/>
            </TabPanel>
            <TabPanel>
              <Center>
                <p>four!</p>
              </Center> 
              <Unit unitsx="UNIDAD IV" others="50"/>
            </TabPanel>
          </TabPanels>
        </Tabs> */}

        

        {/* <Unit unitsx="50" others="50"/> */}

        {/* <SimpleGrid columns={1} spacing={6}>
          <FormControl as={GridItem} colSpan={[3, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              Website
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: 'gray.800',
                }}
                color="gray.500"
                rounded="md">
                http://
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="www.example.com"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
  
            <InputField
              mb="0px"
              me="30px"
              id="username"
              label="Username"
              placeholder="@simmmple.web"
            />
            <FormHelperText>
              Brief description for your profile. URLs are hyperlinked.
            </FormHelperText>
  
          </FormControl>
  
          <FormControl id="email" mt={1} >
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              About
            </FormLabel>
            <Textarea
              placeholder="you@example.com"
              rows={3}
              shadow="sm"
              size="sm"
              focusBorderColor="brand.400"
              fontSize={{
                sm: 'sm',
              }}
            />                  
          </FormControl>
        </SimpleGrid> */}
      </>
    )
  }