import { BrowserRouter } from 'react-router-dom';
import BookingPage from './BookingPage';
import { render, screen } from '@testing-library/react';

test('Renders the Booking Page heading', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BrowserRouter>
      <BookingPage
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </BrowserRouter>,
  );

  const headingElement = screen.getByText('Make Your Reservation');
  expect(headingElement).toBeInTheDocument();
});
