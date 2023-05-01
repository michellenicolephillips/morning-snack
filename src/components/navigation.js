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
                         <div className="reserveModal modal-xl modal-dialog-centered">
                              <div className="mb-3 ms-5 me-5">
                                   <Modal
                                        show={this.state.show}
                                        onHide={this.handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                   >
                                        <Modal.Body className="col row align-items-start">
                                             <Form>
                                                  <Form.Group >
                                                       <Row>
                                                            <div className="modalItem">
                                                                 <Form.Group as={Col}>
                                                                      <Form.Label><strong>Party Name:</strong></Form.Label>
                                                                      <Form.Control type="name" placeholder="Party Name" />
                                                                 </Form.Group>
                                                            </div>

                                                            <div className="modalItem">
                                                                 <Form.Group as={Col}>
                                                                      <Form.Label><strong>Number of Guests:</strong></Form.Label>
                                                                      <Form.Control type="number" min="1" max="20" placeholder="Number of Guests" />
                                                                 </Form.Group>
                                                            </div>

                                                            <div className="modalItem">
                                                                 <Form.Group as={Col}>
                                                                      <Form.Label><strong>Date of Visit:</strong></Form.Label>
                                                                      <Form.Control type="date" placeholder="Enter date of visit" />
                                                                 </Form.Group>
                                                            </div>

                                                            <div className="modalItem">
                                                                 <Form.Group as={Col}>
                                                                      <Form.Label><strong>Time of Visit:</strong></Form.Label>
                                                                      <Form.Control type="time" min="10:00" max="17:00" placeholder="Enter time of visit" />
                                                                 </Form.Group>
                                                            </div>

                                                            <div className="findTable">
                                                                 <Form.Group as={Col}>
                                                                      <Button className="btn-lg" variant="danger" type="submit">Find a Table</Button>
                                                                 </Form.Group>
                                                            </div>
                                                       </Row>
                                                  </Form.Group>
                                             </Form>
                                        </Modal.Body>

                                        <Modal.Footer>
                                             <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                                        </Modal.Footer>

                                   </Modal>
                              </div>
                         </div>
                    </Nav >
               </>
          )
     }
}

export default Navigation;
