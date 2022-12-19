import aboutMobile from '../assets/images/mobile/image-interactive.jpg';
import aboutDesktop from "../assets/images/desktop/image-interactive.jpg";

const About = () => {
  return (
    <article id="about" className="about-container" data-testid="about">
      <picture>
        <source media="(min-width: 62.5em)" srcSet={aboutDesktop} />
        <img data-testid="about-img" src={aboutMobile} alt="" aria-hidden="true"/>
      </picture>
      <div className="text">
        <h2 className="text__heading">The leader in interactive VR</h2>
        <p className="text__content">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </article>
  );
};

export default About;