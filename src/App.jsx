import { Suspense, useState, useDeferredValue } from "react"
import { MovieResults } from "./components/MovieResults/MovieResults"
import { MovieResultsLoading } from "./components/MovieResults/MovieResultsLoading"
import "./App.css"

function App() {
  const [query, setQuery] = useState()
  const deferredQuery = useDeferredValue(query)
  const isStale = query !== deferredQuery;

  const onSubmitHandler = (event) => {
    event.preventDefault()

    const {elements} = event.target

    setQuery(`${elements["search-text"].value}__${Date.now()}`)
  }

  return (
    <main>
      <h1>Movie Catalog</h1>

      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form__field">
          <input className="form__search" name="search-text" type="search" placeholder="Search movie..."/>
          <button className="form__button">
            Search
          </button>
        </div>
      </form>

      <Suspense fallback={<MovieResultsLoading />}>
          <MovieResults query={deferredQuery} isProcessing={isStale}/>
      </Suspense>
    </main>
  )
}

export default App
