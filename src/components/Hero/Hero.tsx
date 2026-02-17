import "./Hero.css";
import imageHero from "../../assets/appleherosection.png";
//import Button from "../Button/Button.tsx";

interface BtnProps {
  label: string;
  url: string;
}

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>iPhone</h1>
          <p>Say hello to the latest generation of iPhone.</p>
        </div>

        {/*<Button
        label: "Learn More"
        url: "https://localhost:5173/store"/> */}

        <img src={imageHero}></img>
      </div>
    </>
  );
}

export default Hero;
