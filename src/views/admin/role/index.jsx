/*!

*/

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "../role/components/DevelopmentTable";
import CheckTable from "../role/components/CheckTable";
import ColumnsTable from "../role/components/ColumnsTable";
import ComplexTable from "../role/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "../role/variables/columnsData";
import tableDataDevelopment from "../role/variables/tableDataDevelopment.json";
import tableDataCheck from "../role/variables/tableDataCheck.json";
import tableDataColumns from "../role/variables/tableDataColumns.json";
import tableDataComplex from "../role/variables/tableDataComplex.json";
import React from "react";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>
        {/* <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        /> */}
        <CheckTable 
          columnsData={columnsDataCheck} 
          tableData={tableDataCheck} />
        {/* <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}
        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
      </SimpleGrid>
    </Box>
  );
}
