import Footer from '../Footer';
import { render, screen } from '@testing-library/react';

const links: { text: string; location: string }[] = [
  { text: 'about', location: '#about' },
  { text: 'careers', location: '/careers' },
  { text: 'events', location: '/events' },
  { text: 'products', location: '#products' },
  { text: 'support', location: '/support' },
];

const socials: { url: string; text: string }[] = [
  { url: 'https://facebook.com/', text: 'facebook' },
  { url: 'https://twitter.com', text: 'twitter' },
  { url: 'https://www.pinterest.com/', text: 'pinterest' },
  { url: 'https://www.instagram.com/', text: 'instagram' },
];

describe('Footer', () => {
  test('Should render without crash', async () => {
    render(<Footer />);
  });
});

test.each(links)('Check if Footer have 5 links.', (link) => {
  render(<Footer />);
  const linkDom = screen.getByText(link.text);
  expect(linkDom).toHaveAttribute('href', link.location);
});

test.each(socials)(
  'Check if Footer have 4 socials img with links.',
  (social) => {
    render(<Footer />);
    const socialDom = screen.getByTestId(social.text);
    expect(socialDom).toHaveAttribute('href', social.url);
    expect(screen.getByAltText(social.text)).toBeInTheDocument();
  }
);

describe('Frontend mentor attribute', () => {
  test('Check if Footer have frontend mentor link.', () => {
    render(<Footer />);
    const attributeLink = screen.getByTestId('attribute-frontend');
    expect(attributeLink).toHaveAttribute(
      'href',
      'https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw/hub'
    );
  });
});

describe('Linkedin attribute', () => {
  test('Check if Footer have Linkedin link.', () => {
    render(<Footer />);
    const attributeLink = screen.getByTestId('attribute-linkedin');
    expect(attributeLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/claire-karsenti/'
    );
  });
});
