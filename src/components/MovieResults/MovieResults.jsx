import { useState, useMemo } from "react"
import { ResultsToolbar } from "../ResultsToolbar/ResultsToolbar"
import { SortResults } from "../SortResults/SortResults"
import { MovieCards } from "../MovieCards/MovieCards"

export function MovieResults({ results }) {
  const [sortStrategy, setSortStrategy] = useState()
  const items = useMemo(() =>
    !sortStrategy ? results : [...results].sort(sortStrategy)
  , [results, sortStrategy])

  if (!results.length) {
    return <p>No results found</p>
  }

  return (
    <>
      <ResultsToolbar>
        <SortResults setSortStrategy={setSortStrategy} />
      </ResultsToolbar>
      <MovieCards items={items} />
    </>
  )
}