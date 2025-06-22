import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // The app should render without throwing an error
});

test('renders header with logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/Sign Translate/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  const translateLink = screen.getByText(/Translate/i);
  const aboutLink = screen.getByText(/About/i);
  
  expect(homeLink).toBeInTheDocument();
  expect(translateLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
}); 