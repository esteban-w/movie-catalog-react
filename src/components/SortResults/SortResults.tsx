import { ChangeEvent, Dispatch, SetStateAction} from "react"
import { sortStrategyMap, sortOptions } from "../../models/sort-constants"
import { SortStrategy } from "../../types/models/sort.types"
import "./SortResults.css"

type SortResultsProps = {
  setSortStrategy: Dispatch<SetStateAction<SortStrategy | null>>
}

export function SortResults({ setSortStrategy }: SortResultsProps) {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const {value} = event.target
    
    if (!value) {
      setSortStrategy(null)
      return
    }

    if (value in sortStrategyMap) {
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