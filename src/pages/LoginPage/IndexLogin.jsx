import { useContext } from 'react'
import {Container,Col,Row,Form,Button} from 'react-bootstrap'
import AuthContext from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'


function IndexLogin(){

    const {setIsLogged} = useContext(AuthContext)
    const navigate = useNavigate()

    const style = {
        border: '1px solid #CCC',
        borderRadius: '10px',
        marginTop: '100px',
        padding: '10px'
    };

    async function login() {
        // const response = await Api.get("usuarios?email=admin@admin.com.br&senha=123123");
        // LOGICA PARA USAR AXIOS - PARA VER SE O USUARIO EXISTE NO BANCO.
        // if(response) {
            // const token = response.token;
            const token = "dkkj33232dkldlkj28";
            localStorage.setItem('sisdoe@token', token);
            setIsLogged(true);
            navigate('/');
        // } else {
        //     alert("Usuario com email ou senha incorreta");
        // }
        
        
    }
    return(
        <>
            <Container>
                <Row>
                    <Col style={style} md={{span:4,offset:4}}>
                        <form action="">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text"/>
                        
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password"/>
                          
                            <Button type='button' onClick={login} variant='primary'>Acessar</Button>
                        </form>
                 
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default IndexLogin