import React, { useState, useEffect } from "react";


// Define the fetchAPI function in this file
const fetchAPI = function(date) {
    let result = [];
    let randomSeed = (seed) => {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function() {
            return (s = s * a % m) / m;
        };
    };
    let random = randomSeed(date.getDate());

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

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [bookingData, setBookingData] = useState([]); // Stores booking records

    const [errors, setErrors] = useState({}); // Track field errors

    // Load the booking data from local storage on mount
    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem("bookingData")) || [];
        setBookingData(storedBookings); // Load from localStorage
    }, []);

    // Save the updated booking data to local storage whenever it changes
    useEffect(() => {
        if (bookingData.length > 0) {
            localStorage.setItem("bookingData", JSON.stringify(bookingData));
        }
    }, [bookingData]);

    // Fetch available times when date changes
    useEffect(() => {
        if (date) {
            const fetchedTimes = fetchAPI(new Date(date));
            setAvailableTimes(fetchedTimes);
        }
    }, [date]);

    const validateFields = () => {
        const errors = {};
        if (!date) errors.date = "Please select a date.";
        if (!selectedTime) errors.selectedTime = "Please select a time.";
        if (!guests || guests < 1 || guests > 10) errors.guests = "Guests must be between 1 and 10.";
        if (!occasion) errors.occasion = "Please select an occasion.";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields before submission
        if (!validateFields()) {
            return;
        }

        const formData = { date, selectedTime, guests, occasion };

        // Use the SubmitForm function passed from Main component
        props.SubmitForm(formData);

        // Update booking records
        setBookingData((prevBookingData) => {
            const newBookingData = [...prevBookingData, formData];
            localStorage.setItem("bookingData", JSON.stringify(newBookingData)); // Sync with localStorage
            return newBookingData;
        });

        // Clear the form
        setDate("");
        setSelectedTime("");
        setGuests("");
        setOccasion("");
    };

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
                                    min={new Date().toISOString().split("T")[0]} // Minimum date is today
                                    required
                                    aria-describedby="dateError"
                                />
                                {errors.date && <p id="dateError" className="error">{errors.date}</p>}
                            </div>
                            <div>
                                <label htmlFor="book-time">Choose Time:</label>
                                <select
                                    id="book-time"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    required
                                    aria-label="Choose a time for your booking"
                                >
                                    <option value="">Select a Time</option>
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                                {errors.selectedTime && <p className="error">{errors.selectedTime}</p>}
                            </div>
                            <div>
                                <label htmlFor="book-guests">Number of Guests:</label>
                                <input
                                    id="book-guests"
                                    min="1"
                                    max="10"
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    type="number"
                                    required
                                     aria-label="Choose the number of guests"
                                />
                                {errors.guests && <p className="error">{errors.guests}</p>}
                            </div>
                            <div>
                                <label htmlFor="book-occasion">Occasion:</label>
                                <select
                                    id="book-occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    required
                                     aria-label="Choose the occasion"
                                >
                                    <option value="">Select Occasion</option>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                                {errors.occasion && <p className="error">{errors.occasion}</p>}
                            </div>
                            <div>
                                <input
                                    aria-label="On Click"
                                    type="submit"
                                    value="Make Your Reservation"
                                    disabled={
                                        !date ||
                                        !selectedTime ||
                                        !guests ||
                                        guests < 1 ||
                                        guests > 10 ||
                                        !occasion
                                    }
                                />
                            </div>
                        </fieldset>
                    </form>
                </section>
            </header>

            <main>
                <h2>Booking Records</h2>
                <div aria-live="polite">
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
                </div>
            </main>
        </div>
    );
};

export default BookingForm;