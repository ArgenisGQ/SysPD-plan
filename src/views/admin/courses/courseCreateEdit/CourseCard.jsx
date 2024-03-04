import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
  useColorModeValue,
  Switch,

  Container,
  Text,
  Link,
 /*  FormControl, */
  /* FormLabel, */
  Code,
  FormErrorMessage
} from '@chakra-ui/react'
import * as React from 'react'
import { Dropzone } from './Dropzone'

/* import Select, { CreatableSelect } from "./chakra-react-select"; */
import { /* groupedOptions,  */colourOptions } from "./docs/data";

const mappedColourOptions = colourOptions.map((option) => ({
  ...option,
  colorScheme: option.value
}));

/* import { Container, FormControl, FormLabel } from "@chakra-ui/react"; */
import { Select } from "chakra-react-select";
import { groupedOptions/* , colourOptions  */} from "./data/data";

export const CourseCard = (props) => (
  <Box
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    flex="1"
    {...props}
  >
    <Stack
      spacing="5"
      px={{
        base: '4',
        md: '6',
      }}
      py={{
        base: '5',
        md: '6',
      }}
    >
      {/* <Stack
        spacing="6"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <FormControl id="username">
          <FormLabel>Usuario</FormLabel>
          <Input defaultValue="Usuario unico" />
        </FormControl>
        <FormControl id="cedula">
          <FormLabel>Cedula</FormLabel>
          <Input defaultValue="Cedula" />
        </FormControl>
        <FormControl display="flex" >
          <FormLabel htmlFor="user-active" mb="0">
            Usuario Activo
          </FormLabel>
          <Switch id="user-active" colorScheme="brand" />          
        </FormControl>
      </Stack> */}
      
      {/* <Stack
        spacing="6"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <FormControl id="firstName">
          <FormLabel>Nombres</FormLabel>
          <Input defaultValue="Nombres del Usuario" />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Apellidos</FormLabel>
          <Input defaultValue="Apellidos del Usuario" />
        </FormControl>
      </Stack> */}
      {/* <FormControl id="website">
        <FormLabel>Website</FormLabel>
        <InputGroup>
          <InputLeftAddon>https://</InputLeftAddon>
          <Input defaultValue="www.chakra-ui.com" />
        </InputGroup>
      </FormControl> */}
      {/* <FormControl id="street">
        <FormLabel>Email</FormLabel>
        <Input defaultValue="user@email.com" />
      </FormControl> */}

      {/* //------------------------------------------// */}
        <Container mb={16}>
          <FormControl p={4}>
            <FormLabel>chakra-react-select demo</FormLabel>
            <Select
              isMulti
              name="colors"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
            />
          </FormControl>
        </Container>


        <Container mb={12}>
          <Text p={4} fontSize="lg">
            This wrapper now has its own NPM package:{" "}
            <Link
              isExternal
              color="blue.500"
              fontWeight="bold"
              href="https://www.npmjs.com/package/chakra-react-select"
            >
              https://www.npmjs.com/package/chakra-react-select
            </Link>
          </Text>
          <FormControl p={4}>
            <FormLabel>
              Select Colors and Flavours <Code>size="sm"</Code>
            </FormLabel>
            <Select
              isMulti
              name="colors"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
              size="sm"
            />
          </FormControl>

          <FormControl p={4}>
            <FormLabel>
              Select Colors and Flavours <Code>size="md" (default)</Code>
            </FormLabel>
            <Select
              isMulti
              name="colors"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
            />
          </FormControl>

          <FormControl p={4}>
            <FormLabel>
              Select Colors and Flavours <Code>size="lg"</Code>
            </FormLabel>
            <Select
              isMulti
              name="colors"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
              size="lg"
            />
          </FormControl>

          <FormControl p={4}>
            <FormLabel>
              Select Colors and Flavours (With global <Code>colorScheme</Code>)
            </FormLabel>
            <Select
              isMulti
              name="colors"
              colorScheme="purple"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
            />
          </FormControl>

          <FormControl p={4}>
            <FormLabel>
              Select Colors and Flavours (With <Code>colorScheme</Code> in each
              option)
            </FormLabel>
            <Select
              isMulti
              name="colors"
              options={mappedColourOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
            />
          </FormControl>

          {/* <FormControl p={4}>
            <FormLabel>Select with creatable options</FormLabel>
            <CreatableSelect
              isMulti
              name="colors"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
            />
          </FormControl> */}

          <FormControl p={4} isDisabled>
            <FormLabel>
              Disabled select from the <Code>FormControl</Code>
            </FormLabel>
            <Select
              isMulti
              name="colors"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
            />
          </FormControl>

          <FormControl p={4}>
            <FormLabel>
              Disabled select from the <Code>Select</Code> element itself
            </FormLabel>
            <Select
              isDisabled
              isMulti
              name="colors"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
            />
          </FormControl>

          <FormControl p={4} isInvalid>
            <FormLabel>
              Invalid select from the <Code>FormControl</Code>
            </FormLabel>
            <Select
              isMulti
              name="colors"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
            />
            <FormErrorMessage>
              This error message shows because of an invalid FormControl
            </FormErrorMessage>
          </FormControl>

          <FormControl p={4}>
            <FormLabel>
              Invalid select from the <Code>Select</Code> element itself
            </FormLabel>
            <Select
              isInvalid
              isMulti
              name="colors"
              options={groupedOptions}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
            />
            <FormErrorMessage>
              You can't see this error message because the isInvalid prop is set on
              the select element instead of the form control
            </FormErrorMessage>
          </FormControl>
        </Container>

      {/* //-------------------------------------------// */}

      {/* <FormControl id="bio">
        <FormLabel>Bio</FormLabel>
        <Textarea rows={3} resize="none" />
        <FormHelperText color="subtle">Write a short introduction about yourself</FormHelperText>
      </FormControl> */}
        {/* <FormControl id="picture">
          <FormLabel>Foto</FormLabel>
          <Stack
            spacing={{
              base: '3',
              md: '5',
            }}
            direction={{
              base: 'column',
              sm: 'row',
            }}
          >
            <Avatar size="lg" name="USUARIO" src="https://tinyurl.com/yhkm2ek8" />
            <Dropzone width="full" />
          </Stack>
        </FormControl>  */}     
      </Stack>        
    <Divider />
    <Flex
      direction="row-reverse"
      py="4"
      px={{
        base: '4',
        md: '6',
      }}
    >
      <Button type="submit" variant="primary">
        Guardar
      </Button>
    </Flex>
  </Box>
)
