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
          <p className="hero-sectio-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            omnis iure commodi temporibus animi neque, est quo ullam incidunt
            nemo suscipit consequatur recusandae fugit quia quibusdam dolor
            reiciendis voluptate minima!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            obcaecati aliquid ipsa consectetur molestias?
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
