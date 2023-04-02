import React from 'react';
import { Container } from 'react-bootstrap';

class About extends React.Component {

     render() {
          return (<>
                    <div className="aboutUsHero"></div>
                    <p id="aboutUsIntro" className="text-center justify-content-center"> Meet the passionate team behind <strong>Morning Snack</strong>.
                    </p>
                    <h1 className="pageHeader text-center">MEET THE TEAM</h1>
              <Container>
                   <div>
                        <h2 className="teamMember">Hunter</h2>
                   </div>
                   <div>
                        <h2 className="teamMember">Michelle</h2>
                   </div>
              </Container>
          </>  
          )  
     }
}

export default About;