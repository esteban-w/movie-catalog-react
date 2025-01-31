import { useState, useMemo } from "react"
import { ResultsToolbar } from "../ResultsToolbar/ResultsToolbar"
import { SortResults } from "../SortResults/SortResults"
import { SORT_NEWEST, SORT_OLDEST } from "../../models/sort-constants"
import { MovieCards } from "../MovieCards/MovieCards"

export function MovieResults({ results }) {
  if (!results.length) {
    return <p>No results found</p>
  }

  const [sortValue, setSortValue] = useState()
  const items = useMemo(() => {
    if (!sortValue) {
      return results
    }
    const sortCompareMap = {
      [SORT_OLDEST]: (a, b) => a.attributes.year - b.attributes.year,
      [SORT_NEWEST]: (a, b) => b.attributes.year - a.attributes.year,
    }
    
    return [...results].sort(sortCompareMap[sortValue])
  }, [results, sortValue])

  return (
    <>
      <ResultsToolbar>
        <SortResults setSortValue={setSortValue} />
      </ResultsToolbar>
      <MovieCards items={items} />
    </>
  )
}