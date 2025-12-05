import { CheckEmail } from "../utils/checkEmail";
import { useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { AnimatedBackground } from "animated-backgrounds";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);

  function sendEmail() {
    CheckEmail(email) && setVerified(true);
  }
  function handleChange(e) {
    setVerified(false);
    setEmail(e.target.value);
  }
  return (
    <>
      <div>
        <AnimatedBackground
          animationName="auroraBorealis"
          theme="portofolio" // gaming, portfolio, landing, presentation, wellness, party, cyberpunk, retro
        />
      </div>
      <div id="app-container">
        <div className="news-container">
          <div className="fa-icon">
            <BsNewspaper size={70} />
          </div>

          <h2>Quieres recibir noticias?</h2>
          <input type="text" onChange={(e) => handleChange(e)} />
          <button onClick={() => sendEmail()}>Subscribe</button>

          {verified ? (
            <p>
              Gracias por suscribirte al newsletter!{" "}
              {email.slice(0, email.indexOf("@"))}{" "}
            </p>
          ) : (
            <p>
              Introduce un mail válido y dale al botón de suscribirse para
              continuar
            </p>
          )}
        </div>
      </div>
    </>
  );
}
