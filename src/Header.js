import logo from './logo.svg';
import React from 'react';
import './Header.css';
function Header() {
    return (
        <>
        <header>
            <h1>Little Lemon</h1>
            <img src={logo} alt="Little Lemon Logo" />
        </header>
        </>
    );
}
export default Header;