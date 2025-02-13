import { describe, test, expect, vi, beforeAll, afterAll } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../src/App"
import searchResponse from "../../src/api/adapters/omdb/search-response.json"
import noResultsResponse from '../../src/api/adapters/omdb/no-results-response.json'

describe('<App />', () => {

  beforeAll(() => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
  })

  afterAll(() => {
    vi.resetAllMocks()
  })
  
  test('should search movie and get movie results', async () => {
    // preparation setup 
    const user = userEvent.setup()

    globalThis.fetch
      .mockResolvedValue({
        ok: true,
        json: async () => searchResponse
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => noResultsResponse
      })

    render(<App />)

    // check main search input renders
    const searchInput = screen.getByRole('searchbox')
    expect(searchInput).toBeDefined

    // type query in main search input
    await user.type(searchInput, 'no results')

    await waitFor(() => {
      // check no results text renders
      const noResultsParagraph = screen.getByText('No results found')
      expect(noResultsParagraph).toBeDefined
      
    })
    
    // type query in main search input
    await user.type(searchInput, 'x-men')
    
    await waitFor(() => {
      // check results render
      const cardHeading = screen.getByRole('heading', { name: 'X-Men: Days of Future Past' })
      expect(cardHeading).toBeDefined
    })
  })
})