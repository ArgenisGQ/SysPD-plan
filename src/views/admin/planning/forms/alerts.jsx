import React from 'react'

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
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Divider,
    useDisclosure,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,    
  } from '@chakra-ui/react'

const Alerts = (props) => {
    const { message, control, isVisible, boton } = props;
    const {
        /* isOpen: isVisible, */
        isOpen,
        onClose,
        onOpen,
      /* } = useDisclosure() */
      } = useDisclosure({ defaultIsOpen: false })

      return isVisible ? (
        <Alert status='success'  mt="5%">
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              {message}
            </AlertDescription>
          </Box>
          {console.log("visiblex: ", isVisible)}
          {console.log("botonx: ", boton)}
          {boton ? 
                (<CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={onClose}
                />):
                (<></>)}
          
          
        </Alert>
      ) : (   
           
        <Box>
        {console.log("visiblex: ", isVisible)}
        {console.log("botonx: ", boton)}
        </Box>
      )
}

export default Alerts