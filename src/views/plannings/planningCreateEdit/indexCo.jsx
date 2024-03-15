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

  //stepper
  const steps = [
    { title: 'First', description: 'I. Identificacion de la unidad curricular' },
    { title: 'Second', description: 'II. Identificacion del Docente' },
    { title: 'Third', description: 'Ajustes de puntos de las unidades' },
    { title: 'Four', description: 'III. Plan de evaluacion' },
    { title: 'Five', description: 'IV. Desarrollo de las unidades de contenidos' },
  ]

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const activeStepText = steps[activeStep].description
  
  useEffect(()=>{
    setActiveStep(step - 1)
  },[step])

  const PageStep = (step) => {
    switch (step) {
      case 1:
        return <Form01/>
      case 2:
        return <Form02/>
      case 3:
        return <Form03/>
      /* default:
        statements */
    }
  }
  

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
       
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Box color='gray.600' 
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={1200}
        p={6}
        m="10px auto">
      {/* <Form01/> */}
      </Box>           
    </Box>  
    
    
  )
}