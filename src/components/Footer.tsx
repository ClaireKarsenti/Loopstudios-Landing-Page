import logo from '../assets/images/logo.svg';
import { links } from '../utils/Navbar.data';
import { socials } from '../utils/Footer.data';

const Footer = () => {
  return (
    <footer>
      <div className="logo-container">
        <img src={logo} alt="loopstudios logo" />
      </div>

      <ul className="links">
        {links?.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>

      <ul className="social">
        {socials?.map((social) => {
          const { id, url, img, text } = social;
          return (
            <li key={id}>
              <a href={url} data-testid={text}>
                <img src={img} alt={text} />
              </a>
            </li>
          );
        })}
      </ul>

      <div>
        <p className="copyright">© 2022 Loopstudios. All rights reserved.</p>

        <p className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw/hub"
            target="_blank"
            rel="noreferrer"
            data-testid="attribute-frontend"
          >
            Frontend Mentor
          </a>
          . Coded with <span className="heart">🖤</span> by{' '}
          <a
            href="https://www.linkedin.com/in/claire-karsenti/"
            target="_blank"
            rel="noreferrer"
            data-testid="attribute-linkedin"
          >
            Claire Karsenti
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
