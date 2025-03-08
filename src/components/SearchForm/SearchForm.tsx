import { FormEvent, ChangeEvent } from "react"
import { getDebounceFn } from "../../utils/getDebounceFn"
import { useGlobalContext } from "../../context/Global/GlobalContext"
import { sanitizeQuery } from "../../utils/sanitizeQuery"
import "./SearchForm.css"

export function SearchForm() {
  const { setQuery } = useGlobalContext()
  const debounceFn = getDebounceFn()
  const searchInputName = "search-text"

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const {elements} = event.currentTarget
    const searchInput = elements.namedItem(searchInputName)
    
    if (!(searchInput instanceof HTMLInputElement)) {
      return
    }

    if (searchInput.value) {
      setQuery(sanitizeQuery(searchInput.value))
    }
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    
    if (value) {
      debounceFn(() => setQuery(sanitizeQuery(value)))
    }
  }

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="form__field">
        <input className="form__search" 
               name={searchInputName} 
               type="search" 
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