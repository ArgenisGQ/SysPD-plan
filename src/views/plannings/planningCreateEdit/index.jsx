/* 'use client' */

import { useState, useEffect } from 'react'
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

//-------API-INIT--------
import useDataUser from '../../../hooks/useDataPlanning'; 
import { useParams } from 'react-router-dom';

//-------API-END---------

import { useToast } from '@chakra-ui/react'

import Form01 from './forms/form01';
import Form02 from './forms/form02';
import Form03 from './forms/form03';
import Form04 from './forms/form04';
import Form05 from './forms/form05';
import { HSeparator } from "../../../components/separator/Separator";


export default function Planning(props) {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(20)

  //-----API-INIT------
  const { editActive } = props;
  const { mutEditLoadPlanning } = useDataUser();
  const paramms = useParams();
  console.log ("PARAMETROS: ", paramms.id)

    //Estados inciales para usar el formulario en edicion.
  const [idPlan, setIdPlan] = useState(paramms.id);
  const [planningUnit, setPlanningUnit] = useState("");
  const [code, setCode] = useState("");
  const [section,setSection] = useState("");
  console.log("props de ruta: ", editActive);

  function LocalEditLoadPlanning(data) {
    console.log("Precarga de datos para edicion-HOOKS")
    mutEditLoadPlanning.mutate(data,
      {
        onMutate: () => {
          console.log("Ïnicia LOAD -HOOKS-)");
        },
        onSuccess: (response) => {
          console.log('DATOS A EDITAR - HOOK: ', localStorage.getItem("planningForEdit"));
        },
        onError: (error) => {
          console.log("Errores LOAD EDIT usuarios(hook):",error);
        },
        onSettled: (response) => {
          console.log("Terminado el proceso de LOAD EDIT (en hooks)")
        }
      });
  }

  useEffect(() => {
    if (editActive) {
      LocalEditLoadPlanning(paramms.id);
    } 
  },[]); 
  //-----API-END-------

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
        {step === 1 ? <Form01  
                      planningUnitL={planningUnit}
                      codeL={code}
                      sectionL={section}/> : step === 2 
                    ? <Form02 /> : step === 3 
                    ? <Form03 /> : step === 4 
                    ? <Form04 /> : <Form05 />}
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
                Anterior
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
                Siguiente
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
                Enviar
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