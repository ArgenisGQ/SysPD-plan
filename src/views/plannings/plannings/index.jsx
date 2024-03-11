/*!

*/

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "../../../views/plannings/plannings/components/DevelopmentTable";
import CheckTable from "../../../../views/plannings/plannings/components/CheckTable";
import ColumnsTable from "../../../../views/plannings/plannings/components/ColumnsTable";
import ComplexTable from "../../../../views/plannings/plannings/components/ComplexTable";
import UsersTable from "./components/PlanningsTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
  columnsDataUsers,
  columnsDataCourses,
  columnsDataPlannings,
} from "../../../views/plannings/plannings/variables/columnsData";
import tableDataDevelopment from "../../../views/plannings/plannings/variables/tableDataDevelopment.json";
import tableDataCheck from "../../../../views/plannings/plannings/variables/tableDataCheck.json";
import tableDataColumns from "../../../../views/plannings/plannings/variables/tableDataColumns.json";
import tableDataComplex from "../../../../views/plannings/plannings/variables/tableDataComplex.json";
import tableDataUsers from "../../../../views/plannings/plannings/variables/tableDataUsers.json";

import useDataPlanning from '../../../hooks/useDataPlanning'; 
import { useEffect, useState } from "react";


export default function Settings(props) {
  const {deleteUser} = props;
  /* const {mutDataUsers,mutDeleteUser } = useDataUser(); */
  const {mutDataPlannings } = useDataPlanning();
  const [dataFullPlannings,setDataFullPlannings] = useState([])

  const LocalDataPlannings = (data) => {
    mutDataPlannings.mutate(data,
    {
      onMutate: () => {
        /* console.log("Ïnicia la mutacion (en hooks -- DATOS)"); */
      },
      onSuccess: (response) => {
        const loadDataFullPlannings = JSON.parse(localStorage.getItem("dataPlannings"))
        setDataFullPlannings(loadDataFullPlannings)
      },
      onError: (error) => { 
        console.log(error);
      },
      onSettled: (response) => {
      
        
      }
    });    
  }
  //
  useEffect(() => {
    LocalDataPlannings();
  }, []);
  
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
          columnsData={columnsDataPlannings}
          /* tableData={tableDataUsers} */
          tableData={dataFullPlannings}
        />
      </SimpleGrid>
    </Box>
  );
}
