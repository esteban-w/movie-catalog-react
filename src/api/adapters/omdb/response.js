import { isUrlValid } from "../../../utils/isUrlValid"

export function responseAdapter(response) {
  const resourceItems = (response.Search || []).map(item => ({
    id: item.imdbID,
    type: item.Type,
    attributes: {
      title: item.Title,
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