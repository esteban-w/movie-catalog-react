import { Suspense } from "react"
import { GlobalProvider } from "./context/Global/GlobalProvider"
import { MainHeader } from "./components/MainLayout/MainHeader"
import { MainBody } from "./components/MainLayout/MainBody"
import { MovieResults } from "./components/MovieResults/MovieResults"
import { MovieResultsLoading } from "./components/MovieResults/MovieResultsLoading"
import { SearchForm } from "./components/SearchForm/SearchForm"
import "./App.css"

function App() {
  return (
    <GlobalProvider>
      <MainHeader>
        <h1>Movie Catalog</h1>
        <SearchForm />
      </MainHeader>

      <MainBody>
        <Suspense fallback={<MovieResultsLoading />}>
          <MovieResults/>
        </Suspense>
      </MainBody>
    </GlobalProvider>
  )
}

export default App
