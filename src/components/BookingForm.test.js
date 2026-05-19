import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

test('Successfully writes reservation data to localStorage on form submission', () => {
  const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem');

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

  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2026-05-25' } });

  const submitButton = screen.getByRole('button', { name: /Book now/i });
  fireEvent.click(submitButton);

  expect(localStorageSpy).toHaveBeenCalled();

  localStorageSpy.mockRestore();
});
