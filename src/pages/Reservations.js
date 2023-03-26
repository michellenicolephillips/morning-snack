import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

class Reservations extends React.Component {

     render() {
          return (
               <>
               <div className="reserveHero">

               <h1 className="pageHeader text-center">Reserve a Table</h1>

               <Form>
                    <Form.Group className="mb-3">
                              <Row>
                                   <Form.Group as={Col}>
                                        <Form.Select aria-label="Default select example">
                                             <option>How many people?</option>
                                             <option value="1">2 people</option>
                                             <option value="2">3 people</option>
                                             <option value="3">4 people</option>
                                             <option value="4">5 people</option>
                                             <option value="5">6 or more people</option>
                                        </Form.Select>
                                   </Form.Group>

                                   <Form.Group as={Col}>
                                        <Form.Select aria-label="Default select example">
                                             <option>Month</option>
                                             <option value="1">January</option>
                                             <option value="2">February</option>
                                             <option value="3">March</option>
                                             <option value="4">April</option>
                                             <option value="5">May</option>
                                             <option value="6">June</option>
                                             <option value="7">July</option>
                                             <option value="8">August</option>
                                             <option value="9">September</option>
                                             <option value="10">October</option>
                                             <option value="11">November</option>
                                             <option value="12">December</option>
                                        </Form.Select>
                                   </Form.Group>

                                   <Form.Group as={Col}>
                                        <Form.Select aria-label="Default select example">
                                             <option>Day</option>
                                             <option value="1">01</option>
                                             <option value="2">02</option>
                                             <option value="3">03</option>
                                             <option value="4">04</option>
                                             <option value="5">05</option>
                                             <option value="6">06</option>
                                             <option value="7">07</option>
                                             <option value="8">08</option>
                                             <option value="9">09</option>
                                             <option value="10">10</option>
                                             <option value="11">11</option>
                                             <option value="12">12</option>
                                             <option value="13">13</option>
                                             <option value="14">14</option>
                                             <option value="15">15</option>
                                             <option value="16">16</option>
                                             <option value="17">17</option>
                                             <option value="18">18</option>
                                             <option value="19">19</option>
                                             <option value="20">20</option>
                                             <option value="21">21</option>
                                             <option value="22">22</option>
                                             <option value="23">23</option>
                                             <option value="24">24</option>
                                             <option value="25">25</option>
                                             <option value="26">26</option>
                                             <option value="27">27</option>
                                             <option value="28">28</option>
                                             <option value="29">29</option>
                                             <option value="30">30</option>
                                             <option value="31">31</option>
                                        </Form.Select>
                                   </Form.Group>

                                   <Form.Group as={Col}>
                                        <Form.Select aria-label="Default select example">
                                             <option>Year</option>
                                             <option value="1">2023</option>
                                             <option value="2">2024</option>
                                             <option value="3">2025</option>
                                        </Form.Select>
                                   </Form.Group>

                                   <Form.Group as={Col}>
                                        <Form.Select aria-label="Default select example">
                                             <option>Time</option>
                                             <option value="1">11:00 AM</option>
                                             <option value="2">11:30 AM</option>
                                             <option value="3">12:00 PM</option>
                                             <option value="4">12:30 PM</option>
                                             <option value="5">1:00 PM</option>
                                             <option value="6">1:30 PM</option>
                                             <option value="7">2:00 PM</option>
                                             <option value="8">2:30 PM</option>
                                             <option value="9">3:00 PM</option>
                                             <option value="10">3:30 PM</option>
                                             <option value="11">4:00 PM</option>
                                             <option value="12">4:30 PM</option>
                                        </Form.Select>
                                   </Form.Group>

                                   <Form.Group as={Col}>
                                        <Button variant="danger" type="submit">Find a Table</Button>
                                   </Form.Group>
                              </Row>
                    </Form.Group>
               </Form>
          </div>
          </>  
          )  
     }
}

export default Reservations;