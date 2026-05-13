import BookingForm from '../components/BookingForm';
import img from '../assets/images/restaurant.jpg';

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <div className="layout">
      <div className="container booking-container">
        <div className="booking-image">
          <img src={img} alt="Little Lemon" />
        </div>
        <div className="booking-form-wrapper">
          <h1>Make Your Reservation</h1>
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
