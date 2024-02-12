import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from 'react-query';
const endpoint = 'http://127.0.0.1:8000/api/users'


function AllUsers() {
/* const AllUsersre = () => { */
    const [ users, setUsers ] = useState( [] )
    const queryClient = useQueryClient();
    /* console.log('hi');  */
    /* useEffect( ()=>{
        getAllUsers()
    }, [])

    const getAllUsers = async() => {
        const response = await axios.get ('${endpoint}/all')
        setUsers(response)       
    } */
    console.log("Token in all: ",queryClient.getQueryData(["userAuth"]));
    ////////////////////////////////
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () =>{
        try {
            /* const result = await axios.get('https://jsonplaceholder.typicode.com/posts'); */
            /* const result = await axios.get('http://127.0.0.1:8000/api/index'); */
            /* {console.log("token de entrada: ",queryClient.getQueryData(["userAuth"]))} */
            {console.log("token de entrada LOCALSTORAGE: ",localStorage.getItem(["userAuth"]))}
            const result = await axios.get(`${endpoint}/`,
            {
                headers: {
                  /* 'Authorization': `Bearer ${sessionStorage.accessToken}` */
                  /* 'Authorization': `Bearer ${queryClient.getQueryData(["userAuth"])}` */
                  'Authorization': `Bearer ${localStorage.getItem(["userAuth"])}`  
                }
            })
            /* console.log(result.data); */
            setUsers(result.data);
        } catch (err) {
            console.log('something wrong');
            console.log("error: ",err)
        }         
    }

    console.log("Token out all: ",queryClient.getQueryData(["userAuth"]));

    /* console.log('usuarios');
    console.log(users); */

    /* const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled); */

  return (
    
    <div>
        <div className='d-grid gap-2'></div>
        <table className='table table-striped'>
            <thead>
                <tr>
                   <th>Nombre de usuario</th> 
                   <th>Usuario</th>
                   <th>Email</th>
                </tr>
            </thead>
            <tbody>
                { users.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )) }
            </tbody>
        </table>        
    </div>
  )
}

export default AllUsers