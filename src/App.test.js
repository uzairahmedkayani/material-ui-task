import {render, screen} from '@testing-library/react';
import App from './App';

test('Renders CustomCard components', () => {
  render(<App />);  
  expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Description for Product 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Price: \$29.99/i)).toBeInTheDocument();
});