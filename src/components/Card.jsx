
export default function Card({title, description, imageUrl, video})  {

return (
    <>
            <h2 className="card-title">{title}</h2>

        {imageUrl ? <img className="card-image" alt="mi foto" src={imageUrl}></img>: <iframe width="415" height="215" src={"https://www.youtube.com/embed/"+ video+"?si=bq8g0KODL5Fw-b03"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
        <p className="card-text">{description}</p>
    </>

    
)

}