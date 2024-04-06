import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';


function FormUser(){

    const [inputValue,setInputValue] = useState("")
    const handleInputChange = (event) =>{
            setInputValue(event.target.value)
        }

    const [inputValueLogin,setInputValueLogin] = useState("")
    const handleInputLoginChange = (event) =>{
        setInputValueLogin(event.target.value)
        }
    const [inputValueSenha,setInputValueSenha] = useState("")
    const handleInputSenhaChange = (event) =>{
        setInputValueSenha(event.target.value)
        }
    
    const handleSubmit = async event =>{
        event.preventDefault()
    const newUser = {
        
        nome : inputValue,
        senha: inputValueSenha,
        login: inputValueLogin
    }
    
      try{
             await axios.post("http://localhost:3000/user" , newUser)

             setInputValue("")
             setInputValueLogin("")
             setInputValueSenha("")
             await checkList()
      }catch(error){
        console.error("Erro ao enviar dados para o servidor:", error)
      }
    }

    return(
        <>
            <Link to='/user'>
                <Button>Voltar</Button>
            </Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user"> User :</label>
                <input type="text" id="user" value={inputValue} onChange={handleInputChange}/>
        
                <label htmlFor="login"> Login : </label>
                <input type="text" id="login" value={inputValueLogin} onChange={handleInputLoginChange}/>
        
                <label htmlFor="senha"> Senha : </label>
                <input type="password" id="senha" value={inputValueSenha} onChange={handleInputSenhaChange}/>

                <button type="submit">Enviar</button>

            </form>
            
        </>
    )
}
export default FormUser;


    
   
            