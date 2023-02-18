import React from 'react';
import {Link } from "react-router-dom";



/* Navbar component to navigate to various sectoins of the page, smooth scroll to each section */

class Navigation extends React.Component {

     render() {
          return (
               <div>
                    <nav>
                         <ul>
                              <li><Link to={'/'} className="nav-link"> Home </Link></li>
                              <li><Link to={'/reservations'} className="nav-link">Reservations</Link></li>
                              <li><Link to={'/catering'} className="nav-link">Catering</Link></li>
                              <li><Link to={'/about'} className="nav-link">About Us</Link></li>
                              <li><Link to={'/checkout'} className="nav-link">Checkout</Link></li>
                         </ul>
                    </nav>
               </div>  
          )
     }
}

export default Navigation;