import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders ItsJustDuck component', () => {
    render(<App />);
    const duckElement = screen.getByAltText(
      'detective duck, helps with debugging'
    );
    expect(duckElement).toBeInTheDocument();
  });

  test('renders Autocomplete component with default options', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });

  test('renders Autocomplete component with custom options', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });
});
