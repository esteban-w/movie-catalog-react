export function responseAdapter(response) {
  const resourceItems = (response.Search || []).map(item => ({
    id: item.imdbID,
    type: item.Type,
    attributes: {
      title: item.Title,
      year: item.Year,
      image: item.Poster,
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