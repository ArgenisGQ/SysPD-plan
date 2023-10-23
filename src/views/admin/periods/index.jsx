/*!

                                                                                                                                                                                                                                                                                                                                       
=========================================================
* 
=========================================================



=========================================================

*/

// Chakra imports
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "../../../assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "../../../components/calendar/MiniCalendar";
import MiniStatistics from "../../../components/card/MiniStatistics";
import IconBox from "../../../components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "../periods/components/CheckTable";
import ComplexTable from "../periods/components/ComplexTable";
import DailyTraffic from "../periods/components/DailyTraffic";
import PieCard from "../periods/components/PieCard";
import Tasks from "../periods/components/Tasks";
import TotalSpent from "../periods/components/TotalSpent";
import WeeklyRevenue from "../periods/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "../periods/variables/columnsData";
import tableDataCheck from "../periods/variables/tableDataCheck.json";
import tableDataComplex from "../periods/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (    
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Earnings'
          value='$350.4'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name='Spend this month'
          value='$642.39'
        />
        <MiniStatistics growth='+23%' name='Sales' value='$574.34' />
        <MiniStatistics
          endContent={
            <Flex me='-16px' mt='10px'>
              <FormLabel htmlFor='balance'>
                <Avatar src={Usa} />
              </FormLabel>
              <Select
                id='balance'
                variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='gba'>GBA</option>
              </Select>
            </Flex>
          }
          name='Your balance'
          value='$1,000'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='New Tasks'
          value='154'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Total Projects'
          value='2935'
        />
      </SimpleGrid> */}

      {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid> */}
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid> */}       

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
              <Text as='h5' isTruncated fontWeight='bold' fontSize='large'>
                Año actual de los periodos:
              </Text>
              <Select placeholder='2023'>
                <option value='option1'>2021</option>
                <option value='option2'>2022</option>
                <option value='option3'>2023</option>
              </Select>
              <Text as='h5' isTruncated fontWeight='bold' fontSize='large'>
                Periodo actual en curso:
              </Text>
              <Select placeholder='2023-3'>
                <option value='option1'>2023-1</option>
                <option value='option2'>2023-2</option>
                <option value='option3'>2023-3</option>
              </Select>
        </SimpleGrid>       
      </SimpleGrid>


                
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          {/* <Tasks /> */}
          <MiniCalendar h='100%' minW='100%' selectRange={true} />
          <MiniCalendar h='100%' minW='100%' selectRange={true} />
          {/* <MiniCalendar h='100%' minW='100%' selectRange={true} />
          <MiniCalendar h='100%' minW='100%' selectRange={true} /> */}
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          {/* <Tasks /> */}
          <MiniCalendar h='100%' minW='100%' selectRange={true} />
          <MiniCalendar h='100%' minW='100%' selectRange={true} />
          {/* <MiniCalendar h='100%' minW='100%' selectRange={true} />
          <MiniCalendar h='100%' minW='100%' selectRange={true} /> */}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
