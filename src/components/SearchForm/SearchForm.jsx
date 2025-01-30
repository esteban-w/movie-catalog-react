import { getDebounceFn } from "../../utils/getDebounceFn"
import { useGlobalContext } from "../../context/Global/GlobalContext"
import { sanitizeQuery, queryCharClassContent } from "../../utils/sanitizeQuery"
import "./SearchForm.css"

export function SearchForm() {
  const { setQuery } = useGlobalContext()
  const debounceFn = getDebounceFn()
  const searchInputName = "search-text"

  const onSubmitHandler = (event) => {
    event.preventDefault()

    const {elements} = event.target
    const {value} = elements[searchInputName]

    setQuery(sanitizeQuery(value))
  }

  const onChangeHandler = (event) => {
    const {value} = event.target
    
    debounceFn(() => setQuery(sanitizeQuery(value)))
  }

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="form__field">
        <input className="form__search" 
               name={searchInputName} 
               type="search" 
               pattern={`[${queryCharClassContent}]+`}
               placeholder="Search movie..." 
               onChange={onChangeHandler}
               required />
        <button className="form__button">
          Search
        </button>
      </div>
    </form>
  )

}