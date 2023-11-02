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
  Center, Square, Circle  
} from '@chakra-ui/react'

import InputField from '../../../../components/fields/InputField'

import { useToast } from '@chakra-ui/react'

import Week  from './weeks'
import { functionalUpdate } from 'react-table'

export default function Form03() {
      // Chakra color mode
      const textColor = useColorModeValue("navy.700", "white");
      const textColorSecondary = "gray.400";
      const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
      const textColorBrand = useColorModeValue("brand.500", "white");
      const brandStars = useColorModeValue("brand.500", "brand.400");    
      const [show, setShow] = useState(false)
      const handleClick = () => setShow(!show)
      const [value, setValue] = useState('1')
      const [unitt, setUnitt] = useState("");
      const [weekk, setWeekk] = useState("");
      /* const weekkk = (semana) => {setWeekk(semana)}; */
      /* const weekkk = (semana) => {weekkx=semana};
      let weekkx; */
      const unitsxx = (unidad) => {
        if (!unidad) {
          return <>
            <Center mt="5%">
              <p>Seleccione la UNIDAD</p>
            </Center>            
          </>
          
        }
        return <Week unitsx={unidad} others="50"/>};

    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
        IV. Desarrollo de las unidades de contenidos
        </Heading>

        {/* <SimpleGrid columns={2} spacing={6} mt="5%"> */}
        <Center mt="5%">
          <Stack spacing={3} mt="2%"  w='50%' mr="5%">
            {/* <Select variant='outline' placeholder='Outline' /> */}
            {/* <Select variant='filled' placeholder='Filled' /> */}
            {/* <Select variant='flushed' placeholder='Flushed' /> */}
            {/* <Select variant='unstyled' placeholder='Unstyled' /> */}

            <Select variant='flushed' placeholder='Seleccione la Unidad'
                    value={ value } onChange={ (event) => setValue( event.target.value ) }>
              <option value='unit01'>Unidad I</option>
              <option value='unit02'>Unidad II</option>
              <option value='unit03'>Unidad III</option>
              <option value='unit04'>Unidad IV</option>
            </Select>
          </Stack>
        </Center>

      
          <Tabs position="relative" variant="unstyled" mt="5%">
            <Center>
              <TabList>
                <Tab>Semana 1</Tab>
                <Tab>Semana 2</Tab>
                <Tab>Semana 3</Tab>
                <Tab>Semana 4</Tab>            
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
                {/* {setWeekk("Semana 111")} */}                
                {/* {weekkk("semana 1111")} */}
                {/* {weekkx = "semanaaaaa 1"} */}
                <Week weeksx="Semana 1" others= {value}/>
              </TabPanel>
              <TabPanel>
                <Center>
                  <p>two!</p>                  
                </Center>
                <Week weeksx="Semana 2" others={value}/>
              </TabPanel>
              <TabPanel>
                <Center>
                  <p>three!</p>                  
                </Center>
                <Week weeksx="Semana 3" others={value}/>
              </TabPanel>
              <TabPanel>
                <Center>
                  <p>four!</p>                  
                </Center>
                <Week weeksx="Semana 4" others={value}/>
              </TabPanel>
            </TabPanels>
          </Tabs>

          
        {/* </SimpleGrid>  */}

        {/* <Week weeksx={weekkx} others= {value}/> */}
             
      
        {/* if (condition) {
          
        } else {
          
        } */}
        
        {/* <SimpleGrid columns={1} spacing={6}>
          <FormControl as={GridItem} colSpan={[3, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              IV. Desarrollo de las unidades de contenidos
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