import { ResultsResponse, NoResultsResponse } from "./response.types"
import { JsonApiData } from "../jsonApi.types"

export type ResponseAdapter = (response: ResultsResponse | NoResultsResponse) => JsonApiData