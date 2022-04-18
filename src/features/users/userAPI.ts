import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IUser } from '../../models';


export const userAPI = createApi({
  reducerPath: "userAPI",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/` }),
  endpoints: (build) => ({

    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number) => ({
        url: `users?${limit && `_limit=${limit}`}`,
        params: {
          limit: limit
        }
      }),
      providesTags: result => ["Users"]

    }),

    createUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `users`,
        method: 'POST',
        body: user
      }),
      invalidatesTags: ["Users"],
    }),

    updateUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PUT',
        body: user
      }),
      invalidatesTags: ["Users"]
    }),

    deleteUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Users"]
    })
  })

})