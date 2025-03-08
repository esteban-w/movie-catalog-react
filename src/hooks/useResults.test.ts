import { describe, expect, test, vi, beforeAll, afterAll } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useResults } from "./useResults"
import searchResponse from '../api/adapters/omdb/search-response.json'
import { JsonApiResourceItem } from "../types/api/jsonApi.types"

describe('useResults', () => {

  beforeAll(() => {
    const fetchMock = vi.fn()
      .mockResolvedValue({
        ok: true,
        json: async () => searchResponse
      })

    vi.stubGlobal('fetch', fetchMock)
  })
    
  afterAll(() => {
    vi.unstubAllGlobals()
  })
  
  test('should return no results when prodiving falsy query', () => {
    const { result } = renderHook(() => useResults(''))
    
    expect(result.current.length).toBe(0)
  })

  test('should return results when prodiving valid query', async () => {
    let result = {} as { current: JsonApiResourceItem[] }
        
    await act(async () => { 
      result = renderHook(() => useResults('valid query')).result
    })

    expect(result.current.length).toBeGreaterThan(0)
  })
})