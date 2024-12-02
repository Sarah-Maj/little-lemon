import {Link} from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav role="navigation">
            <ul>
            <li><Link to="/" aria-label="Go to Home page">Home</Link></li>
            <li><Link to="/about" aria-label="Learn more about us">About</Link></li>
            <li><Link to="/menu" aria-label="Check out our menu">Menu</Link></li>
            <li><Link to="/reservations"aria-label="Make a reservation">Reservations</Link></li>
            <li><Link to="/order-online" aria-label="Order food online">Order Online</Link></li>
            <li><Link to="/login" aria-label="Log in to your account">Login</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;