import { render, screen } from '@testing-library/react';
import About from '../About';

test('should render about component', () => {
  render(<About />);
  const aboutElement = screen.getByTestId('about');
  expect(aboutElement).toBeInTheDocument();
  });

describe('Image', () => {
  test('Check if have image in about component', () => {
    render(<About />);
    const aboutImg = screen.getByTestId(/about-img/);

    expect(aboutImg).toHaveAttribute('src', 'image-interactive.jpg');
    expect(aboutImg).toHaveAttribute('alt', '');
    expect(aboutImg).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('Text', () => {
  test('Check if have text in about component', () => {
    render(<About />);
    const headingText = screen.getByText(/leader in interactive/);
    const contentText = screen.getByText(/Founded in 2011, Loopstudios/);

    expect(headingText).toBeInTheDocument();
    expect(contentText).toBeInTheDocument();
  });
});