import React, {useState} from 'react';
import logo from './logo.svg';


const Nav = () => {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
        setMenuOpen(!menuOpen);
     };

    return(
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <a href="/" className="logo">
          <img src={logo} alt='logo' />
          </a>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>

          <ul className={`nav-links ${menuOpen ? "visible" : "" }`}>
            <li>
                <a href='/' aria-label="Go to Home Page">Home</a>
            </li>
            <li>
                <a href='/about' aria-label="Learn more about us">About</a>
            </li>
            <li>
                <a href='/Services' aria-label="Discover our services">Services</a>
            </li>
            <li>
                <a href='/Menu' aria-label="Check out our menu!">Menu</a>
            </li>
            <li>
                <a href='/Reservations' aria-label="Book your slot today!">Reservations</a>
            </li>
            <li>
                <a href='/0rderOnline' aria-label="Get it delievered to your door!">Order Online</a>
            </li>
            <li>
                <a href='/Login' aria-label="Login">Login</a>
            </li>
          </ul>


    </nav>
    );
};



//import {Link} from 'react-router-dom';
//import './Nav.css';

//function Nav() {
  //  return (
    //    <nav role="navigation">
      //      <ul>
        //    <li><Link to="/" aria-label="Go to Home page">Home</Link></li>
          //  <li><Link to="/about" aria-label="Learn more about us">About</Link></li>
            //<li><Link to="/menu" aria-label="Check out our menu">Menu</Link></li>
            //<li><Link to="/reservations"aria-label="Make a reservation">Reservations</Link></li>
            //<li><Link to="/order-online" aria-label="Order food online">Order Online</Link></li>
            //<li><Link to="/login" aria-label="Log in to your account">Login</Link></li>
            //</ul>
        //</nav>
   // );
//}
export default Nav;