import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = "https://mocki.io/v1";

export const fakeApi = createApi({
    reducerPath: 'fakeApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getStudentData : builder.query({
            query: () => "/d4867d8b-b5d5-4a48-a4ab-79131b5809b8",
        })
    })
})

export const {useGetStudentDataQuery} = fakeApi;