import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


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


                        <div class="d-flex align-content-start flex-wrap justify-content-evenly">

                              {/*APPETIZERS*/}
                              <section className="menuSelection1 m-4 p-2">
                              <h2 className="menuCategory"><strong><u>APPETIZERS</u></strong></h2>
                                    <div>
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">PASTRY BOARD</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">15</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>assortment of danishes, cinnamon rolls, baklava, muffins, and canolies</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">SEASONED FRIES</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">8</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>spicy cajun-seasoned steak fries</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">WAFFLE BOARD</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">20</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>combination of belgian, potato, bubble, and egg waffles</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div class="d-flex">
                                                <div className="p-2 w-100 bd-highlight">CHEESE BOARD</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">15</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>charcuterie of seasonal cheeses, sliced meats, pickled vegetables, and fresh fruits</p>
                                                </div>
                                          </div>
                                    </div>
                              </section>


                              {/*SOUPS & SALADS*/}
                              <section className="menuSelection2 m-4 p-2">
                              <h2 className="menuCategory"><strong><u>SOUPS & SALADS</u></strong></h2>
                                    <div>
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">CAESAR</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">5</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>romaine lettuce, garlic croutons, and a creamy dressing</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">COBB</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">5</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>romaine lettuce, crumbled blue cheese, chicken, and bacon</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">SOUTHWESTERN</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">6</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>corn, black beans, tortilla strips, and a creamy southwest dressing</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">SOUP OF THE DAY</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">7</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>tomato, french onion, tortilla, or seasonal choice</p>
                                                </div>
                                          </div>
                                    </div>
                              </section>


                              {/*SANDWICHES*/}
                              <section className="menuSelection3 m-4 p-2">
                              <h2 className="menuCategory"><strong><u>SANDWICHES</u></strong></h2>
                                    <div>
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">BLT</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">13</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>hickory-smoked bacon, tomato, lettuce, spicy mayo on whole grain bread</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">GRILLED CHEESE</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">10</div>
                                          </div>
                                          <div>
                                                <div class="text-break d-flex p-2">
                                                      <p>artesinal cheese, grilled onions, house sauce, and black forest ham on whole grain bread</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">BREAKFAST BAGEL</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">9</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>poppy seed bagel, egg, capers, avocado, grilled onions, sausage, bell peppers, parmesan</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">VEGGIE</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">10</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>vegan patty, lettuce, red onion, tomato, house sauce</p>
                                                </div>
                                          </div>
                                    </div>
                                    
                              </section>


                              {/*ENTREES*/}
                              <section className="menuSelection4 m-4 p-2">
                              <h2 className="menuCategory"><strong><u>ENTREES</u></strong></h2>
                                    <div>
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">FRENCH TOAST</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">14</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>6 slices with powdered sugar, Canadian syrup, with side of eggs and bacon</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">PANCAKES</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">16</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>fluffy short stack with Canadian syrup, blueberries, strawberries, fruit cocktail side</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">EGGS BENEDICT</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">15</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>english muffin, Canadian bacon, egg, hollandaise, capers</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">POKE BOWL</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">17</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>salmon + tuna chunks, spicy mayo, eel sauce, dragon aioli, mango, seaweed, white rice</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">SALMON</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">25</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>roasted salmon flank, scalloped potatoes, house salad</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">BRUNCH BURGER</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">15</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>beef patty, fried egg, hickory-smoked bacon, avocado, tomato, house sauce</p>
                                                </div>
                                          </div>
                                    </div>
                              </section>


                              {/*DESSERTS*/}
                              <section className="menuSelection5 m-4 p-2">
                              <h2 className="menuCategory"><strong><u>DESSERTS</u></strong></h2>
                                    <div>
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">CHEESECAKE</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">7</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>creamy marbling, raspberries, whipped cream</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">CINNAMON ROLLS</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">9</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>fluffy with gooey lemon-glazing</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">SUNDAE</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">8</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>natural vanilla ice cream, cookie crumble, bananas, strawberries, graham crackers</p>
                                                </div>
                                          </div>
                                    </div>
                              </section>


                              {/*DRINKS*/}
                              <section className="menuSelection6 m-4 p-2">
                              <h2 className="menuCategory"><strong><u>DRINKS</u></strong></h2>
                                    <div>
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">COFFEE</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">5</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>black, latte, mocha, cappuccino, americano, espresso</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">TEA</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">3</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>sweet, black, green, oolang, peppermint, chai</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">FRUIT JUICE</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">3</div>
                                          </div>
                                          <div>
                                                <div class="text-break d-flex p-2">
                                                      <p>orange, peach, grape, tropical punch</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">FOUNTAIN DRINK</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">3</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>coca cola, dr.pepper, fanta, sprite, a & w</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">MIMOSA</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">8</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>orange juice + slice, champagne</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="d-flex">
                                                <div className="p-2 w-100 bd-highlight">BLOODY MARY</div>
                                                <div className="p-2 flex-shrink-1 bd-highlight">8</div>
                                          </div>
                                          <div>
                                                <div className="text-break d-flex p-2">
                                                      <p>tomato juice, celery, hot sauce, garden herbs, lime, lemon, vodka</p>
                                                </div>
                                          </div>
                                    </div>
                              </section>
                        </div>
                  </>
            )
      }
}

export default Home;