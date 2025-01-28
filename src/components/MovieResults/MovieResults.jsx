import { useGlobalContext } from "../../context/Global/GlobalContext"
import { useResults } from "../../hooks/useResults"
import { MovieCard } from "../MovieCard/MovieCard"
import "./MovieResults.css"

export function MovieResults() {
  const { query } = useGlobalContext()

  if (!query) {
    return null
  }

  const results = useResults(query)

  if (!results.length) {
    return <p>No results found</p>
  }

  return (
    <div className="cards">
      {results.map(({ id, attributes }) => (
        <MovieCard key={id} {...attributes} />
      ))}
    </div>
  )
}