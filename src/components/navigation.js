import React from 'react';
import { Button, Form, Modal, Nav, NavItem, NavLink, Col, Row } from 'react-bootstrap';


class Navigation extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               show: false
          };
          this.handleClose = this.handleClose.bind(this);
          this.handleShow = this.handleShow.bind(this);
     }

     handleClose = () => this.setState({ show: false });
     handleShow = () => this.setState({ show: true });

     render() {
          return (
               <>
               <Nav className="justify-content-end mt-4 mb-4" gap={5}>
                    <NavItem>
                         <NavLink href="/">MENU</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink href="/catering">CATERING</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink href="/about">ABOUT</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink href="/order">ORDER</NavLink>
                    </NavItem>    

                         <Button variant="warning" className="reserveButton" onClick={this.handleShow}><strong>BOOK A RESERVATION</strong></Button>
                         <Modal
                              show={this.state.show}
                              onHide={this.handleClose}
                              backdrop="static"
                              keyboard={false}
                         >
                              <Modal.Body>
                                   <Form>
                                        <Form.Group className="mb-3">
                                             <Row>
                                                  <Form.Group as={Col}>
                                                       <Form.Label>Guests</Form.Label>
                                                       <Form.Control type="number" placeholder="Number of Guests" />
                                                  </Form.Group>

                                                  <Form.Group as={Col}>
                                                       <Form.Label>Date</Form.Label>
                                                       <Form.Control type="date" placeholder="Enter date" />
                                                  </Form.Group>

                                                  <Form.Group as={Col}>
                                                       <Form.Label>Time</Form.Label>
                                                       <Form.Control type="time" min="10:00" max="17:00" placeholder="Enter time" />
                                                  </Form.Group>

                                                  <Form.Group as={Col}>
                                                       <Button variant="danger" type="submit">Find a Table</Button>
                                                  </Form.Group>
                                             </Row>
                                        </Form.Group>
                                   </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                   <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                              </Modal.Footer>
                         </Modal>
                    </Nav>
               </>
          )
     }
}

export default Navigation;
