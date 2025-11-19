import profilePic from '../assets/images/Yo.jpg';

export default function Card()  {
return (
    <div className="card">
        <h2 className="card-title">Este Soy yo</h2>

        <img className="card-image" alt="mi foto" src={profilePic}></img>
        <p className="card-text">Soy un alumno de DAW y estoy estudiando React y Php </p>
    </div>
)

}