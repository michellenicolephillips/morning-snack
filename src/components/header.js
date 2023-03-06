import React from 'react';
import logo from '../assets/logo.png';
import Navigation from '../components/navigation';

class Header extends React.Component {

     render() {
          return (
          <>
          <header>
               <section className='header'>
                    <section className='header-top'>
                         <section className='header-top_logo'>
                              <a href="/" className='header-logo'> <img src={logo} width={300} height={100} alt='Morning Snack'/></a>
                         </section>
                         <section className='header-top_navbar'>
                              <Navigation />
                         </section>
                         <section className='booking-button'>
                              <p className='bookReservations'><a href="/reservations">BOOK RESERVATION</a></p>
                         </section>
                    </section>
               </section>
          </header>
          </>  
          )  
     }
}

export default Header;