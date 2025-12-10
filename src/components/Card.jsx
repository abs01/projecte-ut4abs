export default function Card({ title, description, image, video }) {
  return (
    <>
      <h2 className="card-title">{title}</h2>
      {image ? (
        <img className="card-image" alt="mi foto" src={image}></img>
      ) : (
        <iframe
          width="415"
          height="215"
          src={
            "https://www.youtube.com/embed/" + video + "?si=bq8g0KODL5Fw-b03"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      <p className="card-text">{description}</p>
    </>
  );
}
