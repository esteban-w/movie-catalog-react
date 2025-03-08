import { ResponseAdapter } from "../../../types/api/omdb/adapter.types"
import { responseAdapter } from "./response"
const { VITE_OMDB_API_KEY } = import.meta.env

export function getRequestConfig(query: string): { request: Request, responseAdapter: ResponseAdapter } {
    const queryParams = new URLSearchParams({ apikey: VITE_OMDB_API_KEY, s: query })
    const request = new Request(`https://www.omdbapi.com/?${queryParams.toString()}`)

    return { request, responseAdapter };
}