import { useContext } from "react"
import { Nav } from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import AuthContext from '../contexts/AuthContext'

const Menu = ()=>{

    const {setIsLogged} = useContext(AuthContext)
    const navigate = useNavigate()

    function logout(){
        setIsLogged(false)
        localStorage.removeItem("sisdoe@token")
        navigate("/login")
        
    }
    return(
        <>
            <Nav defaultActiveKey="/" className="flex-column">
            
                <Link to="/"></Link>
                <Link to="/user">Usuarios</Link>
                <Link onClick={logout}>Sair</Link>

            </Nav>
        
        </>
    )

}
export default Menu