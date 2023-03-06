import React from 'react';



/* Navbar component to navigate to various sections of the page, smooth scroll to each section */

class Navigation extends React.Component {

     render() {
          return (
               <section className='navbar'>
                    <a href="/" className="nav-link">Menu</a>
                    <a href="/catering" className="nav-link">Catering</a>
                    <a href="/about" className="nav-link">About Us</a>
                    <a href="/checkout" className="nav-link">Checkout</a>
               </section>
          )
     }
}

export default Navigation;