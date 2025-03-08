import { useState, useMemo } from "react"
import { SortStrategy } from "../../types/models/sort.types"
import { JsonApiResourceItem } from "../../types/api/jsonApi.types"
import { ResultsToolbar } from "../ResultsToolbar/ResultsToolbar"
import { SortResults } from "../SortResults/SortResults"
import { MovieCards } from "../MovieCards/MovieCards"

type MovieResultsProps = {
  results: JsonApiResourceItem[]
}

export function MovieResults({ results }: MovieResultsProps) {
  const [sortStrategy, setSortStrategy] = useState<SortStrategy | null>(null)
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