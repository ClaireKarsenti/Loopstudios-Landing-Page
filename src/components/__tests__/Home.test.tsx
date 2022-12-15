import { render, screen, cleanup } from '@testing-library/react';
import Home from '../Home';

test('should render home component', () => {
  render(<Home />);
  const homeMainElement = screen.getByTestId('main');
  expect(homeMainElement).toBeInTheDocument();

  const homePictureElement = screen.getByTestId('picture');
  expect(homePictureElement).toBeInTheDocument();

  const homeHeadingElement = screen.getByTestId('heading');
  expect(homeHeadingElement).toHaveTextContent(
    'immersive experiences that deliver'
  );
});
