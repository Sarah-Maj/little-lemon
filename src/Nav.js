import React, {useState} from 'react';
import logo from './assets/logo.svg';
import {Link} from 'react-router-dom';


const Nav = () => {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
        setMenuOpen(!menuOpen);
     };

    return(
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="logo">
          <img src={logo} alt='logo' />
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>

          <ul className={`nav-links ${menuOpen ? "visible" : "" }`}>
            <li>
                <Link to='/' aria-label="Go to Home Page">Home</Link>
            </li>
            <li>
                <Link to='/about' aria-label="Learn more about us">About</Link>
            </li>
            <li>
                <Link to='/Services' aria-label="Discover our services">Services</Link>
            </li>
            <li>
                <Link to='/Menu' aria-label="Check out our menu!">Menu</Link>
            </li>
            <li>
                <Link to='/Reservations' aria-label="Book your slot today!">Reservations</Link>
            </li>
            <li>
                <Link to='/order-online' aria-label="Get it delievered to your door!">Order Online</Link>
            </li>
            <li>
                <Link to='/Login' aria-label="Login">Login</Link>
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