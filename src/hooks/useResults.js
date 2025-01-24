import { use } from "react"
import { getResults } from "../api/getResults"
import { adapter } from "../api/adapters/omdb-response"
const { VITE_API_KEY } = import.meta.env

const promiseCache = {}
const successCache = {}
let abortController

export function useResults(query) {
  const queryText = query.replace(/__\d+$/, '')

  if (successCache[queryText]) {
    return successCache[queryText]
  }

  if (!promiseCache[query]) {
    abortController?.abort('Replaced by new request')
    abortController = new AbortController()
    const queryParams = new URLSearchParams({ apikey: VITE_API_KEY, s: queryText })
    promiseCache[query] = getResults({ 
      url: `https://www.omdbapi.com/?${queryParams.toString()}`, 
      options: {
        signal: abortController.signal
      },
      adapter, 
    })
  }

  const result = use(promiseCache[query])

  abortController = null

  if (result?.errors === undefined) {
    successCache[queryText] = result.data
  }

  return result.data || []
}