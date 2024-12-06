import React, { useState, useEffect } from "react";

// Define the fetchAPI function in this file
const fetchAPI = function(date) {
    let result = [];
    let randomSeed = (seed) => { // Renamed from 'random' to 'randomSeed'
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function() {
            return (s = s * a % m) / m;
        }
    };
    let random = randomSeed(date.getDate());  // Call the renamed randomSeed function

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }
        if (random() > 0.5) {
            result.push(i + ":30");
        }
    }
    return result;
};

// Now you can use fetchAPI without errors
const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [bookingData, setBookingData] = useState([]); // Stores booking records

       // Load the booking data from local storage on mount
       useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem("bookingData")) || [];
        setBookingData(storedBookings);  // Load from localStorage
    }, []);

    // Save the updated booking data to local storage whenever it changes
    useEffect(() => {
        if (bookingData.length > 0) {
            localStorage.setItem("bookingData", JSON.stringify(bookingData));
        }
    }, [bookingData]);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, selectedTime, guests, occasion };

        // Use the SubmitForm function passed from Main component
        props.SubmitForm(formData);

        // Update booking records (you could consider sending this to a backend instead)
        setBookingData((prevBookingData) => {
            const newBookingData = [...prevBookingData, formData];
            localStorage.setItem("bookingData", JSON.stringify(newBookingData));  // Sync with localStorage
            return newBookingData;
        });
    };
    // Fetch available times when date changes
    useEffect(() => {
        if (date) {
            const fetchedTimes = fetchAPI(new Date(date)); // Now fetchAPI is defined here
            setAvailableTimes(fetchedTimes);
        }
    }, [date]);

    return (
        <div>
            <header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor="book-date">Choose Date:</label>
                                <input
                                    id="book-date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    type="date"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="book-time">Choose Time:</label>
                                <select
                                    id="book-time"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    required
                                >
                                    <option value="">Select a Time</option>
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="book-guests">Number of Guests:</label>
                                <input
                                    id="book-guests"
                                    min="1"
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    type="number"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="book-occasion">Occasion:</label>
                                <select
                                    id="book-occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    required
                                >
                                    <option value="">Select Occasion</option>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                            </div>
                            <div>
                                <input
                                    aria-label="On Click"
                                    type="submit"
                                    value="Make Your Reservation"
                                />
                            </div>
                        </fieldset>
                    </form>
                </section>
            </header>

            <main>
                <h2>Booking Records</h2>
                {bookingData.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Guests</th>
                                <th>Occasion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.date}</td>
                                    <td>{data.selectedTime}</td>
                                    <td>{data.guests}</td>
                                    <td>{data.occasion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No bookings made yet.</p>
                )}
            </main>
        </div>
    );
};

export default BookingForm;