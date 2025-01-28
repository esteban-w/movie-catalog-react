import { Suspense } from "react"
import { GlobalProvider } from "./context/Global/GlobalProvider"
import { MovieResults } from "./components/MovieResults/MovieResults"
import { MovieResultsLoading } from "./components/MovieResults/MovieResultsLoading"
import { SearchForm } from "./components/SearchForm/SearchForm"
import "./App.css"

function App() {
  return (
    <main>
      <h1>Movie Catalog</h1>

      <GlobalProvider>
        <SearchForm />

        <Suspense fallback={<MovieResultsLoading />}>
          <MovieResults/>
        </Suspense>
      </GlobalProvider>
    </main>
  )
}

export default App
