import "./MovieCard.css";

export function MovieCard({title, year, image}) {
  return (
    <article className="card">
      <img className="card__img" src={image} alt={title} title={title} width="300" height="444" />
      <h3 className="card__title">{title}</h3>
      <p className="card__info">{year}</p>
    </article>
  )
}