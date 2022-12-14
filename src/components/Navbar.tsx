import { useState } from 'react';

import { links } from '../utils/Navbar.data';
import logo from '../assets/images/logo.svg';
import burgerMenu from '../assets/images/icon-hamburger.svg';
import closeMenu from '../assets/images/icon-close.svg';

import '../assets/sass/layout/_navbar.scss';

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleLinks: () => void = () => {
    setOpenNav(!openNav);
    setShowNav(!showNav);
  };

  return (
    <header>
      <div>
        <img src={logo} alt="" aria-hidden="true" />
      </div>

      <div className="mobile-nav-toggle" onClick={toggleLinks}>
        <button className={openNav ? 'close' : 'open'}>
          <img src={burgerMenu} alt="" aria-hidden="true" />
        </button>
        <button className={openNav ? 'open' : 'close'}>
          <img src={closeMenu} alt="" aria-hidden="true" />
        </button>
      </div>

      <nav className={showNav ? 'show-nav' : 'hide-nav'}>
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
      </nav>
    </header>
  );
};

export default Navbar;
