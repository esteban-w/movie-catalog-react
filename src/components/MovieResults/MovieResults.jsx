import { useState } from "react"
import { ResultsToolbar } from "../ResultsToolbar/ResultsToolbar"
import { SortResults } from "../SortResults/SortResults"
import { SORT_NEWEST, SORT_OLDEST } from "../../models/sort-constants"
import { MovieCard } from "../MovieCard/MovieCard"
import "./MovieResults.css"

export function MovieResults({ results }) {
  const [sortValue, setSortValue] = useState()
  const items = [...results]

  if (!items.length) {
    return <p>No results found</p>
  }

  if (sortValue === SORT_OLDEST) {
    items.sort((a, b) => a.attributes.year - b.attributes.year)
  }

  if (sortValue === SORT_NEWEST) {
    items.sort((a, b) => b.attributes.year - a.attributes.year)
  }

  return (
    <>
      <ResultsToolbar>
        <SortResults setSortValue={setSortValue} />
      </ResultsToolbar>
      <div className="cards">
        {items.map(({ id, attributes }) => (
          <MovieCard key={id} {...attributes} />
        ))}
      </div>
    </>
  )
}