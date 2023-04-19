import React from 'react';
import { Container } from 'react-bootstrap';
import Michelle from '../assets/michelle.jpg';
import Hunter from '../assets/hunter.jpg'

class About extends React.Component {

     render() {
          return (<>
               <div className="aboutUsHero"></div>
               <p id="aboutUsIntro" className="text-center justify-content-center"> Meet the passionate team behind <strong>Morning Snack</strong>.
               </p>
               <h1 className="pageHeader text-center">MEET THE TEAM</h1>
               <Container>
                         <div className="teamMemberBio">
                              <img className="teamMemberPic" src={Hunter} alt="Hunter" />
                              <div className="bothBios">
                                   <h2 className="teamMember">Hunter</h2>
                                   <p className="techBio">
                                        Hunter is enrolled in Dallas College to complete dual associates in Web Design & Production and Experience Design/User Interface (UX/UI), respectively.
                                        Before attending Dallas College in 2021, Hunter graduated from UNT Dallas with a Bachelor’s of Science in Public Health.
                                        His work primarily involves alleviating food insecurity, fighting environmental justice, and performing evidence-based research via GIS, literary analysis, or study design.
                                        When working for a Toyota-sponsored, university-led intervention in South Dallas, he was tasked with creating the organization’s website.
                                        Ever since creating that initial site, Hunter has had a passionate interest in web design and visual web content.
                                        Through web design, he hopes to find a job or two that will fund his long-term goal of going to graduate school for ecology and environmental science.
                                   </p>
                                   <p className="retaurantBio">
                                   Hunter’s love for cooking came from watching Anthony Bourdain’s No Reservations as a kid. 
                                   Seeing his idol galavant across the globe eating some of the strangest yet most scrumptious edible concoctions he had ever seen struck a chord in his young heart. 
                                   As he grew up (and consumed more and more international foods), Hunter began to realize that what was truly the best part of eating was not the complexity of a meal’s palette (though that did help), 
                                   but those who shared the meal with you. When he met Michelle, and shared this realization, he found a willing compatriot. 
                                   Together, they both set out to create  a warm and inviting space suitable for friends and family to bond over simple, delicious meals. Thus, <strong>Morning Snack</strong> was born.
                                   </p>
                                   <p className="email">Contact Hunter: <br/>
                                   <a href="mailto: hmarion@student.dallascollege.edu">hmarion@student.dallascollege.edu</a> 
                                   </p>
                              </div>
                         </div>
                         <div className="teamMemberBio">
                              <img className="teamMemberPic" src={Michelle} alt="michelle" />
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
                                   <p className="email">Contact Michelle: <br/>
                                        <a href="mailto: mphillips@student.dallascollege.edu">mphillips@student.dallascollege.edu</a> 
                                   </p>
                              </div>
                         </div>
               </Container>
          </>
          )
     }
}

export default About;