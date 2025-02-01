import { memo, useRef, useMemo, useCallback } from "react"
import { SORT_OLDEST, SORT_NEWEST } from "../../models/sort-constants"
import { sortOptions } from "../../models/sort-constants"
import "./SortResults.css"

export const SortResults = memo(function SortResults({ results, setItems }) {
  const itemsOrderRef = useRef(results.map((item, index) => ({ index, value: item.attributes.release_year })))
  const sortCompareMap = useMemo(() => ({
    [SORT_OLDEST]: (a, b) => a.value - b.value,
    [SORT_NEWEST]: (a, b) => b.value - a.value,
  }), [])

  const onChangeHandler = useCallback((event) => {
    const {value} = event.target
    
    if (!value) {
      setItems([...results])
      return
    }

    if (sortCompareMap[value]) {
      setItems(itemsOrderRef.current.sort(sortCompareMap[value]).map(({ index }) => results[index]))
    }
  }, [])

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
})