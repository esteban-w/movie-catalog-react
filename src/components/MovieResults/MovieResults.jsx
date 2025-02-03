import { useState, useMemo } from "react"
import { ResultsToolbar } from "../ResultsToolbar/ResultsToolbar"
import { SortResults } from "../SortResults/SortResults"
import { MovieCards } from "../MovieCards/MovieCards"

export function MovieResults({ results }) {
  const [sortCompare, setSortCompare] = useState()
  const items = useMemo(() => {
    return !sortCompare ? results : [...results].sort(sortCompare)
  }, [results, sortCompare])

  if (!results.length) {
    return <p>No results found</p>
  }

  return (
    <>
      <ResultsToolbar>
        <SortResults setSortCompare={setSortCompare} />
      </ResultsToolbar>
      <MovieCards items={items} />
    </>
  )
}