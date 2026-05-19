import { render, screen } from '@testing-library/react';
import ConfirmedBooking from './ConfirmedBooking';

test('Successfully reads and displays reservation data from localStorage on load', () => {
  const mockBookings = [
    { date: '2026-05-28', time: '20:00', guests: 3, occasion: 'Anniversary' },
  ];

  const localStorageSpy = jest
    .spyOn(Storage.prototype, 'getItem')
    .mockReturnValue(JSON.stringify(mockBookings));

  render(<ConfirmedBooking bookingData={mockBookings} />);

  const dateElement = screen.getByText('2026-05-28');
  const timeElement = screen.getByText('20:00');
  const occasionElement = screen.getByText('Anniversary');

  expect(dateElement).toBeInTheDocument();
  expect(occasionElement).toBeInTheDocument();
});
