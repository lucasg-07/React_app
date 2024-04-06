import {Container,Row,Col} from 'react-bootstrap'
import Menu from './menu'

const Layout = ({children}) =>{
    return(
        <>
        <Container fluid>
            <Row style={{background : 'black'}}>
                <Col>
                    Topo
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <Menu/>
                </Col>
                <Col md={10}>
                    {children}
                </Col>    
            </Row>
        </Container>
        </>
    )
}

export default Layout