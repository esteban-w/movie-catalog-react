import { JsonApiResourceItem } from "../../types/api/jsonApi.types"
import { MovieCard } from "../MovieCard/MovieCard"
import "./MovieCards.css"

type MovieCardsProps = {
  items: JsonApiResourceItem[]
}

export function MovieCards({ items }: MovieCardsProps) {
  return (
    <div className="cards">
      {items.map(({ id, attributes }) => (
        <MovieCard key={id} {...attributes} />
      ))}
    </div>
  )
}