import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AnimatedBackground } from "animated-backgrounds";

export default function Contact() {
  return (
    <>
      <div>
        <AnimatedBackground
          animationName="auroraBorealis"
          theme="portofolio" // gaming, portfolio, landing, presentation, wellness, party, cyberpunk, retro
        />
        <div id="app-container">
          <div className="socialMedia">
            <h2>Redes Sociales</h2>

            <a href="https://www.linkedin.com/in/antoni-xavier-bascu%C3%B1ana-s%C3%A1nchez-21091933a/">
              <FaLinkedin size={40} />
            </a>
            <a href="https://x.com/johndoe">
              <FaTwitter size={40} />
            </a>
            <a href="https://www.instagram.com/johndoe/">
              <AiFillInstagram size={40} />
            </a>
            <h2> Mail</h2>
            <a href="mailto:abso1@iesemilidarder.com">
              <MdEmail size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
