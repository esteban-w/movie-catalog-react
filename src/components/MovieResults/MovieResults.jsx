import { useState } from "react"
import { ResultsToolbar } from "../ResultsToolbar/ResultsToolbar"
import { SortResults } from "../SortResults/SortResults"
import { MovieCards } from "../MovieCards/MovieCards"

export function MovieResults({ results }) {
  const [items, setItems] = useState([...results])

  if (!results.length) {
    return <p>No results found</p>
  }

  return (
    <>
      <ResultsToolbar>
        <SortResults results={results} setItems={setItems} />
      </ResultsToolbar>
      <MovieCards items={items} />
    </>
  )
}