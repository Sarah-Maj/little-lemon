//import logo from './assets/logo192.png';
import React from 'react';
import bannerImg from'./assets/restauranfood.jpg';


const Header = () => {
    return(
        <header className='header'>
           <section className='content'>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>

            <div className='banner-img'>
                <img src={bannerImg} alt="Restaurant Food" />
            </div>
           </section>
        </header>
    );
};

//function Header() {
    //return (
       // <>
        //<header>
          //  <h1>Little Lemon</h1>
           // <img src={logo} alt="Little Lemon Logo" />
        //</header>
        //</>
    //);
//}
export default Header;