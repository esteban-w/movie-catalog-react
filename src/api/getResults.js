let abortController

export async function getResults({url, options = {},  adapter = (res) => res}) {
  abortController?.abort('Replaced by new request')
  abortController = new AbortController()

  return fetch(url, {...options, signal: abortController.signal})
    .then(response => {
      if (response.ok) {
        return response.json().then(adapter)
      }
      return {
        errors: [
          {
            title: "response error",
            status: response.status,
            meta: { url },
          }
        ],
      }
    })
    .catch(error => ({
      errors: [
        {
          title: "bad request / network error",
          detail: error.message || error.name,
          meta: { url },
        }
      ],
    }))
}