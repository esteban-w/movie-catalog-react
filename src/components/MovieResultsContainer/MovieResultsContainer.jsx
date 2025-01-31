import { useGlobalContext } from "../../context/Global/GlobalContext"
import { useResults } from "../../hooks/useResults"
import { MovieResults } from "../MovieResults/MovieResults"

export function MovieResultsContainer() {
  const { query } = useGlobalContext()

  if (!query) {
    return null
  }
  
  const results = useResults(query)

  return (
    <MovieResults results={results} />
  )
}