import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormUser from "./FormUser";
import axios from 'axios'

function IndexUser(){

    const[data,setData] = useState([]);


    async function checkList(){
      const response =  await axios.get('http://localhost:3000/user')
      console.log(response.data)
      setData(response.data)
    }
    useEffect(() =>{
        checkList();
    }, [])

    return(
        <>

            <FormUser checkList={checkList}></FormUser>

            <Table hover striped>
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>LOGIN</th>
                        <th>AÇÕES</th>
                    </tr>
               </thead>
               <tbody>
                
                {data.map((item,posicao) =>(
                    <tr key={posicao}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.login}</td>
                        <td>{item.senha}</td>
                    </tr>
                ))}
                </tbody>

            </Table>
            <Link to='/user/new'>
                <Button type="button">New User</Button>
            </Link>
        </>
    )
}
export default IndexUser    