const ConfirmedBooking = ({ bookingData }) => {
  return (
    <div className="bookings-layout-container">
      <div className="bookings-table-card">
        <h2 className="bookings-title">Booking has been confirmed.</h2>
        {!bookingData || bookingData.length === 0 ? (
          <p style={{ color: '#666', fontSize: '15px' }}>
            No reservations made yet.
          </p>
        ) : (
          <div className="bookings-responsive-wrapper">
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Number of Guests</th>
                  <th>Occasion</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.guests} People</td>
                    <td>
                      <span className="bookings-badge">{booking.occasion}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default ConfirmedBooking;
