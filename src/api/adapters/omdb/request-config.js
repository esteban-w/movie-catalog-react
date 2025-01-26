import { responseAdapter } from "./response"
const { VITE_API_KEY } = import.meta.env

export function getRequestConfig(query) {
    const queryParams = new URLSearchParams({ apikey: VITE_API_KEY, s: query })
    const request = new Request(`https://www.omdbapi.com/?${queryParams.toString()}`)

    return { request, responseAdapter };
}