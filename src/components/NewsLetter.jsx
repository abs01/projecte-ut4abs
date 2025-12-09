import { CheckEmail } from "../utils/checkEmail";
import { useEffect, useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { AnimatedBackground } from "animated-backgrounds";
import Card from "./Card";
export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [name, setName] = useState("");

  function sendEmail() {
    CheckEmail(email) && setVerified(true);
  }
  function handleChange(e) {
    setVerified(false);
    setEmail(e.target.value);
  }
//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

  useEffect(() => setName(capitalizeFirstLetter(email.slice(0, email.indexOf("@")))),[verified])


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
          {verified ?
            (<p>
              Gracias por suscribirte al newsletter!{" "}
              {name}{" "}
            </p>): (
            <p>
              Introduce un mail válido y dale al botón de suscribirse para
              continuar
            </p>
          )
            }
            
       </div>
       <br />
          {verified && (
            <>
       <div className="card">
  <Card 
    title={"Noticia!"} 
    description={
      "Has recibido tu primera noticia, gracias por suscribirte, " + 
      name + 
      ". A partir de ahora comenzarás a recibir información relevante, novedades exclusivas y contenido personalizado según tus intereses. Esperamos que disfrutes esta nueva experiencia con nosotros."
    } 
        //a la hora de cargar la página hay que tener algo de paciencia con lso picsum, tardan lo suyo

    image={"https://picsum.photos/seed/noticia1/300/300"} 
  />
</div>

<div className="card">
  <Card 
    title={"Actualización importante"} 
    description={
      "Hola " + 
      name + 
      ", queremos informarte que hemos lanzado nuevas funciones dentro de la plataforma para mejorar tu experiencia de usuario. Ahora podrás acceder a contenido más rápido, con una interfaz más sencilla y herramientas mejoradas."
    } 
    image={"https://picsum.photos/seed/noticia2/300/300"} 
  />
</div>

<div className="card">
  <Card 
    title={"Recordatorio"} 
    description={
      name + 
      ", este es un pequeño recordatorio para que revises tu perfil y completes tu información personal. Mantener tus datos actualizados te permitirá recibir noticias más precisas y aprovechar al máximo todas nuestras funcionalidades."
    } 
    image={"https://picsum.photos/seed/noticia3/300/300"} 
  />
</div>


            </>
          )}
       

        </div>
     
    </>
  );
}
