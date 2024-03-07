/*!

*/

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "../../../../views/admin/users/components/DevelopmentTable";
import CheckTable from "../../../../views/admin/users/components/CheckTable";
import ColumnsTable from "../../../../views/admin/users/components/ColumnsTable";
import ComplexTable from "../../../../views/admin/users/components/ComplexTable";
import UsersTable from "./components/CoursesTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
  columnsDataUsers,
  columnsDataCourses,
} from "../../../../views/admin/courses/courses/variables/columnsData";
import tableDataDevelopment from "../../../../views/admin/users/variables/tableDataDevelopment.json";
import tableDataCheck from "../../../../views/admin/users/variables/tableDataCheck.json";
import tableDataColumns from "../../../../views/admin/users/variables/tableDataColumns.json";
import tableDataComplex from "../../../../views/admin/users/variables/tableDataComplex.json";
import tableDataUsers from "../../../../views/admin/users/variables/tableDataUsers.json";

/* import useDataUser from '../../../../hooks/useDataUser'; */
import useDataCourse from '../../../../hooks/useDataCourse'; 
import { useEffect, useState } from "react";



export default function Settings(props) {
  const {deleteUser} = props;
  /* const {mutDataUsers,mutDeleteUser } = useDataUser(); */
  const {mutDataCourses,mutDeleteCourses } = useDataCourse();
  const [dataFullCourses,setDataFullCourses] = useState([])

  
  /* console.log("heads (index): ", columnsDataCourses) */

  const LocalDataCourses = (data) => {
    /* console.log("datos de usuario -- 050224"); */
    mutDataCourses.mutate(data,
    {
      onMutate: () => {
        /* console.log("Ïnicia la mutacion (en hooks -- DATOS)"); */
      },
      onSuccess: (response) => {
        /* console.log("response(DATOS USER out): ",response?.data) */
        const loadDataFullCourses = JSON.parse(localStorage.getItem("dataCourses"))
        setDataFullCourses(loadDataFullCourses)
      },
      onError: (error) => { 
        console.log(error);
      },
      onSettled: (response) => {
        
        /* const status = localStorage.getItem(["status"]);
        const message = localStorage.getItem(["message"]);
        console.log ("status (test -- out): ", status);
        console.log ("message (test -- otro hooks -- out): ", message); */
        
      }
    });    
  }
  //
  useEffect(() => {
    /* console.log("EFECTO...."); */
    LocalDataCourses();
  }, []);

  /* console.log("columnsDataCourse(index):", columnsDataCourse) */
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
