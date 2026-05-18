import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import BookingPage from '../pages/BookingPage';
import { useReducer, useState } from 'react';
import {fetchAPI, submitAPI } from '../api';
import ConfirmedBooking from '../pages/ConfirmedBooking';

export const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0];
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
        return fetchAPI(action.date);
    default:
      return state;
  }
};

const Main = () => {
  const [bookingData, setBookingData] = useState([]);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );
  const navigate = useNavigate();

  const submitForm = (formData) => {
      const isSubmitted = submitAPI(formData);
      if (isSubmitted) {
        setBookingData([...bookingData, formData]);
        navigate('/confirmed');
      }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking bookingData={bookingData} />} />
      </Routes>
    </main>
  );
};

export default Main;
