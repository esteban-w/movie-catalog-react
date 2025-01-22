import { use } from "react"
import { getResults } from "../api/getResults"
import { adapter } from "../api/adapters/omdb-response"

const promiseCache = {}
const successCache = {}

export function useResults(query) {
  const queryText = query.replace(/__\d+$/, '')

  if (successCache[queryText]) {
    return successCache[queryText]
  }

  if (!promiseCache[query]) {
    promiseCache[query] = getResults(`/src/api/${queryText}-response.json`, adapter)
  }

  const result = use(promiseCache[query])

  if (result?.errors === undefined) {
    successCache[queryText] = result.data
  }

  return result.data || []
}