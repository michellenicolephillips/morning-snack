import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
{/*import Masonry from 'react-masonry-component';*/}


class Home extends React.Component {

     render() {
          return (
                  <>
                  <div className='menuHero'></div>
              
                        <p className="menuOpener text-center justify-content-center"><strong>Morning Snack</strong> 
                        is a full-service, comfort-focused brunch restaurant situated in
                        the heart of Dallas. Enjoy breakfast, lunch, or in-between inside a renovated
                        Uptown bodega bathed in natural light. Our menu focuses on fresh, locally sourced
                        ingredients; our delicious bread is baked in-house every morning
                        before opening; and our famous mimosas are always available.</p>

                  {/*Add masonry image gallery here*/}
            

                  <h1 className="pageHeader text-center">BRUNCH MENU</h1>

                  <p className="dailyTimes text-center"><strong>DAILY 11 AM - 5 PM</strong></p>

                  <div className="menuSelection1 container-md">
                  <Container>
                        <Row>
                              <Col xl={5} className="menuCategory"><strong><u>APPETIZERS</u></strong></Col>
                              <Col></Col>
                              <Col xl={5} className="menuCategory"><strong><u>SOUPS & SALADS</u></strong></Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">PASTRY BOARD</Col>
                              <Col>15</Col>
                              <Col xl={5} className="menuItem">CAESAR</Col>
                              <Col>5</Col>
                        </Row>
                        
                        <Row>
                              <Col xl={4} className="itemDescription">assortment of danishes, cinnamon rolls, baklava, muffins, and canolies</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">romaine lettuce, garlic croutons, and a creamy dressing</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">SEASONED FRIES</Col>
                              <Col>8</Col>
                              <Col xl={5} className="menuItem">COBB</Col>
                              <Col>5</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription">spicy cajun-seasoned steak fries</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">romaine lettuce, crumbled blue cheese, chicken, and bacon</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">WAFFLE BOARD</Col>
                              <Col>20</Col>
                              <Col xl={5} className="menuItem">SOUTHWESTERN</Col>
                              <Col>6</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription">combination of belgian, potato,
                              bubble, and egg waffles</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">corn, black beans, tortilla strips, and a creamy southwest dressing</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">CHEESE BOARD</Col>
                              <Col>15</Col>
                              <Col xl={5} className="menuItem">SOUP OF THE DAY</Col>
                              <Col>7</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription">charcuterie of seasonal cheeses, sliced meats, pickled vegetables, and fresh fruit</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">tomato, french onion, tortilla, or
                              seasonal choice</Col>
                              <Col></Col>
                        </Row>
                  </Container>
                  </div>

                  <hr></hr>

                  <div className="menuSelection2 container-md">
                  <Container>
                        <Row>
                              <Col xl={5} className="menuCategory"><strong><u>SANDWICHES</u></strong></Col>
                              <Col></Col>
                              <Col xl={5} className="menuCategory"><strong><u>ENTREES</u></strong></Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">BLT</Col>
                              <Col>13</Col>
                              <Col xl={5} className="menuItem">FRENCH TOAST</Col>
                              <Col>14</Col>
                        </Row>
                        
                        <Row>
                              <Col xl={4} className="itemDescription">hickory-smoked bacon, tomato, lettuce, spicy mayo on whole grain bread</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">6 slices with powdered sugar, Canadian syrup, with side of eggs and bacon</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">GRILLED CHEESE</Col>
                              <Col>10</Col>
                              <Col xl={5} className="menuItem">PANCAKES</Col>
                              <Col>16</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription">artesinal cheese, grilled onions, house sauce, and black forest ham on whole grain bread</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">fluffy short stack with Canadian syrup, blueberries, strawberries, fruit cocktail side</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">BREAKFAST BAGEL</Col>
                              <Col>9</Col>
                              <Col xl={5} className="menuItem">EGGS BENEDICT</Col>
                              <Col>15</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription">poppy seed bagel, egg, capers, avocado, grilled onions, sausage, bell peppers, parmesan</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">english muffin, Canadian bacon, egg, hollandaise, capers</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">VEGGIE</Col>
                              <Col>10</Col>
                              <Col xl={5} className="menuItem">POKE BOWL</Col>
                              <Col>17</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription">vegan patty, lettuce, red onion, tomato, house sauce</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">salmon + tuna chunks, spicy mayo, eel sauce, dragon aioli, mango, seaweed, white rice</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem"></Col>
                              <Col></Col>
                              <Col xl={5} className="menuItem">SALMON</Col>
                              <Col>25</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription"></Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">roasted salmon flank, scalloped potatoes, house salad</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem"></Col>
                              <Col></Col>
                              <Col xl={5} className="menuItem">BRUNCH BURGER</Col>
                              <Col>15</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription"></Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">beef patty, fried egg, hickory-smoked bacon, avocado, tomato, house sauce</Col>
                              <Col></Col>
                        </Row>
                  </Container>
                  </div>

                  <hr></hr>

                  <div className="menuSelection3 container-md">
                  <Container>
                        <Row>
                              <Col xl={5} className="menuCategory"><strong><u>DESSERTS</u></strong></Col>
                              <Col></Col>
                              <Col xl={5} className="menuCategory"><strong><u>DRINKS</u></strong></Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">CHEESECAKE</Col>
                              <Col>7</Col>
                              <Col xl={5} className="menuItem">COFFEE</Col>
                              <Col>5</Col>
                        </Row>
                        
                        <Row>
                              <Col xl={4} className="itemDescription">creamy marbling, raspberries, whipped cream</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">black, latte, mocha, cappuccino, americano, espresso</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">CINNAMON ROLLS</Col>
                              <Col>9</Col>
                              <Col xl={5} className="menuItem">TEA</Col>
                              <Col>3</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription">fluffy with gooey lemon-glazing</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">black, green, oolang, peppermint, chai</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem">SUNDAE</Col>
                              <Col>8</Col>
                              <Col xl={5} className="menuItem">FRUIT JUICE</Col>
                              <Col>3</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription">natural vanilla ice cream, cookie crumble, bananas, strawberries, graham crackers</Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">orange, peach, grape, tropical punch</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem"></Col>
                              <Col></Col>
                              <Col xl={5} className="menuItem">FOUNTAIN DRINK</Col>
                              <Col>3</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription"></Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">coca cola, dr.pepper, fanta, sprite, a & w</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem"></Col>
                              <Col></Col>
                              <Col xl={5} className="menuItem">MIMOSA</Col>
                              <Col>8</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription"></Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">orange juice + slice, champagne</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col xl={5} className="menuItem"></Col>
                              <Col></Col>
                              <Col xl={5} className="menuItem">BLOODY MARY</Col>
                              <Col>8</Col>
                        </Row>

                        <Row>
                              <Col xl={4} className="itemDescription"></Col>
                              <Col></Col>
                              <Col xl={4} className="itemDescription">tomato juice, celery, hot sauce, garden herbs, lime, lemon, vodka</Col>
                              <Col></Col>
                        </Row>
                  </Container>
                  </div>

                  <hr></hr>

                  </>
            )  
     }
}

export default Home;