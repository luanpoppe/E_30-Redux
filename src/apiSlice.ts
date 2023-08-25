import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from './App'

export const api = createApi({
  reducerPath: 'nomeParaIdentificaçao',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getApi: builder.query<Produto[], void>({
      query: () => '/api/ebac_sports'
    })
  })
})

export const { useGetApiQuery } = api
