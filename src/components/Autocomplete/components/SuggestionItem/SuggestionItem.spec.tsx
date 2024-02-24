import { render, screen } from '@testing-library/react';
import SuggestionItem from './SuggestionItem';

describe('SuggestionItem', () => {
  test('renders with correct name', () => {
    render(<SuggestionItem name='MOCK_NAME' type='Profile' />);

    expect(screen.getByText('MOCK_NAME')).toBeInTheDocument();
  });

  test('renders as active when isActive is true', () => {
    render(<SuggestionItem name='MOCK_NAME' type='Profile' isActive />);

    expect(screen.getByRole('listitem')).toHaveStyle({
      backgroundColor: '#e1e1e1',
    });
  });

  test('renders with different name values', () => {
    render(<SuggestionItem name='John Doe' type='Profile' />);
    render(<SuggestionItem name='Jane Smith' type='Profile' />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});
