import React from 'react';

class Checkout extends React.Component {

     render() {
          return (
          <div>
              <h1>Checkout</h1>
              <p>This is morning snack's checkout page</p>
              <form>
                   <div id="appetizers">
                        <h3>Appetizers</h3>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$12.00</span>
                              <span class="input-group-text">Pastry Board</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$8.00</span>
                              <span class="input-group-text">Seasoned Fries</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$20.00</span>
                              <span class="input-group-text">Waffle Board</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$11.00</span>
                              <span class="input-group-text">Cheese Board</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                    </div>
                    <div id="soupSalad">
                         <h3>Soups & Salads</h3>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$5.00</span>
                              <span class="input-group-text">Ceasar Salad</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$5.00</span>
                              <span class="input-group-text">Cobb Salad</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$6.00</span>
                              <span class="input-group-text">Southwestern Salad</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">MR</span>
                              <span class="input-group-text">Soup of the Day</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                    </div>
                    <div id="sandwich">
                         <h3>Sandwiches</h3>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$13.00</span>
                              <span class="input-group-text">BLT</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">MR</span>
                              <span class="input-group-text">Grilled Cheese</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div>
                         <input class="form-check-input" type="radio" name="protein" id="protien"/>
                         <label class="form-check-label" for="protein">Chicken</label>
                         <input class="form-check-input" type="radio" name="protein" id="protien"/>
                         <label class="form-check-label" for="protein">Steak</label>                   
                         <input class="form-check-input" type="radio" name="protein" id="protien"/>
                         <label class="form-check-label" for="protein">Bacon</label>
                         <input class="form-check-input" type="radio" name="protein" id="protien" checked/>
                         <label class="form-check-label" for="protein">N/A</label>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$7.00</span>
                              <span class="input-group-text">Breakfast Bagel</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$10.00</span>
                              <span class="input-group-text">Veggie Sandwich</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                    </div>
                    <div id="brunch">
                         <h3>Brunch</h3>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$14.00</span>
                              <span class="input-group-text">French Toast</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$16.00</span>
                              <span class="input-group-text">Pancakes</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$15.00</span>
                              <span class="input-group-text">Eggs Benedict</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$20.00</span>
                              <span class="input-group-text">Poke</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$25.00</span>
                              <span class="input-group-text">Salmon</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$18.00</span>
                              <span class="input-group-text">Burger</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                    </div>
                    <div id="dessert">
                         <h3>Dessert</h3>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$7.00</span>
                              <span class="input-group-text">Cheesecake</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$9.00</span>
                              <span class="input-group-text">Cinnamon Roll</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$8.00</span>
                              <span class="input-group-text">Sundae</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                    </div>
                    <div id="drinks">
                         <h3>Drinks</h3>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$2.00</span>
                              <span class="input-group-text">Coffee</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$3.00</span>
                              <span class="input-group-text">Juice</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$8.00</span>
                              <span class="input-group-text">Mimosa</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$8.00</span>
                              <span class="input-group-text">Bloody Mary</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$2.00</span>
                              <span class="input-group-text">Fountain Drink</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                         <div class="input-group mb-3">
                              <span class="input-group-text">$2.00</span>
                              <span class="input-group-text">Tea</span>
                              <input type="text" class="form-control" aria-label=""/>
                         </div>
                    </div>
               </form>
          </div>  
          )  
     }
}

export default Checkout;