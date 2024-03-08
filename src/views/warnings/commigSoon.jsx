
import { Link, useRouteError } from "react-router-dom";
import { Box, Heading, Text, Button } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Box textAlign="center" mt={150} py={10} px={6}>
      <Heading
        display="inline-block"
        as="h1"
        size="4xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        Comming Soon!
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>
      <Link to= "/" >
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid">
          Go to Home
        </Button>
      </Link>
    </Box>
  )
}