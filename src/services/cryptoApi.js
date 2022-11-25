import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'X-RapidAPI-Key': 'f395d68926msh03f384aabf22843p1d8ba0jsn1a59ed319b52',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}



const createRequest = (url)=>({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath:'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com'}),
  endpoints:(builder)=>({
    getCoins:builder.query({
        query:()=> createRequest('/coins')
    })
  })

})

export const {
    useGetCoinsQuery,
} = cryptoApi;
