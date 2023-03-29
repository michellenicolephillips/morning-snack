import React from 'react';
import { Container, Form, InputGroup, FormControl } from 'react-bootstrap';

class Checkout extends React.Component {
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
               total: 0          
          }
     }

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
          } else  {
               const subtotal = this.calculateSubtotal();
               const tipPercentage = parseFloat((this.state.tipPercentage)/100);
               const tipAmount = subtotal * tipPercentage;
               const total = subtotal + tipAmount;
               return total;
          }
        }


     render() {
          return (
               <Container>
                    <Form>
                         <h3>Appetizers</h3>
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
                         <h3>Soups & Salads</h3>
                         {this.state.soupsAndSalads.map((item) => (
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
                         <h3>Sandwiches</h3>
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
                         <h3>Entrees</h3>
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
                         <h3>Desserts</h3>
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
                         <h3>Drinks</h3>
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
                         <InputGroup className="mb-3">
                              <InputGroup.Text>Subtotal:</InputGroup.Text>
                              <InputGroup.Text>${this.calculateSubtotal().toFixed(2)}</InputGroup.Text>
                         </InputGroup>
                         <InputGroup className="mb-3">
                              <InputGroup.Text>Tip (%):</InputGroup.Text>
                              <FormControl
                                   type="number"
                                   min="0"
                                   aria-label="Tip percentage"
                                   value={this.state.tipPercentage || ''}
                                   onChange={(e) => this.setState({ tipPercentage: e.target.value })}
                              />
                         </InputGroup>
                         <InputGroup className="mb-3">
                              <InputGroup.Text>Total:</InputGroup.Text>
                              <InputGroup.Text>${this.calculateTotal().toFixed(2)}</InputGroup.Text>
                         </InputGroup>
                    </Form>
               </Container>
          )
     }
}

export default Checkout;