import { use } from "react"
import { fetchResults } from "../api/fetchResults"
import { adapter } from "../api/adapters/omdb-response"
const { VITE_API_KEY } = import.meta.env

const promiseCache = {}
const successCache = {}

export function useResults(query) {
  const queryText = query.replace(/__\d+$/, '')

  if (successCache[queryText]) {
    return successCache[queryText]
  }

  if (!promiseCache[query]) {
    const queryParams = new URLSearchParams({ apikey: VITE_API_KEY, s: queryText })
    promiseCache[query] = fetchResults({ 
      url: `https://www.omdbapi.com/?${queryParams.toString()}`,
      adapter, 
    })
  }

  const result = use(promiseCache[query])

  if (result?.errors === undefined) {
    successCache[queryText] = result.data
  }

  return result.data || []
}