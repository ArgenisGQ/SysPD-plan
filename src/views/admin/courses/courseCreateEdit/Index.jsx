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
import useDataUser from '../../../../hooks/useDataUser'; 
import { useParams } from 'react-router-dom';



export default function Settings(props) {

const { editActive } = props;
const {CreateUser,EditLoadUser,EditUser,mutEditLoadUser} = useDataUser();
const paramms = useParams();
console.log ("PARAMETROS: ", paramms.id)
/* const [loadData, setLoadData] = useState(false) */
/* const [activeEdit, setActiveEdit] = useState(false); */
/* setActiveEdit({editActive}); */
//Estados inciales para usar el formulario en edicion.
const [idUser, setIdUser] = useState(paramms.id);
const [userName, setUserName] = useState("");
const [idCard, setIdCard] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
console.log("props de ruta: ", editActive);

//Cargar info del usuariO.
const LocalEditLoadUser = (data) => {
  console.log("Precarga INDEX")
  mutEditLoadUser.mutate(data,
    {
      onMutate: () => {
        console.log("Ïnicia INDEX-)");
        return <div>LOADING...</div>
      },
      onSuccess: (response) => {
        
        const userForEdit = JSON.parse(localStorage.getItem("userForEdit"));

        
        /* setIdUser(userForEdit.id) */
        console.log("parametro (hook)",paramms.id)
        console.log("iduser(hook): ",idUser)

        console.log("FRONT (index): ", userForEdit);
        setUserName(userForEdit.username);
        const name = (userForEdit.name).split(',')
        console.log("nombre EDIT(index): ",name )
        setFirstName(name[0]);
        setLastName(name[1]);
        setEmail(userForEdit.email);
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

/* const idUser = 27 */
useEffect(() => {
  if (editActive) {
    LocalEditLoadUser(paramms.id);
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
                Perfil
              </Text>
              <Text color="muted" fontSize="sm">
                Perfil basico del usuario.
              </Text>
            </Box>
              <ProfileCard
                edit={editActive}
               /*  load={loadData} */
                idUserL={idUser}
                userNameL={userName}
                firstNameL={firstName}
                lastNameL={lastName}
                idCardL={idCard}
                emailL={email}
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
