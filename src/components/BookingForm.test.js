import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </BrowserRouter>,
  );
  const headingElement = screen.getByText('Choose date');
  expect(headingElement).toBeInTheDocument();
});
