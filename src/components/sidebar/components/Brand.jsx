import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { GestionDocenteLogo} from "../../icons/Icons";
import { HorizonLogo } from "../../icons/Icons";
import { HSeparator } from "../../separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <GestionDocenteLogo h='26px' w='175px' my='32px' color={logoColor} />
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */} {/* logo horizon free */}
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
