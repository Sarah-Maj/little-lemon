import React from 'react';
import logo from './assets/logo.svg';
const Footer = () => {
    return(
        <footer>
          <section>
            <div className='company-info'>
               <img src={logo} alt=''/>
               <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br/> 123 Towncity, USA </li>
                    <li>Phone: <br/> (xxx)-xxx-xxx-xxx </li>
                    <li>Email: <br/> info@littlelemon.com </li>
                </ul>
            </div>

            <div>
                <h3>Social Media Links</h3>
                <ul>
                <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>X</a></li>
                    <li><a href='/'>Instagram</a></li>
                </ul>
            </div>
          </section>
        </footer>
    );
};




//import './Footer.css';
//import { Link } from 'react-router-dom';

//function Footer () {
  //  return (
    //    <footer>
      //      <p>© 2024 Little Lemon. All Rights Reserved.</p>
        //    <ul>
          //      <li><Link to="/contact">Contact</Link></li>
            //    <li><Link to="/privacy">Privacy</Link></li>
              //  <li><Link to="#social">Social</Link></li>
            //</ul>
        //</footer>
    //);
//}
export default Footer;