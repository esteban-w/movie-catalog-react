import { use } from "react"
import { fetchResults } from "../api/fetchResults"
import { getRequestConfig } from "../api/adapters/omdb/request-config"

const promiseCache = {}
const successCache = {}
let fetchId = ''

export function useResults(query) {
  if (successCache[query]) {
    return successCache[query]
  }

  if (fetchId.replace(/__\d+$/, '') !== query) {
    fetchId = `${query}__${Date.now()}`
  }

  if (!promiseCache[fetchId]) {
    promiseCache[fetchId] = fetchResults(getRequestConfig(query))
  }

  const result = use(promiseCache[fetchId])

  if (result?.errors === undefined) {
    successCache[query] = result.data
  }

  return result.data || []
}