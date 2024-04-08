import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Resume from "../../Resume";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Resume />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
