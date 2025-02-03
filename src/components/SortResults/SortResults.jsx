import { sortStrategyMap, sortOptions } from "../../models/sort-constants"
import "./SortResults.css"

export function SortResults({ setSortStrategy }) {
  const onChangeHandler = (event) => {
    const {value} = event.target
    
    if (!value) {
      setSortStrategy(null)
      return
    }

    if (sortStrategyMap[value]) {
      setSortStrategy(() => sortStrategyMap[value])
    }
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