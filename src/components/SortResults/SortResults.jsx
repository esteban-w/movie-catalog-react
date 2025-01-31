import { sortOptions } from "../../models/sort-constants"
import "./SortResults.css"

export function SortResults({ setSortValue}) {
  const onChangeHandler = (event) => {
    const {value} = event.target
    setSortValue(value)
  }

  return (
    <div className="sort-results">
      <label htmlFor="sort-results" className="sort-results__label">Sort by:</label>
      <select id="sort-results" name="sort-results" className="sort-results__select" onChange={onChangeHandler}>
        <option value="">Select...</option>
        {Object.entries(sortOptions).map(([key, value]) => (
          <option key={key} value={key}>{value}</option>
        ))}
      </select>
    </div>
  )
}