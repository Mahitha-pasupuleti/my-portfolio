import './Hero.css';
import mahithaImage from "../assets/Test.jpg";

function HeroAbout() {
  return (
    <section className="hero-about">
      <div className="hero-about-text">
        <h1>Hi, I’m Mahitha 👋</h1>
        <p className="tagline">
          I build scalable apps, real-time systems, and love UI/UX.
        </p>
        <p className="about-me">
          I’m a passionate software developer specializing in creating seamless user experiences and efficient backend systems. I enjoy turning complex problems into elegant solutions.
        </p>
        <div className="hero-about-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-about-image">
        <img src={mahithaImage} alt="Mahitha smiling" />
      </div>
    </section>
  );
}

export default HeroAbout;