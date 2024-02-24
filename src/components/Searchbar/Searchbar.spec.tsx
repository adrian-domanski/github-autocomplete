import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';

describe('Searchbar component', () => {
  test('renders without crashing', () => {
    render(<Searchbar />);
  });

  test('renders search icon if provided', () => {
    const icon = <span data-testid='search-icon' />;
    render(<Searchbar icon={icon} />);
    const searchIcon = screen.getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();
  });

  test('renders input placeholder correctly', () => {
    render(<Searchbar />);
    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders loading spinner if isLoading is true', async () => {
    render(<Searchbar isLoading />);
    const spinner = await screen.findByLabelText('loading...');
    expect(spinner).toBeInTheDocument();
  });
});
