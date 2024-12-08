import React from 'react';
import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
    return(
        <div className='confirm'>
           <div>
              <h1>Booking has been <span>confirmed!</span></h1>
              <p>Thank you for your reservation. We look forward to serving you!</p>
           </div>
        </div>
    );
};

export default ConfirmedBooking;