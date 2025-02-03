import { useMemo } from "react"
import { SORT_OLDEST, SORT_NEWEST } from "../../models/sort-constants"
import { sortOptions } from "../../models/sort-constants"
import "./SortResults.css"

export function SortResults({ setSortCompare }) {
  const sortCompareMap = useMemo(() => ({
    [SORT_OLDEST]: (a, b) => a.attributes.release_year - b.attributes.release_year,
    [SORT_NEWEST]: (a, b) => b.attributes.release_year - a.attributes.release_year,
  }), [])

  const onChangeHandler = (event) => {
    const {value} = event.target
    
    if (!value) {
      setSortCompare(null)
      return
    }

    if (sortCompareMap[value]) {
      setSortCompare(() => sortCompareMap[value])
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