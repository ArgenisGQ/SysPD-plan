'use client'

import { useState } from 'react'
import {
  Progress,
  Box,
  Card,
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
} from '@chakra-ui/react'

import InputField from '../../../components/fields/InputField'

import { useToast } from '@chakra-ui/react'

import Form01 from '../../../views/admin/planning/forms/form01';
import Form02 from '../../../views/admin/planning/forms/form02';
import Form03 from '../../../views/admin/planning/forms/form03';
import Form04 from '../../../views/admin/planning/forms/form04';
import Form05 from '../../../views/admin/planning/forms/form05';
import { HSeparator } from "../../../components/separator/Separator";


export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(20)

  return (
    <>    
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* <Card
      
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>   */}  
      <Box
        color='gray.600' 
        
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={1200}
        p={6}
        m="10px auto"
        as="form"
        >      
        <Progress /* hasStripe */ value={progress} mb="5%" mx="5%" size="xs" width /* isAnimated *//>{/* </Progress> */}
        {step === 1 ? <Form01 /> :step === 2 ? <Form02 />:step === 3 ? <Form03 /> : step === 4 ? <Form04 /> : <Form05 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 20)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 5}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 5) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 20)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 5 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
      {/* </Card> */}      
    </Box>  
    
    </>
  )
}