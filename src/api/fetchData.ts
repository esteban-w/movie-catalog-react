import { ResponseAdapter } from "../types/api/omdb/adapter.types";
import { JsonApiData, JsonApiError, JsonApiErrorItem } from "../types/api/jsonApi.types"

type fetchDataProps = {
  request: Request;
  responseAdapter: ResponseAdapter
}

let abortController: AbortController | null = null

export async function fetchData({ request, responseAdapter }: fetchDataProps) {
  abortController?.abort('Replaced by new request')
  abortController = new AbortController()

  const errorResult: JsonApiError = {
    errors: [],
  }
  let result: JsonApiData = {
    data: [],
  }

  try {
    const response = await fetch(request, { signal: abortController.signal })
    if (!response.ok) {
      throw new Error(`response error ${response.status}`)
    }
    const jsonData = await response.json()
    result = responseAdapter(jsonData)
  } catch (error) {
    const errorItem: JsonApiErrorItem = {
      title: "bad request / network error",
      meta: { url: request.url },
    }
    if (error instanceof Error && error.message.includes("response error")) {
      errorItem.title = "response error"
      errorItem.status = parseInt(error.message.replace(/[^\d]/g, ''))
      errorResult.errors.push(errorItem)
    }
    if (error instanceof Error) {
      errorItem.detail = error.message || error.name
      errorResult.errors.push(errorItem)
    }
  }

  return errorResult.errors.length ? errorResult : result
}