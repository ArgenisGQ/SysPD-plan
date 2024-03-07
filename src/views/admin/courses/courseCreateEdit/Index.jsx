import { useState, useEffect }      from 'react';
import { Box, 
        Container, 
        Stack, 
        StackDivider, 
        Text } from '@chakra-ui/react'
import * as React from 'react'
import { PersonalInfoCard } from './AddressCard';
import { ProfileCard } from './ProfileCard';
import { PasswordCard } from './PasswordCard';
import { PwdUserCard } from './PwdUserCard';
import { CourseCard } from './CourseCard';
import Card from "../../../../components/card/Card";
import useDataCourse from '../../../../hooks/useDataCourse'; 
import { useParams } from 'react-router-dom';



export default function Settings(props) {

const { editActive } = props;
//Carga de API
const {mutEditLoadCourse} = useDataCourse();
const paramms = useParams();
console.log ("PARAMETROS: ", paramms.id)

const [idCourse, setIdCourse] = useState(paramms.id);
const [name, setName] = useState("");
const [code, setCode] = useState("");
const [section, setSection] = useState("");
console.log("props de ruta: ", editActive);

//Cargar info del curso.
const LocalEditLoadCourse = (data) => {
  console.log("Precarga INDEX")
  mutEditLoadCourse.mutate(data,
    {
      onMutate: () => {
        console.log("Ïnicia INDEX-)");
        return <div>LOADING...</div>
      },
      onSuccess: (response) => {
        const courseForEdit = JSON.parse(localStorage.getItem("courseForEdit"));
        console.log("FRONT (index): ", courseForEdit);
        setIdCourse(courseForEdit.id)
        setName(courseForEdit.name);
        setCode(courseForEdit.code);
        setSection(courseForEdit.section);
        console.log('ON SUCCESS!!!')
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
    LocalEditLoadCourse(paramms.id);
  } 
},[]); 

return (
  <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
    <Box
      py={{
        base: '4',
        md: '8',
      }}
    >
      <Stack spacing="5" divider={<StackDivider />}>
        <Card>
          <Stack
            direction={{
              base: 'column',
              lg: 'row',
            }}
            spacing={{
              base: '5',
              lg: '8',
            }}
            justify="space-between"
          >
            <Box flexShrink={0}>
              <Text fontSize="lg" fontWeight="medium">    
                Asignatura
              </Text>
              <Text color="muted" fontSize="sm">
                Datos de la Asignatura.
              </Text>
            </Box>
              <ProfileCard
                edit={editActive}
                idCourseL={idCourse}
                nameL={name}
                codeL={code}
                sectionL={section}
                maxW={{
                  lg: '3xl',
                }}
              />
          </Stack>
        </Card>

        {/* <Card>
          <Stack
            direction={{
              base: 'column',
              lg: 'row',
            }}
            spacing={{
              base: '5',
              lg: '8',
            }}
            justify="space-between"
          >
            <Box flexShrink={0}>
              <Text fontSize="lg" fontWeight="medium">
                Perfil
              </Text>
              <Text color="muted" fontSize="sm">
                Datos del usuario
              </Text>
            </Box>
            <PersonalInfoCard
              maxW={{
                lg: '3xl',
              }}
            />
          </Stack>
        </Card> */}

        <Card>
          <Stack
            direction={{
              base: 'column',
              lg: 'row',
            }}
            spacing={{
              base: '5',
              lg: '8',
            }}
            justify="space-between"
          >
            <Box flexShrink={0}>
              <Text fontSize="lg" fontWeight="medium">
                Contraseña (Usuario)
              </Text>
              <Text color="muted" fontSize="sm">
                Cambios de clave secreta del usuario
              </Text>
            </Box>
            <PwdUserCard
              maxW={{
                lg: '3xl',
              }}
            />
          </Stack>
        </Card>

        <Card>
          <Stack
            direction={{
              base: 'column',
              lg: 'row',
            }}
            spacing={{
              base: '5',
              lg: '8',
            }}
            justify="space-between"
          >
            <Box flexShrink={0}>
              <Text fontSize="lg" fontWeight="medium">
                Contraseña (Admninistrador)
              </Text>
              <Text color="muted" fontSize="sm">
                Cambios de clave secreta del usuario
              </Text>
            </Box>
            <PasswordCard
              maxW={{
                lg: '3xl',
              }}
            />
          </Stack>
        </Card>

        <Card>
          <Stack
            direction={{
              base: 'column',
              lg: 'row',
            }}
            spacing={{
              base: '5',
              lg: '8',
            }}
            justify="space-between"
          >
            <Box flexShrink={0}>
              <Text fontSize="lg" fontWeight="medium">
                Materias
              </Text>
              <Text color="muted" fontSize="sm">
                Materias asginadas al usuario
              </Text>
            </Box>
            <CourseCard
              maxW={{
                lg: '3xl',
              }}
            />
          </Stack>
        </Card>
      </Stack>
    </Box>
  </Box>
)
}
