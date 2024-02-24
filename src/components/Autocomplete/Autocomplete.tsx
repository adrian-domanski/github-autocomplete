import { HiSearch } from 'react-icons/hi';
import useAutoComplete from './hooks/useAutocomplete/useAutocomplete';
import { AutocompleteConfig, BASE_URL } from './Autocomplete.types';
import SuggestionItem from './components/SuggestionItem/SuggestionItem';
import Searchbar from '../Searchbar/Searchbar';
import { fetchResults } from '../../services/autocompleteService/autocompleteService';
import * as Styled from './Autocomplete.style';

const defaultConfig: AutocompleteConfig = {
  minChars: 3,
  length: 50,
  debounceDelayMS: 500,
};

interface Props {
  options?: Partial<AutocompleteConfig>;
}

const Autocomplete = ({ options }: Props) => {
  const mergedOptions = { ...defaultConfig, ...options };
  const {
    bindInput,
    bindOptions,
    bindOption,
    isLoading,
    suggestions,
    selectedIndex,
  } = useAutoComplete({
    options: mergedOptions,
    onChange: (value) => redirectUser(value.name),
    source: (search) => fetchResults(search, mergedOptions),
  });

  const redirectUser = (searchTerm: string) =>
    window.open(`${BASE_URL}${searchTerm}`, '_blank');

  return (
    <Styled.Wrapper>
      <Searchbar icon={<HiSearch />} isLoading={isLoading} {...bindInput} />
      <Styled.SuggestionItemList {...bindOptions}>
        {suggestions.map((suggestion, index) => (
          <SuggestionItem
            key={index}
            {...suggestion}
            {...bindOption}
            isActive={selectedIndex === index}
          />
        ))}
      </Styled.SuggestionItemList>
    </Styled.Wrapper>
  );
};

export default Autocomplete;
