import { act, fireEvent, renderHook } from '@testing-library/react';
import useAutoComplete from './useAutocomplete';

describe('useAutoComplete', () => {
  const mockSource = jest.fn();
  const mockOnChange = jest.fn();
  const options = { debounceDelayMS: 200, minChars: 1, length: 50 };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should update text value on input change', () => {
    const { result } = renderHook(() =>
      useAutoComplete({
        options,
        source: mockSource,
        onChange: mockOnChange,
      })
    );

    act(() => {
      result.current.bindInput.onChange({
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.bindInput.value).toBe('test');
  });

  test('should clear suggestions on input blur', () => {
    const { result } = renderHook(() =>
      useAutoComplete({
        options,
        source: mockSource,
        onChange: mockOnChange,
      })
    );

    act(() => {
      result.current.bindInput.onBlur();
    });

    expect(result.current.suggestions).toHaveLength(0);
  });

  test('should scroll up when arrow up key is pressed', () => {
    const { result } = renderHook(() =>
      useAutoComplete({
        options: { debounceDelayMS: 200, minChars: 1, length: 50 },
        source: mockSource,
        onChange: mockOnChange,
      })
    );

    fireEvent.keyDown(document, { key: 'ArrowUp' });

    expect(result.current.selectedIndex).toBe(-1);
  });
});
