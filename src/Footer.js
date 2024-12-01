import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer>
            <p>© 2024 Little Lemon. All Rights Reserved.</p>
            <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="#social">Social</Link></li>
            </ul>
        </footer>
    );
}
export default Footer;