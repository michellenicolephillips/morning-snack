import React from 'react';
import { Nav, NavLink } from 'react-bootstrap';

//Create a container and then store the Header, vertical menu, and reservations button/socials in separate columns


class Footer extends React.Component {


     render() {
          return (
               <>
                    <footer className="footerColor">
                         <h3 className="footerHeader">Morning Snack</h3>

                         <div className="footerNav flex-column">
                              <Nav className="justify-content-end">
                                   <NavLink href="/">MENU</NavLink>
                                   <NavLink href="/catering">CATERING</NavLink>
                                   <NavLink href="/about">ABOUT</NavLink>
                                   <NavLink href="/order">ORDER</NavLink>
                              </Nav>
                         </div>

                         <address className="footerAddress">123 Brunch St, Dallas, TX 75206</address>
                    </footer>
               </>
          )
     }
}

export default Footer;