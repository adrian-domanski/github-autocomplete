import { API_URL } from '../../components/Autocomplete/Autocomplete.types';
import { fetchResults } from './autocompleteService';
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
  toast: {
    warn: jest.fn(),
    error: jest.fn(),
  },
}));

const mockRepositories = [
  { full_name: 'repository1' },
  { full_name: 'repository2' },
];

const mockUsers = [{ login: 'user1' }, { login: 'user2' }];

describe('autocompleteService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetches and combines results correctly', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: async () => ({ items: mockRepositories }),
      })
      .mockResolvedValueOnce({
        json: async () => ({ items: mockUsers }),
      });

    const results = await fetchResults('test', {
      length: 5,
      debounceDelayMS: 500,
      minChars: 3,
    });

    expect(results).toHaveLength(4);

    expect(results[0]).toEqual({ name: 'repository1', type: 'Repository' });
    expect(results[1]).toEqual({ name: 'repository2', type: 'Repository' });
    expect(results[2]).toEqual({ name: 'user1', type: 'Profile' });
    expect(results[3]).toEqual({ name: 'user2', type: 'Profile' });

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(
      `${API_URL}search/repositories?q=test&per_page=2.5`
    );
    expect(fetch).toHaveBeenCalledWith(
      `${API_URL}search/users?q=test&per_page=2.5`
    );
  });

  test('handles empty results', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: async () => ({ items: [] }),
      })
      .mockResolvedValueOnce({
        json: async () => ({ items: [] }),
      });

    const results = await fetchResults('test', {
      length: 5,
      debounceDelayMS: 500,
      minChars: 3,
    });

    expect(results).toHaveLength(0);
    expect(toast.warn).toHaveBeenCalledWith('There are no results 🤷');
  });

  test('handles errors', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Network Error'));

    const results = await fetchResults('test', {
      length: 5,
      debounceDelayMS: 500,
      minChars: 3,
    });

    expect(results).toHaveLength(0);
    expect(toast.error).toHaveBeenCalledWith('Error fetching search results!');
  });
});
