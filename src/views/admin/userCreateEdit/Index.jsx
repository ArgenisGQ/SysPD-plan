import { Box, 
        Container, 
        Stack, 
        StackDivider, 
        Text } from '@chakra-ui/react'
import * as React from 'react'
import { PersonalInfoCard } from './AddressCard'
import { ProfileCard } from './ProfileCard'
import Card from "../../../components/card/Card";

export default function Settings() {
/* export const App = () => ( */
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
              Datos del usuario
            </Text>
          </Box>
          <PersonalInfoCard
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
              Your Profile
            </Text>
            <Text color="muted" fontSize="sm">
              Tell others who you are
            </Text>
          </Box>
          <ProfileCard
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
