import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import BookingPage from '../pages/BookingPage';
import { useReducer, useState } from 'react';

export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return state;
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );
  const navigate = useNavigate();

  const submitForm = (formData) => {
    navigate('/confirmed');
  }

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
      </Routes>
    </main>
  );
};

export default Main;
