import { render, screen } from '@testing-library/react';
import ItsJustDuck from './ItsJustDuck';

describe('ItsJustDuck', () => {
  test('renders image with correct alt text', () => {
    render(<ItsJustDuck />);

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();

    expect(imageElement).toHaveAttribute(
      'alt',
      'detective duck, helps with debugging'
    );
  });

  test('clicking on the image triggers alert', () => {
    const mockAlert = jest.spyOn(window, 'alert');
    mockAlert.mockImplementation(() => {});

    render(<ItsJustDuck />);

    const imageElement = screen.getByRole('img');
    imageElement.click();

    expect(mockAlert).toHaveBeenCalled();

    mockAlert.mockRestore();
  });
});
