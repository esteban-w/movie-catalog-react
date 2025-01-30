import { use } from "react"
import { fetchData } from "../api/fetchData"
import { getRequestConfig } from "../api/adapters/omdb/request-config"

const promiseCache = {}
const successCache = {}
let fetchId = ''

const getQueryKey = (value) => value.replace(/\s/g, '_').toLowerCase()

export function useResults(query) {
  const queryKey = getQueryKey(query)

  if (successCache[queryKey]) {
    return successCache[queryKey]
  }

  if (fetchId.replace(/__\d+$/, '') !== queryKey) {
    fetchId = `${queryKey}__${Date.now()}`
  }

  if (!promiseCache[fetchId]) {
    promiseCache[fetchId] = fetchData(getRequestConfig(query))
  }

  const result = use(promiseCache[fetchId])

  if (result?.errors === undefined) {
    successCache[queryKey] = result.data
  }

  return result.data || []
}