import { useResults } from "../../hooks/useResults"
import { MovieCard } from "../MovieCard/MovieCard"
import "./MovieResults.css"

export function MovieResults({ query, isProcessing }) {
  if(!query) {
    return null
  }
  
  const results = useResults(query)

  if(!results.length) {
    return <p className={isProcessing ? 'cards--processing' : ''}>No results found</p>
  }

  return (
    <div className={`cards ${isProcessing ? 'cards--processing' : ''}`}>
      {results.map(({ id, attributes }) => (
        <MovieCard key={id} {...attributes} />
      ))}
    </div>
  )
}