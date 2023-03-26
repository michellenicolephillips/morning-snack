import React from 'react';
import Navigation from '../components/navigation';
import { Container, Col, Row } from 'react-bootstrap';

class Header extends React.Component {

     render() {
          return (
               <>
               <header className="header">
               <Container>
                    <Row>
                         <Col><div className="headerLogo"></div></Col>
                    </Row>
                    <Row>
                         <Col><div className='headerNav'><Navigation /></div></Col>
                    </Row>
               </Container>  
               </header>  
               </>  
          )  
     }
}

export default Header;