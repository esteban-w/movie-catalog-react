import { use } from "react"
import { getResults } from "../api/getResults"
import { adapter } from "../api/adapters/omdb-response"

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
    promiseCache[query] = getResults({ 
      url: `/src/api/${queryText}-response.json`, 
      options: { signal: abortController.signal },
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