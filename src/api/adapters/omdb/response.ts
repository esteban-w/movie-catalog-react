import { ResultsResponse, NoResultsResponse } from "../../../types/api/omdb/response.types"
import { JsonApiData } from "../../../types/api/jsonApi.types"
import { isUrlValid } from "../../../utils/isUrlValid"

export function responseAdapter(response: ResultsResponse | NoResultsResponse): JsonApiData {
  if (response.Response === 'False') {
    return {
      data: [],
    }
  }

  const resourceItems = response.Search.map(item => ({
    id: item.imdbID,
    type: item.Type,
    attributes: {
      title: item.Title,
      release_year: parseInt((item.Year?.match(/\d{4}/) || ['0'])[0]),
      year: item.Year,
      image: isUrlValid(item.Poster) ? item.Poster : null,
    },
  }))

  const result = {
    data: resourceItems,
    ...(response.totalResults && {
      meta: {
        total: parseInt(response.totalResults),
      }
    })
  }

  return result
}