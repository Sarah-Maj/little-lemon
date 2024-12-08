import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Main from './Main';
import Menu from './Menu';
import Login from './Login';
import Footer from './Footer';
import Booking from './Booking';
import About from './About';
import Services from './Services';
import OrderOnline from './OrderOnline';
import ConfirmedBooking from './ConfirmedBooking';
import {Routes, Route} from 'react-router-dom';

function App() {
  return(

    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reservations" element={<Booking/>}/>
        <Route path="/confirmed" element={<ConfirmedBooking/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/order-online" element={<OrderOnline/>}/>
      </Routes>
      <Footer/>
    </div>
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
