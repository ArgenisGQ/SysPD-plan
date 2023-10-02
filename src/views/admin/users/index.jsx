/*!

*/

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "../../../views/admin/users/components/DevelopmentTable";
import CheckTable from "../../../views/admin/users/components/CheckTable";
import ColumnsTable from "../../../views/admin/users/components/ColumnsTable";
import ComplexTable from "../../../views/admin/users/components/ComplexTable";
import UsersTable from "../../../views/admin/users/components/UsersTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
  columnsDataUsers,
} from "../../../views/admin/users/variables/columnsData";
import tableDataDevelopment from "../../../views/admin/users/variables/tableDataDevelopment.json";
import tableDataCheck from "../../../views/admin/users/variables/tableDataCheck.json";
import tableDataColumns from "../../../views/admin/users/variables/tableDataColumns.json";
import tableDataComplex from "../../../views/admin/users/variables/tableDataComplex.json";
import tableDataUsers from "../../../views/admin/users/variables/tableDataUsers.json";
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
        {/* <CheckTable 
          columnsData={columnsDataCheck} 
          tableData={tableDataCheck} 
        /> */}
        {/* <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}
        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
        <UsersTable
          columnsData={columnsDataUsers}
          tableData={tableDataUsers}
        />
      </SimpleGrid>
    </Box>
  );
}