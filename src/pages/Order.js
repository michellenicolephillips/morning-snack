import React from 'react';
import { Container, Form, InputGroup, FormControl, Button, Modal, Accordion } from 'react-bootstrap';

class Order extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               appetizers: [
                    { id: 1, name: "Pastry Board", price: 15, quantity: 0 },
                    { id: 2, name: "Seasoned Fries", price: 8, quantity: 0 },
                    { id: 3, name: "Waffle Board", price: 20, quantity: 0 },
                    { id: 4, name: "Cheese Board", price: 15, quantity: 0 }
               ],
               soupsAndSalads: [
                    { id: 1, name: "Ceasar Salad", price: 5, quantity: 0 },
                    { id: 2, name: "Cobb Salad", price: 5, quantity: 0 },
                    { id: 3, name: "Southwestern Salad", price: 6, quantity: 0 },
                    { id: 4, name: "Soup of the Day", price: 7, quantity: 0 }
               ],
               sandwiches: [
                    { id: 1, name: "BLT", price: 13, quantity: 0 },
                    { id: 2, name: "Grilled Cheese", price: 10, quantity: 0 },
                    { id: 3, name: "Breakfast Bagel", price: 9, quantity: 0 },
                    { id: 4, name: "Veggie Sandwich", price: 10, quantity: 0 }
               ],
               entrees: [
                    { id: 1, name: "French Toast", price: 14, quantity: 0 },
                    { id: 2, name: "Pancakes", price: 16, quantity: 0 },
                    { id: 3, name: "Eggs Benedict", price: 15, quantity: 0 },
                    { id: 4, name: "Poke Bowl", price: 17, quantity: 0 },
                    { id: 5, name: "Salmon", price: 25, quantity: 0 },
                    { id: 6, name: "Brunch Burger", price: 15, quantity: 0 }
               ],
               desserts: [
                    { id: 1, name: "Cheesecake", price: 7, quantity: 0 },
                    { id: 2, name: "Cinnamon Rolls", price: 9, quantity: 0 },
                    { id: 3, name: "Sundae", price: 8, quantity: 0 }
               ],
               drinks: [
                    { id: 1, name: "Coffee", price: 7, quantity: 0 },
                    { id: 2, name: "Tea", price: 7, quantity: 0 },
                    { id: 3, name: "Fruit Juice", price: 7, quantity: 0 },
                    { id: 4, name: "Fountain Drink", price: 7, quantity: 0 },
                    { id: 5, name: "Mimosa", price: 7, quantity: 0 },
                    { id: 6, name: "Bloody Mary", price: 7, quantity: 0 }
               ],
               tipPercentage: 18,
               total: 0,
               showOrderConfirmation: false
          };
          this.handleClose = this.handleClose.bind(this);
          this.handleShow = this.handleShow.bind(this);
     }

     handleClose = () => this.setState({ showOrderConfirmation: false });
     handleShow = () => this.setState({ showOrderConfirmation: true });


     handleQuantityChange(e, category, item) {
          const quantity = parseInt(e.target.value);
          const newState = this.state[category].map((i) => {
               if (i.id === item.id) {
                    return { ...i, quantity: quantity };
               }
               return i;
          });

          this.setState({
               [category]: newState,
               total: this.calculateSubtotal(),
          });
     }

     calculateSubtotal() {
          let subtotal = 0;
          const categories = ['appetizers', 'soupsAndSalads', 'sandwiches', 'entrees', 'desserts', 'drinks'];
          for (const category of categories) {
               for (const item of this.state[category]) {
                    subtotal += item.quantity * item.price;
               }
          }
          return subtotal;
     }

     calculateTotal() {
          if (this.calculateSubtotal() === 0) {
               const total = 0;
               return total;
          } else {
               const subtotal = this.calculateSubtotal();
               const tipPercentage = parseFloat((this.state.tipPercentage) / 100);
               const tipAmount = subtotal * tipPercentage;
               const total = subtotal + tipAmount;
               return total;
          }
     }


     render() {
          return (
               <div>
                    <div className="orderHero"></div>
                    <p id="orderIntro" className="text-center justify-content-center">Not in the mood to dine in?
                         <strong> Morning Snack</strong> offers take out so you can take your brunch wherever you'd like!
                         When your order is ready, see the host stand to pick it up.
                    </p>
                    <h1 className="pageHeader text-center">ORDER NOW</h1>
                    <Container>
                         <Form>
                              <Accordion defaultActiveKey={['0']} alwaysOpen >
                                   <Accordion.Item  eventKey="0">
                                        <Accordion.Header>
                                             <h3 className="orderCategory">Appetizers</h3>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                             {this.state.appetizers.map((item) => (
                                                  <InputGroup className="mb-3" key={item.id}>
                                                       <InputGroup.Text>${item.price.toFixed(2)}</InputGroup.Text>
                                                       <InputGroup.Text>{item.name}</InputGroup.Text>
                                                       <FormControl
                                                            type="number"
                                                            min="0"
                                                            aria-label=""
                                                            value={item.quantity}
                                                            onChange={(e) => this.handleQuantityChange(e, "appetizers", item)}
                                                       />
                                                  </InputGroup>
                                             ))}
                                        </Accordion.Body>
                                   </Accordion.Item>
                                   <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                             <h3 className="orderCategory">Soups & Salads</h3>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                             {this.state.soupsAndSalads.map((item) => (
                                                  <InputGroup className="mb-3" key={item.id}>
                                                       <InputGroup.Text>${item.price.toFixed(2)}</InputGroup.Text>
                                                       <InputGroup.Text>{item.name}</InputGroup.Text>
                                                       <FormControl
                                                            type="number"
                                                            min="0"
                                                            aria-label=""
                                                            value={item.quantity}
                                                            onChange={(e) => this.handleQuantityChange(e, "soupsAndSalads", item)}
                                                       />
                                                  </InputGroup>
                                             ))}
                                        </Accordion.Body>
                                   </Accordion.Item>
                                   <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                             <h3 className="orderCategory">Sandwiches</h3>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                             {this.state.sandwiches.map((item) => (
                                                  <InputGroup className="mb-3" key={item.id}>
                                                       <InputGroup.Text>${item.price.toFixed(2)}</InputGroup.Text>
                                                       <InputGroup.Text>{item.name}</InputGroup.Text>
                                                       <FormControl
                                                            type="number"
                                                            min="0"
                                                            aria-label=""
                                                            value={item.quantity}
                                                            onChange={(e) => this.handleQuantityChange(e, "sandwiches", item)}
                                                       />
                                                  </InputGroup>
                                             ))}
                                        </Accordion.Body>
                                   </Accordion.Item>
                                   <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                             <h3 className="orderCategory">Entrees</h3>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                             {this.state.entrees.map((item) => (
                                                  <InputGroup className="mb-3" key={item.id}>
                                                       <InputGroup.Text>${item.price.toFixed(2)}</InputGroup.Text>
                                                       <InputGroup.Text>{item.name}</InputGroup.Text>
                                                       <FormControl
                                                            type="number"
                                                            min="0"
                                                            aria-label=""
                                                            value={item.quantity}
                                                            onChange={(e) => this.handleQuantityChange(e, "entrees", item)}
                                                       />
                                                  </InputGroup>
                                             ))}
                                        </Accordion.Body>
                                   </Accordion.Item>
                                   <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                             <h3 className="orderCategory">Desserts</h3>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                             {this.state.desserts.map((item) => (
                                                  <InputGroup className="mb-3" key={item.id}>
                                                       <InputGroup.Text>${item.price.toFixed(2)}</InputGroup.Text>
                                                       <InputGroup.Text>{item.name}</InputGroup.Text>
                                                       <FormControl
                                                            type="number"
                                                            min="0"
                                                            aria-label=""
                                                            value={item.quantity}
                                                            onChange={(e) => this.handleQuantityChange(e, "desserts", item)}
                                                       />
                                                  </InputGroup>
                                             ))}
                                        </Accordion.Body>
                                   </Accordion.Item>
                              <Accordion.Item eventKey="5">
                                   <Accordion.Header>
                                   <h3 className="orderCategory">Drinks</h3>
                                   </Accordion.Header>
                                   <Accordion.Body>
                                        {this.state.drinks.map((item) => (
                                             <InputGroup className="mb-3" key={item.id}>
                                                  <InputGroup.Text>${item.price.toFixed(2)}</InputGroup.Text>
                                                  <InputGroup.Text>{item.name}</InputGroup.Text>
                                                  <FormControl
                                                       type="number"
                                                       min="0"
                                                       aria-label=""
                                                       value={item.quantity}
                                                       onChange={(e) => this.handleQuantityChange(e, "drinks", item)}
                                                  />
                                             </InputGroup>
                                        ))}
                                   </Accordion.Body>
                                   </Accordion.Item>
                                   </Accordion>
                                   <InputGroup className="mb-3 totalSection">
                                        <InputGroup.Text>Subtotal:</InputGroup.Text>
                                        <InputGroup.Text>${this.calculateSubtotal().toFixed(2)}</InputGroup.Text>
                                   </InputGroup>
                                   <InputGroup className="mb-3">
                                        <InputGroup.Text>Tip (%):</InputGroup.Text>
                                        <FormControl
                                             type="number"
                                             min="0"
                                             aria-label="Tip percentage"
                                             value={this.state.tipPercentage || 18}
                                             onChange={(e) => this.setState({ tipPercentage: e.target.value })}
                                        />
                                   </InputGroup>
                                   <InputGroup className="mb-3">
                                        <InputGroup.Text>Total:</InputGroup.Text>
                                        <InputGroup.Text>${this.calculateTotal().toFixed(2)}</InputGroup.Text>
                                   </InputGroup>
                         </Form>
                         <Button className="orderButton" variant="warning" onClick={this.handleShow}>Submit Order</Button>
                    </Container>
                    <Modal
                         show={this.state.showOrderConfirmation}
                         onHide={this.handleClose}
                         backdrop="static"
                         keyboard={false}
                         centered
                    >
                         <Modal.Body className="col row align-items-start">
                              Your total is ${this.calculateTotal().toFixed(2)}. Your order will be ready in 30 minutes. Please see the host stand to pick up. Thank you for dining with Morning Snack!
                         </Modal.Body>

                         <Modal.Footer>
                              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                         </Modal.Footer>

                    </Modal>
               </div>
          )
     }
}

export default Order;