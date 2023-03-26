import React from 'react';
import { Button, Nav, NavLink } from 'react-bootstrap';

//Create a container and then store the Header, vertical menu, and reservations button/socials in separate columns


class Footer extends React.Component {

     render() {
          return (
               <>
               <footer className="footerColor">
                    <h3 className="footerHeader">Morning Snack</h3>

                    <div className="footerReserve d-md-flex justify-content-md-end">
                         <Button variant="warning" className="reserveButton" href="/reservations">BOOK A RESERVATION</Button>
                    </div>

                    <div className="footerNav flex-column">
                    <Nav className="justify-content-end">
                         <NavLink href="/">MENU</NavLink>
                         <NavLink href="/catering">CATERING</NavLink>
                         <NavLink href="/about">ABOUT</NavLink>
                         <NavLink href="/checkout">CHECKOUT</NavLink>
                    </Nav>
                    </div>

                    <address className="footerAddress ">123 Brunch St, Dallas, TX 75206</address>

               </footer>
          </>
          )  
     }
}

export default Footer;