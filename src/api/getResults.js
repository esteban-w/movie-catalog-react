export async function getResults(url, adapter = (res) => res) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json().then(adapter)
      }
      return {
        errors: [
          {
            title: "response error"
          }
        ],
      }
    })
    .catch(error => ({
      errors: [
        {
          title: "bad request / network error",
          detail: error
        }
      ],
    }))
}