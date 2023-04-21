import React from 'react';
import { Container } from 'react-bootstrap';

class Catering extends React.Component {

     render() {
          return (
               <div>
                    <div id="cateringHero"></div>
                    <p id="cateringInfo" className="text-center justify-content-center"><strong>Morning Snack</strong> offers both
                         breakfast and lunch catering options for your event's needs. Below are a variety of options to make your event
                         one to remember. Please alert us of any dietery restrictions. We are happy to make accomodations for all your guests.
                    </p>
                    <h1 className="pageHeader text-center">CATERING MENU</h1>
                    <Container id="breakfastCatering">
                         <h3 className="cateringOptions">Breakfast</h3>
                         <div className="mealOptions">
                              <div className="tierOne breakfast1">
                                   <p>MORNING PASTRIES PACKAGE</p>
                                   <p className="cateringDescription"> An assortment of muffins, bagels, danishes, croissants, served with butter and a variety of jams. Coffee and water available for beverages</p>
                                   <p className="cateringPrice">$15 PP</p>
                              </div>
                              <div className="tierTwo breakfast2">
                                   <p>AMERICAN BREAKFAST PACKAGE</p>
                                   <p className="cateringDescription">Scrambled Eggs, bacon, breakfast sausage, southwestern breakfast potatoes, and an assortment of pastries. Coffee, your choice of 2 types of juices, and water available for beverages</p>
                                   <p className="cateringPrice">$25 PP</p>
                              </div>
                         </div>

                         <div className="addOns addOns1">
                              <h4>ENHANCEMENTS</h4>
                              <p>Evelate your breakfast by adding on one of the options below to your chosen breakfast package.</p>
                              <div className="enhancementOption">
                                   <p>OMELETTE STATION</p>
                                   <p>A number of omelette chefs will be provided for the omelette station, varying based on event size. Below are the filling options.</p>
                                   <ul className="cateringDescription">
                                        <li>Proteins: Bacon, Pork Sausage, Turkey Sausage, Chicken, Vegan Sausage, Tofu</li>
                                        <li>Vegetables: Tomato, Onion, Mushroom, Jalapeno, Red & Green Bell Pepper, Spinach, Avocado, Green Onion</li>
                                        <li>Cheeses: Cheddar, Swiss, Mozzarella, Pepper Jack</li>
                                   </ul>
                                   <p className="cateringPrice">$20 PP</p>
                              </div>
                              <div className="enhancementOption">

                                   <p>SMOOTHIE BOWLS</p>
                                   <ul className="cateringDescription">
                                        <li>Mixed Berry: Strawberry Blueberry blend topped with fresh raspberries, blueberries, blackberries, flax and chia seeds</li>
                                        <li>Peanut Butter Chocolate Dream: Chocolate peanut butter and banana blend topped with coconut, chocolate nibs, sliced banana, and crushed peanuts </li>
                                        <li>Tropical Vibes: Pineapple Mango blend topped with kiwi, mango, dates, and coconut</li>
                                   </ul>
                                   <p className="cateringPrice">$15 PP</p>
                              </div>
                         </div>
                    </Container>
                    <Container id="lunchCatering">
                         <h3 className="cateringOptions">Lunch</h3>
                         <div className="mealOptions">
                              <div className="tierOne lunch1">
                                   <p>LIGHT LUNCH PACKAGE</p>
                                   <p> An assortment of sandwiches, 2 soups of your choice, and caesar salad. Iced Tea, Coke Products, and Water avaialble for beverages</p>
                                   <ul className="cateringDescription">
                                        <li>Sandwiches - Turkey & Swiss, Ham & Cheddar, Fresh Vegetables & Hummus</li>
                                        <li>Soups- Tomato Basil, Tortilla, French Onion, Seasonal</li>
                                   </ul>
                                   <p className="cateringPrice">$20 PP</p>
                              </div>
                              <div className="tierTwo lunch2">
                                   <p> BURGERS AND SIDES PACKAGE</p>
                                   <p className="cateringDescription">Beef or black bean patties, American Chees, Lettuce, Tomato, Onion, Pickles served on a brioche bung. Fries and caesar salad for sides. Iced Tea, Coke Products, and water available for beverages</p>
                                   <p className="cateringPrice">$30 PP</p>
                              </div>
                         </div>

                         <div className="addOns addOns2">
                              <h4>ENHANCEMENTS</h4>
                              <p>Energize your guests' afternoon with one of the options below as an addition to your chosen lunch package.</p>
                              <div className="enhancementOption">
                                   <p>DESSERTS</p>
                                   <p className="cateringDescription">Choclate chip, oatmeal rasin, and snickerdoodle cookies, chocolate brownies</p>
                                   <p className="cateringPrice">$15 PP</p>
                              </div>
                              <div className="enhancementOption">
                                   <p>FRUIT</p>
                                   <p className="cateringDescription">An assortment of apples, pears, bananas, and oranges and a berry meledy</p>
                                   <p className="cateringPrice">$10 PP</p>
                              </div>

                         </div>
                    </Container>
               </div>
          )
     }
}

export default Catering;