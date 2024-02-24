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
import Card from "../../../../components/card/Card";
import Menu from "../../../../components/menu/MainMenu";
// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
//
import useDataUser from '../../../../hooks/useDataUser';
import DeleteUser from "./DeleteUser";

export default function ColumnsTable(props) {
  
  const { columnsData, tableData } = props;

  const { mutDeleteUser, mutDataUsers } = useDataUser();


  const tableDataX = tableData
  /* console.log("01 datos head!!: ",columnsData) */
  const navigate = useNavigate();
  const[deleting, setDeleting] = useState(false);
  const[idUser, setIdUser] = useState('');
  const[tableDataLoad, setTableDataLoad] = useState(tableData);
  const[monitor, setMonitor] = useState(false)
  const[dataFullUsers,setDataFullUsers] = useState({})
  
  /* const tableDataX = tableData */
  
  /* setTableDataLoad(tableDataX) */

  console.log("DATOS base: ",tableData )
  console.log("DATOS PRIMERO pre --: ",tableDataLoad)
  console.log("DATOS EN X: ",tableDataX)
  console.log("valor MONITOR: ",monitor)
  useEffect(() => {
    if (!monitor) {
      setTableDataLoad(tableDataX);
    } 
  })
  
  console.log("DATOS PRIMERO --: ",tableDataLoad)
  console.log("DATOS SEGUNDO --: ",dataFullUsers)
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

  const LocalDeleteUser = (data) => {
    console.log("Mostrando usuario--DELETE USER-- :: ", data)
    mutDeleteUser.mutate(data,
      {
        onMutate: () => {
          console.log("Ïnicia BORRADO de usuario");
        },
        onSuccess: (response) => {
          console.log("response BORRAR USuARIO:", response);
          const loadDataFullUsers = JSON.parse(localStorage.getItem("dataUsers"))
          setDataFullUsers(loadDataFullUsers)
          console.log("CARGA DE UUSUARIOS LUEGO DEL DELETE: ",loadDataFullUsers)
          setMonitor(true);
          setTableDataLoad(loadDataFullUsers);

          
          /* setTableDataLoad(loadDataFullUsers) */
          /* setMonitor(false) */
          if (loadDataFullUsers) {
            console.log("prueba interna - control")
          }
          
        },
        onError: (error) => {
          console.log("Errores BORRAR usuarios:",error);
        },
        onSettled: (response) => {
          console.log("RESPONSE BORRAR usuarios: ",response )
          console.log("Terminado el proceso de BORRAR usuario")
        }
      })    
  };

  

  const yesDelete = () => {
    console.log("si, borrar idUser: ", idUser);
    LocalDeleteUser(idUser)
    /* setDeleting(true); */
    onClose();
  }

  const notDelete = () => {
    console.log("no, sin borrar");
    setIdUser(''); //Borrar id del estado.
    onClose();
  }

  const editUser = (id) => {
    console.log("funcion editar usuario ID: ", id)
    navigate('/admin/useredit/'+id);
  }

  const deleteUserLink = (id) => {
    console.log("funcion de borrar usuario ID: ", id)
    setIdUser(id);
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
          Usuarios
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
                  } else if (cell.column.Header === "USUARIO") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "NOMBRE") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "DOCUMENTO") {
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
                        onClick={()=>editUser(cell.row.original.id)}> 
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
                        onClick={()=>deleteUserLink(cell.row.original.id)}> 
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
                  <p>USUARIO BORRADO</p>
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
