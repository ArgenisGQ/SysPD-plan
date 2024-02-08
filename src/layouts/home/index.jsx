// Chakra imports
import { Box, Flex, Icon, Text,
         Stack, Button,VStack, useBreakpointValue, Center,
         SimpleGrid} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import Footer from "../../components/footer/FooterAuth";
import FixedPlugin from "../../components/fixedPlugin/FixedPlugin";
// Custom components
import { NavLink } from "react-router-dom";
// Assets
import { FaChevronLeft } from "react-icons/fa";

function HomeIllustration(props) {
  const { children, illustrationBackground } = props;
  // Chakra color mode
  return (
    <>
    {/* <Flex position='relative' h='max-content'>
      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w='100%'
        maxW={{ md: "66%", lg: "1313px" }}
        mx='auto'
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent='start'
        direction='column'>
        
        {children}
        <Box
          display={{ base: "none", md: "block" }}
          h='100%'
          minH='100vh'
          w={{ lg: "50vw", "2xl": "44vw" }}
          position='absolute'
          right='0px'>
          <Flex
            bg={`url(${illustrationBackground})`}
            
            justify='left'
            align='end'
            w='100%'
            
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            left='50'
            right='50'
            borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}>
          </Flex>
        </Box>
        <Footer />
      </Flex>
      <FixedPlugin />
    </Flex> */}
    <Box
      w={'100%'}
      h={'100vh'}
      /* backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      } */      
      bg={`url(${illustrationBackground})`}      
      /* backgroundSize={'contain '} */
      backgroundSize='100%'
      /* backgroundPosition={'center center'} */
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
      >
      <SimpleGrid columns={1} spacing={10}>
        {/* <Center> */}
          <Box height='500px'>
            <Center>
              {children}
            </Center>
          </Box>
          <Box height='20px'>
            <Center>
              <Footer />
            </Center>
          </Box>
        {/* </Center> */} 
      </SimpleGrid>
           
    </Box>
    </>
  );
}
// PROPS

HomeIllustration.propTypes = {
  illustrationBackground: PropTypes.string,
  image: PropTypes.any,
};

export default HomeIllustration;
