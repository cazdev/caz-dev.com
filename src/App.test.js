import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chaz L./i);
  expect(linkElement).toBeInTheDocument();
});
