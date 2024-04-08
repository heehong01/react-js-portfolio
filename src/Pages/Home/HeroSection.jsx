import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey, I'm Hee Jin</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Full Stack</span> <br />
            Developer
          </h1>
          <p className="hero-section-description">
              A Dreamer, driven by a deep-seated desire to make a difference,
              I am on a mission to harness the power of technology for the greater good.
              By combining my passion for innovation with a commitment to social responsibility,
              I strive to create meaningful change that transcends boundaries and empowers communities worldwide.
            <br />
            If you share my vision for a safer, more inclusive digital future,
            I'd love to connect and explore how we can collaborate to turn dreams into reality.
            Feel free to reach out, and let's embark on this journey together.

          </p>
        </div>
        <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
          <button className="btn btn-primary">Get in Touch</button>
        </Link>
      </div>
      <div className="hero-section-img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
