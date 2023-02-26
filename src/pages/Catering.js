import React from 'react';

class Catering extends React.Component {

     render() {
          return (
              <div>
                   <h1>Catering</h1>
                   <p>We offer both breakfast and lunch catering options for your event.</p>
                   <div id="breakfast-catering">
                         <h3>Breakfast</h3>
                         <h4>Tier 1 - Morning Pastries Package - $15 per person</h4>
                         <p> An assortment of muffins, bagels, danishes, croissants, served with butter and a variety of jams. Coffee and water available for beverages</p>
                         <h4>Tier 2 - American Breakfast Package - $25 per person</h4>
                         <p>Scrambled Eggs, bacon, breakfast sausage, southwestern breakfast potatoes, and an assortment of pastries. Coffee, your choice of 2 types of juices, and water available for beverages</p>
                         <h4>Add On- Omelette Station - $20 per person</h4>
                         <p>A number of omelette chefs will be provided for the omelette station, varying based on event size. Below are the filling options.</p>
                         <ul>
                              <li>Proteins: Bacon, Pork Sausage, Turkey Sausage, Chicken, Vegan Sausage, Tofu</li>
                              <li>Vegetables: Tomato, Onion, Mushroom, Jalapeno, Red & Green Bell Pepper, Spinach, Avocado, Green Onion</li>
                              <li>Cheeses: Cheddar, Swiss, Mozzarella, Pepper Jack</li>
                         </ul>
                         <h4>Add On - Fruit $10 per person</h4>
                         <p>An assortment of apples, pears, bananas, and oranges and a berry meledy</p>
                   </div>
                   <div id="lunch-catering">
                         <h3>Lunch</h3>
                         <h4>Tier 1 - Light Lunch Package - $20 per person</h4>
                         <p> An assortment of sandwiches, 2 soups of your choice, and caesar salad. Iced Tea, Coke Products, and Water avaialble for beverages</p>
                         <ul>
                              <li>Sandwiches - Turkey & Swiss, Ham & Cheddar, Fresh Vegetables & Hummus</li>
                              <li>Soups- Tomato Basil, Tortilla, French Onion, Seasonal</li>
                         </ul>
                         <h4>Tier 2 - Burger Package $30 per person</h4>
                         <p>Beef or black bean patties, American Chees, Lettuce, Tomato, Onion, Pickles served on a brioche bung. Fries and caesar salad for sides. Iced Tea, Coke Products, and water available for beverages</p>
                         <h4>Add On - Desserts - $15 per person</h4>
                         <p>Choclate chip, oatmeal rasin, and snickerdoodle cookies, chocolate brownies</p>
                         <h4>Add On - Fruit - $10 per person</h4>
                              <p>An assortment of apples, pears, bananas, and oranges and a berry meledy</p>
                   </div>
                   <p id="catering-dietary">*Vegan and allergy accomodations available upon request</p>
              </div>
          )  
     }
}

export default Catering;