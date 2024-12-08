
import React, {useReducer} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';
import './Main.css';


const Main = () => {


    const navigate = useNavigate();


    const SubmitForm = (formData) => {
        console.log("Form submitted", formData);
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    };


    const submitAPI = function(formData){
        console.log("submitAPI called with data:", formData);
        return true;
    };


    const seedRandom = function(seed){
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) / m;
        }
    }


    const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i=17; i<=23; i++){
            if(random() < 0.5){
                result.push(i + ':00');
            }
            if(random() > 0.5){
                result.push(i + ':30');
            }
        }
        return result;
    };


    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);


    function updateTimes(state, date){
        return{availableTimes: fetchAPI(new Date())};
    }


    return(
        <main>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/booking' element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} SubmitForm={SubmitForm}/>}/>
                <Route path='/confirmed' element={<ConfirmedBooking/>}/>
            </Routes>


            <section className="ratings-section">
                <h2>Customer Ratings</h2>
                <p>Our customers love us! Check out the reviews and ratings from various platforms.</p>
                <div className="ratings">
                    <div className="rating-item">
                        <h3>Michelin Star</h3>
                        <div className="rating-stars">★★★★★</div>
                        <p>Rated by the Michelin Guide</p>
                        <img className="michelin-logo" src="https://images.squarespace-cdn.com/content/v1/5b441f0096e76f9e5d3a98c2/1544226773588-XAHPPP5I5Y4JLCRPPPL0/michelin+logo_15-01.png?format=750w" alt="Michelin Star" />
                    </div>


                    <div className="rating-item">
                        <h3>Yelp</h3>
                        <div className="rating-stars">★★★★☆</div>
                        <p>Based on over 500 customer reviews</p>
                        <img className="michelin-logo" src="https://logos-world.net/wp-content/uploads/2020/12/Yelp-Logo-700x394.png" alt="Yelp" />
                    </div>


                    <div className="rating-item">
                        <h3>Google Reviews</h3>
                        <div className="rating-stars">★★★★★</div>
                        <p>Top-rated Mediterranean restaurant in the city</p>
                        <img className="michelin-logo" src="https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Logo-500x281.png" alt="Google" />
                    </div>
                </div>
            </section>


            {/* New Section: Featured Dishes */}
            <section className="featured-dishes">
    <h2>Featured Dishes</h2>
    <div className="dishes-container">
        {/* Dish 1 */}
        <div className="dish-card">
            <img src="https://www.lecremedelacrumb.com/wp-content/uploads/2019/08/cajun-honey-butter-grilled-salmon-2.jpg" alt="Dish 1" />
            <h3>Grilled Salmon</h3>
            <p>
                Freshly grilled salmon served with a side of sautéed vegetables
                and our signature lemon butter sauce.
            </p>
        </div>


        {/* Dish 2 */}
        <div className="dish-card">
            <img src="https://natashaskitchen.com/wp-content/uploads/2017/03/Fetuchini-Alfredo-Pasta-3.jpg" alt="Dish 2" />
            <h3>Chicken Alfredo</h3>
            <p>
                Creamy Alfredo sauce over tender chicken breast and fettuccine,
                topped with Parmesan cheese.
            </p>
        </div>


        {/* Dish 3 */}
        <div className="dish-card">
            <img src="https://www.recipesfromitaly.com/wp-content/uploads/2021/07/caprese-salad-recipe-1x1-1200x1200-b.jpg" alt="Dish 3" />
            <h3>Caprese Salad</h3>
            <p>
                Fresh mozzarella, ripe tomatoes, and basil, drizzled with
                balsamic reduction and olive oil.
            </p>
        </div>
    </div>
</section>


            {/* New Section: Customer Testimonials */}
            <section className="testimonials">
                <h2>What Our Customers Are Saying</h2>
                <div className="testimonial-items">
                    <div className="testimonial-item">
                        <p>"The food was amazing, and the ambiance was perfect for a romantic evening."</p>
                        <h4>John Doe</h4>
                    </div>
                    <div className="testimonial-item">
                        <p>"A true culinary experience! I highly recommend the grilled salmon."</p>
                        <h4>Jane Smith</h4>
                    </div>
                    <div className="testimonial-item">
                        <p>"The best Mediterranean restaurant in the city. I’ll definitely be back!"</p>
                        <h4>Emma Brown</h4>
                    </div>
                </div>
            </section>


            {/* New Section: Call to Action */}
            <section className="cta">
                <h2>Ready to Experience Little Lemon?</h2>
                <p>Book your table now or order online to enjoy our delicious meals at home!</p>
                <button onClick={() => navigate('/reservations')}>Book a Table</button>
            </section>
        </main>
    );
};


export default Main;