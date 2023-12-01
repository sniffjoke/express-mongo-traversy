import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const goalAPI = createApi({
    reducerPath: 'goalAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
    endpoints: (build) => ({
        fetchAllGoals: build.query({
            query: () => ({
                url: '/goals'
            })
        }),
        fetchUserData: build.query({
            query: () => ({
                url: 'users/me'
            })
        })
    })
})
