import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/404.png";

import { AnimatedBackground } from "animated-backgrounds";
import Card from "./Card.jsx";
export default function NotFound({title}) {
  return (
    
    <div className="app-container">
        <h1>{title}</h1>
      <AnimatedBackground animationName="auroraBorealis" />
      <div className="presentation_card">
        <Card
          title={"Página No Encontrada"}
          image={image}
          description={"Oops! La página que buscas no existe."}
        ></Card>

         <div className="not-found-actions">
        <Link to="/" className="not-found-button">
          Go Back Home
        </Link>
      </div>
      </div>

     
    </div>
  );
}
