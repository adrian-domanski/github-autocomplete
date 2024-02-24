import { toast } from 'react-toastify';
import {
  API_URL,
  AutocompleteConfig,
  SearchOption,
} from '../components/Autocomplete/Autocomplete.types';

const fetchRepositories = async (
  searchTerm: string,
  config: AutocompleteConfig
): Promise<SearchOption[]> => {
  try {
    const response = await fetch(
      `${API_URL}search/repositories?q=${searchTerm}&per_page=${
        config.length / 2
      }`
    );
    const data = await response.json();
    return data.items.map(
      (item: any): SearchOption => ({
        name: item.full_name,
        type: 'Repository',
      })
    );
  } catch (error) {
    throw new Error('Error fetching repository data!');
  }
};

const fetchUsers = async (
  searchTerm: string,
  config: AutocompleteConfig
): Promise<SearchOption[]> => {
  try {
    const response = await fetch(
      `${API_URL}search/users?q=${searchTerm}&per_page=${config.length / 2}`
    );
    const data = await response.json();
    return data.items.map(
      (item: any): SearchOption => ({
        name: item.login,
        type: 'Profile',
      })
    );
  } catch (error) {
    throw new Error('Error fetching user data!');
  }
};

const combineAndSortResults = (
  repositoryResults: SearchOption[],
  userResults: SearchOption[],
  config: AutocompleteConfig
): SearchOption[] => {
  const results = [...repositoryResults, ...userResults].slice(
    0,
    config.length
  );
  return results.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
};

export const fetchResults = async (
  searchTerm: string,
  config: AutocompleteConfig
): Promise<SearchOption[]> => {
  try {
    const repositoryResults = await fetchRepositories(searchTerm, config);
    const userResults = await fetchUsers(searchTerm, config);

    if (repositoryResults.length === 0 && userResults.length === 0) {
      toast.warn('There are no results 🤷');
    }

    return combineAndSortResults(repositoryResults, userResults, config);
  } catch (error) {
    toast.error('Error fetching search results!');
    return [];
  }
};
