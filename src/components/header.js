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
                                   <Col sm={4}><div className="headerLogo"></div></Col>
                                   <Col sm={8}><div className='headerNav'><Navigation /></div></Col>
                              </Row>
                         </Container>
                    </header>
               </>
          )
     }
}

export default Header;