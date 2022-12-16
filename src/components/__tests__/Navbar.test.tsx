import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

const links: { text: string; location: string }[] = [
  { text: 'about', location: '/about' },
  { text: 'careers', location: '/careers' },
  { text: 'events', location: '/events' },
  { text: 'products', location: '/products' },
  { text: 'support', location: '/support' },
];

test('should render Navbar component', () => {
  render(<Navbar />);
  const navbarHeaderElement = screen.getByTestId('header');
  expect(navbarHeaderElement).toBeInTheDocument();
});

// I use test.each to iterate the test cases above
test.each(links)('Check if Nav Bar have 5 links.', (link) => {
  render(<Navbar />);
  //Ensure the text is in the dom, will throw error it can't find
  const linkDom = screen.getByText(link.text);

  //use jest assertion to verify the link property
  expect(linkDom).toHaveAttribute('href', link.location);
});

describe('Logo', () => {
  test('Check if have logo and link to home page', () => {
    render(<Navbar />);
    // get by TestId define in the navBar
    const logoLink = screen.getByTestId(/company-logo/);
    // check the link location
    expect(logoLink).toHaveAttribute('href', '/');

    const logoAttributes = screen.getByTestId("logo");
    // check the logo src
    expect(logoAttributes).toHaveAttribute('src', 'logo.svg');
    // check the alt attribute
    expect(logoAttributes).toHaveAttribute('alt', 'loopstudios logo');
    //check the logo image
    expect(screen.getByAltText(/loopstudios logo/)).toBeInTheDocument();
  });
});

describe('burger icon', () => {
  test('when the screen is a mobile device the burger icon should displayed', () => {
    render(<Navbar />);
    const burgerImg = screen.getByTestId('burgerImg');
    expect(burgerImg).toHaveAttribute('src', 'icon-hamburger.svg');
    expect(burgerImg).toHaveAttribute('alt', '');
    expect(burgerImg).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('close icon', () => {
  test('when the screen is a mobile device and when the icon is displayed a cross should displayed to close it', () => {
    render(<Navbar />);
    const crossImg = screen.getByTestId('crossImg');
    expect(crossImg).toHaveAttribute('src', 'icon-close.svg');
    expect(crossImg).toHaveAttribute('alt', '');
    expect(crossImg).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('Menu', () => {
  it('should open and close the menu', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByTestId('menu-toggle'));
  });
});
