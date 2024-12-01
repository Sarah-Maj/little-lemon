import React from 'react';
import './BookingPage.css';
function BookingPage() {
    return (
        <section className="booking-container" role="main">
        <h1>Table Reservations</h1>
        <p className="intro-text">Reserve your table at Little Lemon today! Our cosy ambiance and exquisite meals await you.</p>
        <p className="instructions">Call us or use our online booking system to secure your spot.</p>

        <div className="reservation-form">
            <h2>Book a Table</h2>
            <form>
                <fieldset>
                    <legend>Reservation Details</legend>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" placeholder="Enter your full name" required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" required />

                <label htmlFor="date">Reservation Date:</label>
                <input type="date" id="date" required/>

                <label htmlFor="time">Reservation Time:</label>
                <input type="time" id="time" required />

                </fieldset>

                <button type="submit">Reserve Now</button>
            </form>
        </div>

        <div className="additional-options">
            <button className="call-us-btn">Call Us</button>
            <button className="book-online-btn" aria-label="Book a table online">Book Online</button>
        </div>
        </section>
    );
}

export default BookingPage;