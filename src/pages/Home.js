import React from 'react';

class Home extends React.Component {

     render() {
          return (<>

              <h1>WELCOME</h1>
              
              <p>This is morning snack's home page</p>

              <h2>Appetizers:</h2>
              <ul>
                    <li>Pastry Board ($12.00)</li>
                    <li>Seasoned Fries ($8.00)</li>
                    <li>Waffle Board ($20.00)</li>
                    <li>Cheese Board ($11.00)</li>
              </ul>

              <h2>Soups & Salads:</h2>
              <ul>
                    <li>Caesar ($5.00)</li>
                    <li>Cobb ($5.00)</li>
                    <li>Southwestern ($6.00) </li>
                    <li>Soup of the Day (Tomato, French Onion, or Tortilla) [Prices are subject to change]</li>
              </ul>

              <h2>Sandwiches:</h2>
              <ul>
                    <li>BLT ($13.00)</li>
                    <li>Grilled Cheese (add a protein: Chicken, Steak, or Bacon) [Prices are subject to change]</li>
                    <li>Breakfast Bagel ($7.00)</li>
                    <li>Veggie Sandwich ($10.00)</li>
              </ul>

              <h2>Brunch:</h2>
              <ul>
                    <li>French Toast ($14.00)</li>
                    <li>Pancakes ($16.00)</li>
                    <li>Eggs Benedicts ($15.00)</li>
                    <li>Poke ($20.00)</li>
                    <li>Salmon ($25.00)</li>
                    <li>Burger ($18.00)</li>
              </ul>
              
              <h2>Desserts:</h2>
              <ul>
                    <li>Cheesecake ($7.00)</li>
                    <li>Cinnamon Rolls ($9.00)</li>
                    <li>Sundae ($8.00)</li>
              </ul>

              <h2>Drinks:</h2>
              <ul>
                    <li>Coffee ($2.00)</li>
                    <li>Fruit Juice (Orange, Apple, or Cocktail) ($3.00)</li>
                    <li>Mimosas ($8.00)</li>
                    <li>Bloody Marys ($8.00)</li>
                    <li>Fountain Drinks ($2.00)</li>
                    <li>Tea ($2.00)</li>
              </ul>

          </>)  
     }
}

export default Home;