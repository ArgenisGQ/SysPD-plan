import React from 'react'
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
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Stack,
    Text 
  } from '@chakra-ui/react'

const stepper = () => {

    const steps = [
        { title: 'First', description: 'I. Identificacion de la unidad curricular' },
        { title: 'Second', description: 'II. Identificacion del Docente' },
        { title: 'Third', description: 'Ajustes de puntos de las unidades' },
        { title: 'Four', description: 'III. Plan de evaluacion' },
        { title: 'Five', description: 'IV. Desarrollo de las unidades de contenidos' },
      ]

    const { activeStep, setActiveStep } = useSteps({
        index: 2,
        count: steps.length,
      })
    
    const activeStepText = steps[activeStep].description

  return (
    <>
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Stack>
            <Stepper size='sm' index={activeStep} gap='0'>
                {steps.map((step, index) => (
                <Step key={index} gap='0'>
                    <StepIndicator>
                    <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                    <StepSeparator _horizontal={{ ml: '0' }} />
                </Step>
                ))}
            </Stepper>
            <Text>
                Paso {activeStep + 1}: <b>{activeStepText}</b>
            </Text>
        </Stack>
    </Box>
    </>
    
  )
}

export default stepper