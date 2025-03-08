import { use } from "react"
import { JsonApiData, JsonApiError, JsonApiResourceItem } from "../types/api/jsonApi.types"
import { fetchData } from "../api/fetchData"
import { getRequestConfig } from "../api/adapters/omdb/request-config"

type DataCache = {
  [key: string]: JsonApiResourceItem[]
}

type PromiseCache = {
  [key: string]: Promise<JsonApiError | JsonApiData>
}

const promiseCache: PromiseCache = {}
const successCache: DataCache = {}
let fetchId = ''

const getQueryKey = (value: string) => value.replace(/\s/g, '_').toLowerCase()

export function useResults(query: string) {
  if (!query) {
    return []
  }
  
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

  if ('data' in result) {
    successCache[queryKey] = result.data
  }

  return successCache[queryKey] || []
}