import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Main from './Main';
import Menu from './Menu';

function App() {
  return(

    <>
      <Nav/>
      <Main/>
      <Menu/>
    </>
  );
}


//import './App.css';
//import Header from './Header';
//import Nav from './Nav';
//import Main from './Main';
//import Footer from './Footer';
//import AboutPage from './AboutPage';
//import MenuPage from './MenuPage';
//import BookingPage from './BookingPage';
//import OrderOnlinePage from './OrderOnlinePage';
//import LoginPage from './LoginPage';
//import {Routes, Route} from 'react-router-dom';
//import './Header.css';
//import './Main.css';
//import './Button.css';
//import './Card.css';
//import './App.css';
//import './index.css';



//function App() {
  //return (
    //<Header>
    //<Header/>
    //<Nav/>
    //<Routes>
      //<Route path="/" element={<Main/>} />
      //<Route path="/about" element={<AboutPage/>} />
      //<Route path="/menu" element={<MenuPage/>} />
      //<Route path="/reservations" element={<BookingPage/>} />
      //<Route path="/order-online" element={<OrderOnlinePage/>} />
      //<Route path="/login" element={<LoginPage/>} />
    //</Routes>
    //<Footer/>
    //</>
  //);
//}

export default App;
