import { use } from "react"
import { fetchResults } from "../api/fetchResults"
import { getRequestConfig } from "../api/adapters/omdb/request-config"

const promiseCache = {}
const successCache = {}

export function useResults(query) {
  const queryText = query.replace(/__\d+$/, '')

  if (successCache[queryText]) {
    return successCache[queryText]
  }

  if (!promiseCache[query]) {
    promiseCache[query] = fetchResults(getRequestConfig(queryText))
  }

  const result = use(promiseCache[query])

  if (result?.errors === undefined) {
    successCache[queryText] = result.data
  }

  return result.data || []
}