import "./MovieCard.css";

type MovieCardProps = {
  title: string;
  year: string;
  image: string | null;
}

export function MovieCard({ title, year, image }: MovieCardProps) {
  return (
    <article className="card">
      {image ? (
        <img className="card__img" src={image} alt={title} title={title} width="300" height="444" />
      ) : (
        <div className="card__no-image">
          <svg className="card__no-image-icon" viewBox="0 0 24 24">
            <path d="M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2z"></path>
          </svg>
          <p className="card__no-image-title">Image not available</p>
        </div>
      )}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__info">{year}</p>
      </div>
    </article>
  )
}