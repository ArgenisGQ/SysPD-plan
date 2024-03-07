import {
  Flex,
  Table,
  Thead,
  Tbody,
  Progress,
  Icon,
  Tr,
  Th,
  Td,
  Text,  
  useColorModeValue,
  Button, 
  ButtonGroup,
  IconButton,// 
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from "@chakra-ui/icons";
import React,  { useMemo, useState, useEffect } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { useNavigate } from 'react-router-dom';

// Custom components
import Card from "../../../../../components/card/Card";
import Menu from "../../../../../components/menu/MainMenu";
// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
//
/* import useDataUser from '../../../../../hooks/useDataUser'; */
import useDataCourse from '../../../../../hooks/useDataCourse';
import DeleteUser from "./DeleteUser";

export default function ColumnsTable(props) {
  
  const { columnsData, tableData } = props;

  /* const { mutDeleteUser, mutDataUsers } = useDataUser(); */
  const { mutDeleteCourse, mutDataCourses} = useDataCourse();


  const tableDataX = tableData
  console.log("01 datos head!!: ",columnsData)
  console.log("test")
  const navigate = useNavigate();
  const[deleting, setDeleting] = useState(false);
  const[idCourse, setIdCourse] = useState('');
  const[tableHeadLoad, setTableHeadLoad] = useState(columnsData);
  const[tableDataLoad, setTableDataLoad] = useState(tableData);
  const[monitor, setMonitor] = useState(false)
  const[dataFullCourses,setDataFullCourses] = useState({})
  
  /* const tableDataX = tableData */
  
  /* setTableDataLoad(tableDataX) */

  console.log("datos HEAD (FOR INDEX): ",tableHeadLoad )
  console.log("DATOS base: ",tableData )
  console.log("DATOS PRIMERO pre --: ",tableDataLoad)
  console.log("DATOS EN X: ",tableDataX)
  console.log("valor MONITOR: ",monitor)
  useEffect(() => {
    if (!monitor) {
      setTableHeadLoad(columnsData);
      setTableDataLoad(tableDataX);
    } 
  })
  
  console.log("DATOS PRIMERO --: ",tableDataLoad)
  console.log("DATOS SEGUNDO --: ",dataFullCourses)
  /* const dataReload = () => {
    console.log('test')
    setTableDataLoad(tableData);
  } */

  /* console.log("01 datos primera parte en componente!!: ",tableData) */
  /* console.log("01-1 datos en ESTADO!!: ",tableDataLoad) */

  /* dataReload(); */

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableDataLoad, [tableDataLoad]);


 /*  useEffect(() => {
    
    setTableDataLoad(tableDataX);
  },[]) */





  /* console.log("02 data dentro de la tabla: ",data) */

  const tableInstance = useTable(
    {
      columns,
      data,
      /* initialState: { pageIndex: 2 } */
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,//
    //----//
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = tableInstance;
  initialState.pageSize = 10;
  initialState.pageIndex = 0;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  /* const textColor = useColorModeValue("navy.700", "white"); */
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");


  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: false});

  const LocalDeleteCourse = (data) => {
    console.log("Mostrando MATERIA--DELETE COURSE-- :: ", data)
    mutDeleteCourse.mutate(data,
      {
        onMutate: () => {
          console.log("Ïnicia BORRADO de MATERIA");
        },
        onSuccess: (response) => {
          console.log("response BORRAR MATERIA:", response);
          const loadDataFullCourses = JSON.parse(localStorage.getItem("dataCourses"))
          setDataFullCourses(loadDataFullCourses)
          console.log("CARGA DE MATERIA LUEGO DEL DELETE: ",loadDataFullCourses)
          setMonitor(true);
          setTableDataLoad(loadDataFullCourses);

          
          /* setTableDataLoad(loadDataFullUsers) */
          /* setMonitor(false) */
          if (loadDataFullCourses) {
            console.log("prueba interna - control")
          }
          
        },
        onError: (error) => {
          console.log("Errores BORRAR MATERIA:",error);
        },
        onSettled: (response) => {
          console.log("RESPONSE BORRAR MATERIA: ",response )
          console.log("Terminado el proceso de BORRAR MATERIA")
        }
      })    
  };

  

  const yesDelete = () => {
    console.log("si, borrar idCourse: ", idCourse);
    LocalDeleteCourse(idCourse)
    /* setDeleting(true); */
    onClose();
  }

  const notDelete = () => {
    console.log("no, sin borrar");
    setIdCourse(''); //Borrar id del estado.
    onClose();
  }

  const editCourse = (id) => {
    console.log("funcion editar usuario ID: ", id)
    navigate('/admin/courseedit/'+id);
  }

  const deleteCourseLink = (id) => {
    console.log("funcion de borrar materia ID: ", id)
    setIdCourse(id);
    onOpen();
    /* if (deleting) {
      console.log("borrando u usuario...")
      LocalDeleteUser(id)
      onClose();
    } */
  }

/*   console.log("DATOS PARA LA TABLA: ", page) */

  return (
    <Card
      direction='column'
      w='200%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px='25px' justify='space-between' mb='20px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Asignaturas
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "ID") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "ASIGNATURA") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "CODIGO") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "SECCION") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "EMAIL") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "ROL") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );   
                  } else if (cell.column.Header === "STATUS") {
                    data = (
                      <Flex align='center'>
                        <Icon
                          w='24px'
                          h='24px'
                          me='5px'
                          color={
                            cell.value === "Approved"
                              ? "green.500"
                              : cell.value === "Disable"
                              ? "red.500"
                              : cell.value === "Error"
                              ? "orange.500"
                              : null
                          }
                          as={
                            cell.value === "Approved"
                              ? MdCheckCircle
                              : cell.value === "Disable"
                              ? MdCancel
                              : cell.value === "Error"
                              ? MdOutlineError
                              : null
                          }
                        />
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "FECHA") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "PROGRESO") {
                    data = (
                      <Flex align='center'>
                        <Progress
                          variant='table'
                          colorScheme='brandScheme'
                          h='8px'
                          w='108px'
                          value={cell.value}
                        />                        
                      </Flex>
                      
                    );
                  } else if (cell.column.Header === " ") {
                    data = (
                      <Flex align='center'>
                        {/* <Progress
                          variant='table'
                          colorScheme='brandScheme'
                          h='8px'
                          w='108px'
                          value={cell.value}
                        /> */}
                        <Button 
                        colorScheme="blue"
                        variant="outline" 
                        size="sm"
                        onClick={()=>editCourse(cell.row.original.id)}> 
                        EDITAR
                        </Button> 
                      </Flex>
                    );
                  } else if (cell.column.Header === "") {
                    data = (
                      <Flex align='center'>
                        {/* <Progress
                          variant='table'
                          colorScheme='brandScheme'
                          h='8px'
                          w='108px'
                          value={cell.value}
                        /> */}
                        <Button 
                        colorScheme="red"
                        variant="outline" 
                        size="sm"
                        onClick={()=>deleteCourseLink(cell.row.original.id)}> 
                        BORRAR
                        </Button> 
                      </Flex>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor='transparent'>
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      {/* Paginacion */}{/* --------------------------------------------------------------------- */}
      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="Primera página">
            <IconButton
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previa página">
            <IconButton
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink="0" mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {pageIndex + 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {pageOptions.length}
            </Text>
          </Text>
          <Text flexShrink="0">Ir a:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={pageOptions.length}
            onChange={(value) => {
              const page = value ? value - 1 : 0;
              gotoPage(page);
            }}
            defaultValue={pageIndex + 1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={32}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex>
          <Tooltip label="Siguiente página">
            <IconButton
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Ultima página">
            <IconButton
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
      {/*         MODAL */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>Alerta</ModalHeader> */}
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Center> */}
                <Text
                  mb='36px'
                  ms='4px'
                  color={textColorSecondary}
                  fontWeight='400'
                  fontSize='md'
                  textAlign={[ 'left', 'center' ]}>
                  {/* Coloque su email y su clave para ingresar! */}
                  {/* {modalMessage}     */}   
                  <p>ASIGNATURA BORRADA</p>
                  {/* {edit ? 'Usuario Editado' : 'Usuario Creado'} */}     
                </Text>
              {/* </Center> */}  
            </ModalBody>  
            <ModalFooter>
              <Button
                mr={20}
                fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='50%'
                h='50'
                mb='24px'                
                /* onClick={onClose} */
                onClick={yesDelete}
                /* onClick={() => {setDeleting(true)}} */
                type='submit'>
                SI
              </Button>
              <Button
                fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='50%'
                h='50'
                mb='24px'                
                /* onClick={onClose} */
                onClick={notDelete}
                /* onClick={() => setDeleting(false)} */
                type='submit'>
                NO
              </Button>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Ok
              </Button> */}
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Card>
  );
}
