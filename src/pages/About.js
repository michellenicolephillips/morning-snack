import React from 'react';
import { Container } from 'react-bootstrap';
import Michelle from '../assets/michelle.jpg';

class About extends React.Component {

     render() {
          return (<>
                    <div className="aboutUsHero"></div>
                    <p id="aboutUsIntro" className="text-center justify-content-center"> Meet the passionate team behind <strong>Morning Snack</strong>.
                    </p>
                    <h1 className="pageHeader text-center">MEET THE TEAM</h1>
              <Container>
                   <div>
                   <div className="teamMemberBio">
                   <img className="teamMemberPic" src={Michelle} alt="michelle"/>
                              <div className="bothBios">
                              <h2 className="teamMember">Hunter</h2>
                                   <p className="techBio">
                                   </p>
                                   <p className="retaurantBio">
                                   </p>
                              </div>
                        </div>                   </div>
                   <div>
                        <div className="teamMemberBio">
                              <img className="teamMemberPic" src={Michelle} alt="michelle"/>
                              <div className="bothBios">
                              <h2 className="teamMember">Michelle</h2>

                                   <p className="techBio">
                                        Michelle is pursuing a certificate in Advanced Web Application Development at Dallas College to further her career as a Software Developer. Prior to enrolling at Dallas College, Michelle worked in the Hospitality Industry. She has a bachenlor's degree 
                                        from the University of North Texas.At the start of the pandemic, she lost her job. She decided to pursue software development as a career by first teaching herself how to code. She enrolled in Dallas College to have a more structured learning. 
                                        During her time in school, she landed her first job as a software developer. Her coursework as Dallas college is helping her in her newfound career. She hopes to one day join a Master's program to continue developing her skills in tech.
                                        She will complete her certificate in Summer 2023.
                                   </p>
                                   <p className="retaurantBio">
                                        Michelle found her passion for food as a young girl in her grandmother's kitchen. Every weekend she would visit her grandparents' house where she would make breakfast with her grandmother. They would make a tall stack of 
                                        pancakes or french toast for everyone to enjoy. Paired with maple syrup and homemade jams, weekend breakfasts with her family are where Michelle's interest in cooking grew. Upon starting college, Michelle would make brunch from scratch 
                                        for her roommates every weekend similar to the breakfasts she made as a child. She got a business degree so she would have both halves to building a restaurant of her own. She found a business partner in Hunter whow as just as passionate about 
                                        brunch foods as she was. Thus, <strong>Morning Snack</strong> was born.
                                   </p>
                              </div>
                        </div>
                        

                   </div>
              </Container>
          </>  
          )  
     }
}

export default About;