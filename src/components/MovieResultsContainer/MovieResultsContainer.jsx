import { useGlobalContext } from "../../context/Global/GlobalContext"
import { useResults } from "../../hooks/useResults"
import { MovieResults } from "../MovieResults/MovieResults"

export function MovieResultsContainer() {
  const { query } = useGlobalContext()
  const results = useResults(query)

  if (!query) {
    return null
  }

  return (
    <MovieResults results={results} />
  )
}