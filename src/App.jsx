import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {

  return (
    <main>
      <h1>Movie Catalog</h1>

      <form className="form">
        <input className="form__search" name="search-text" type="search" placeholder="Search movie..."/>
        <button className="form__button">
          Search
        </button>
      </form>

      <div className="cards">
        <article className="card">
          <img className="card__img" src={reactLogo} alt="Movie title" />
          <h3 className="card__title">Movie title</h3>
          <p className="card__info">2025</p>
        </article>

        <article className="card">
          <img className="card__img" src={reactLogo} alt="Movie title" />
          <h3 className="card__title">Movie title</h3>
          <p className="card__info">2025</p>
        </article>

        <article className="card">
          <img className="card__img" src={reactLogo} alt="Movie title" />
          <h3 className="card__title">Movie title</h3>
          <p className="card__info">2025</p>
        </article>

        <article className="card">
          <img className="card__img" src={reactLogo} alt="Movie title" />
          <h3 className="card__title">Movie title</h3>
          <p className="card__info">2025</p>
        </article>
      </div>
    </main>
  )
}

export default App
