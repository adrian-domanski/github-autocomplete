import React, { useRef, useState } from 'react';
import {
  AutocompleteConfig,
  KeyCodes,
  SearchOption,
} from '../../Autocomplete.types';

interface UseAutoCompleteProps {
  options: AutocompleteConfig;
  source: (searchTerm: string) => Promise<SearchOption[]>;
  onChange: (selectedOption: SearchOption) => void;
}

const useAutoComplete = ({
  options,
  source,
  onChange,
}: UseAutoCompleteProps) => {
  const [myTimeout, setMyTimeOut] = useState<NodeJS.Timeout | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [suggestions, setSuggestions] = useState<SearchOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [textValue, setTextValue] = useState<string>('');

  const delayInvoke = (cb: () => void) => {
    if (myTimeout) {
      clearTimeout(myTimeout);
    }
    const timeout = setTimeout(cb, options.debounceDelayMS);
    setMyTimeOut(timeout);
  };

  const selectOption = (index: number) => {
    if (index > -1) {
      onChange(suggestions[index]);
      setTextValue(suggestions[index].name);
    }
    clearSuggestions();
  };

  const getSuggestions = async (searchTerm: string) => {
    if (searchTerm && source) {
      const options = await source(searchTerm);
      setSuggestions(options);
    }
  };

  const clearSuggestions = () => {
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  const onTextChange = (searchTerm: string) => {
    setTextValue(searchTerm);
    clearSuggestions();
    if (searchTerm.length >= options.minChars) {
      setIsLoading(true);
      delayInvoke(async () => {
        await getSuggestions(searchTerm);
        setIsLoading(false);
      });
    }
  };

  const optionHeight = listRef?.current?.children[0]?.clientHeight || 0;

  const scrollUp = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
    if (listRef.current) {
      listRef.current.scrollTop -= optionHeight;
    }
  };

  const scrollDown = () => {
    if (selectedIndex < suggestions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
    if (listRef.current) {
      listRef.current.scrollTop = selectedIndex * optionHeight;
    }
  };

  const keyOperation: Record<KeyCodes, () => void> = {
    [KeyCodes.ArrowDown]: scrollDown,
    [KeyCodes.ArrowUp]: scrollUp,
    [KeyCodes.Enter]: () => selectOption(selectedIndex),
    [KeyCodes.Escape]: clearSuggestions,
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyOperation[e.code as KeyCodes]) {
      keyOperation[e.code as KeyCodes]();
    } else {
      setSelectedIndex(-1);
    }
  };

  return {
    bindOption: {
      onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const nodes = Array.from(listRef.current!.children);
        const closestLi = e.currentTarget.closest('li');
        if (closestLi) {
          const index = nodes.indexOf(closestLi);
          selectOption(index);
        } else {
          selectOption(-1);
        }
      },
    },
    bindInput: {
      value: textValue,
      onBlur: () => setTimeout(clearSuggestions, 200),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        onTextChange(e.target.value),
      onKeyDown,
    },
    bindOptions: {
      ref: listRef,
    },
    isLoading,
    suggestions,
    selectedIndex,
  };
};

export default useAutoComplete;
