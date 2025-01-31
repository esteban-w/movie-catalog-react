import { MovieCard } from "../MovieCard/MovieCard"
import "./MovieCards.css"

export function MovieCards({ items }) {
  return (
    <div className="cards">
      {items.map(({ id, attributes }) => (
        <MovieCard key={id} {...attributes} />
      ))}
    </div>
  )
}