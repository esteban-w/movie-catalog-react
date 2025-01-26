let abortController

export async function fetchResults({ request, responseAdapter = (res) => res }) {
  abortController?.abort('Replaced by new request')
  abortController = new AbortController()

  return fetch(request, { signal: abortController.signal })
    .then(response => {
      if (response.ok) {
        return response.json().then(responseAdapter)
      }
      return {
        errors: [
          {
            title: "response error",
            status: response.status,
            meta: { url: request.url },
          }
        ],
      }
    })
    .catch(error => ({
      errors: [
        {
          title: "bad request / network error",
          detail: error.message || error.name,
          meta: { url: request.url },
        }
      ],
    }))
}