import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const endpoint = 'http://127.0.0.1:8000/api'


function AllUsers() {
/* const AllUsersre = () => { */
    const [ users, setUsers ] = useState( [] )
    /* console.log('hi');  */
    /* useEffect( ()=>{
        getAllUsers()
    }, [])

    const getAllUsers = async() => {
        const response = await axios.get ('${endpoint}/all')
        setUsers(response)       
    } */
    ////////////////////////////////
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () =>{
        try {
            /* const result = await axios.get('https://jsonplaceholder.typicode.com/posts'); */
            /* const result = await axios.get('http://127.0.0.1:8000/api/index'); */
            const result = await axios.get(`${endpoint}/index`,
            {
                headers: {
                  'Authorization': `Bearer ${sessionStorage.accessToken}` 
                }
            })
            /* console.log(result.data); */
            setUsers(result.data);
        } catch (err) {
            console.log('something wrong');
        }         
    }

    console.log(sessionStorage.accessToken);

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