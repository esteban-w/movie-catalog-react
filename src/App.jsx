import { Suspense, useState, useDeferredValue } from "react"
import { MovieResults } from "./components/MovieResults/MovieResults"
import { MovieResultsLoading } from "./components/MovieResults/MovieResultsLoading"
import { getDebounceFn } from "./utils/getDebounceFn"
import "./App.css"

function App() {
  const [query, setQuery] = useState()
  const deferredQuery = useDeferredValue(query)
  const isStale = query !== deferredQuery
  const debounceFn = getDebounceFn()

  const onSubmitHandler = (event) => {
    event.preventDefault()

    const {elements} = event.target

    setQuery(`${elements["search-text"].value}__${Date.now()}`)
  }

  const onChangeHandler = (event) => {
    const {value} = event.target
    
    debounceFn(() => setQuery(`${value}__${Date.now()}`))
  }

  return (
    <main>
      <h1>Movie Catalog</h1>

      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form__field">
          <input className="form__search" 
                name="search-text"
                type="search"
                placeholder="Search movie..."
                onChange={onChangeHandler}/>
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
