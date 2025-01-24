export async function getResults({url, options = {},  adapter = (res) => res}) {
  return fetch(url, options)
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
          detail: error.message,
          meta: { url },
        }
      ],
    }))
}