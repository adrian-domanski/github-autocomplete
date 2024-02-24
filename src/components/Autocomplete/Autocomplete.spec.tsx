import { render, screen, fireEvent } from '@testing-library/react';
import Autocomplete from './Autocomplete';
import { fetchResults as fetchResultsMock } from '../../services/autocompleteService/autocompleteService';
import { BASE_URL } from './Autocomplete.types';

const fetchResults: jest.Mock = fetchResultsMock as jest.Mock;

jest.mock('../../services/autocompleteService/autocompleteService', () => ({
  fetchResults: jest.fn(),
}));

describe('Autocomplete', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<Autocomplete />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders input with correct value', () => {
    render(<Autocomplete />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' },
    });
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });

  test('fetches results and redirects user when suggestion is clicked', async () => {
    const suggestions = [
      { name: 'John Doe', type: 'Profile' },
      { name: 'Repository', type: 'Repository' },
    ];
    fetchResults.mockResolvedValue(suggestions);
    window.open = jest.fn();

    render(<Autocomplete />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' },
    });

    const suggestion = await screen.findByText('John Doe');
    fireEvent.click(suggestion);

    expect(fetchResults).toHaveBeenCalledWith('test', expect.any(Object));
    expect(window.open).toHaveBeenCalledWith(`${BASE_URL}John Doe`, '_blank');
  });
});
