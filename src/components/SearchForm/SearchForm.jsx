import { getDebounceFn } from "../../utils/getDebounceFn"
import { useGlobalContext } from "../../context/Global/GlobalContext"
import "./SearchForm.css"

export function SearchForm() {
  const { setQuery } = useGlobalContext()
  const debounceFn = getDebounceFn()
  const searchInputName = "search-text"

  const onSubmitHandler = (event) => {
    event.preventDefault()

    const {elements} = event.target

    setQuery(elements[searchInputName].value)
  }

  const onChangeHandler = (event) => {
    const {value} = event.target
    
    debounceFn(() => setQuery(value))
  }

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="form__field">
        <input className="form__search" 
               name={searchInputName} 
               type="search" 
               placeholder="Search movie..." 
               onChange={onChangeHandler}/>
        <button className="form__button">
          Search
        </button>
      </div>
    </form>
  )

}