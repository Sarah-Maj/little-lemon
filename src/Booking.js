import React from 'react';
import BookingForm from './BookingForm';

const Booking = (props) => {
  console.log("In Main.js, props.SubmitForm:", props.SubmitForm);
  return (
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      SubmitForm={props.SubmitForm}
    />
  );
};

export default Booking;