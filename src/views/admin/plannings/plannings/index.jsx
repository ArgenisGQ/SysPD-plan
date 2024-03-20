/*!

*/

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "../../../../../views/plannings/plannings/components/DevelopmentTable";
import CheckTable from "../../../../views/admin/plannings/components/CheckTable";
import ColumnsTable from "../../../../views/admin/plannings/components/ColumnsTable";
import ComplexTable from "../../../../views/admin/plannings/components/ComplexTable";
import UsersTable from "./components/PlanningsTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
  columnsDataUsers,
  columnsDataCourses,
} from "../../../../views/admin/plannings/plannings/variables/columnsData";
import tableDataDevelopment from "../../../../views/admin/plannings/variables/tableDataDevelopment.json";
import tableDataCheck from "../../../../views/admin/plannings/variables/tableDataCheck.json";
import tableDataColumns from "../../../../views/admin/plannings/variables/tableDataColumns.json";
import tableDataComplex from "../../../../views/admin/plannings/variables/tableDataComplex.json";
import tableDataUsers from "../../../../views/admin/plannings/variables/tableDataUsers.json";

import useDataCourse from '../../../../hooks/useDataCourse'; 
import { useEffect, useState } from "react";


export default function Settings(props) {
  const {deleteUser} = props;
  /* const {mutDataUsers,mutDeleteUser } = useDataUser(); */
  const {mutDataCourses,mutDeleteCourses } = useDataCourse();
  const [dataFullCourses,setDataFullCourses] = useState([])

  const LocalDataCourses = (data) => {
    mutDataCourses.mutate(data,
    {
      onMutate: () => {
        /* console.log("Ïnicia la mutacion (en hooks -- DATOS)"); */
      },
      onSuccess: (response) => {
        const loadDataFullCourses = JSON.parse(localStorage.getItem("dataCourses"))
        setDataFullCourses(loadDataFullCourses)
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
    LocalDataCourses();
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
          columnsData={columnsDataCourses}
          /* tableData={tableDataUsers} */
          tableData={dataFullCourses}
        />
      </SimpleGrid>
    </Box>
  );
}