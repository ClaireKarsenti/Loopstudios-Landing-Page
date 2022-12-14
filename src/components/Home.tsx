import Navbar from './Navbar';

import mobileHero from '../assets/images/mobile/image-hero.jpg';
import desktopHero from '../assets/images/desktop/image-hero.jpg';

const Home = () => {
  return (
    <main>
      <Navbar />
      <picture>
        <source media="(min-width: 62.5em)" srcSet={desktopHero} />
        <img src={mobileHero} alt="" aria-hidden="true" />
      </picture>
      <h1>immersive experiences that deliver</h1>
    </main>
  );
};

export default Home;
