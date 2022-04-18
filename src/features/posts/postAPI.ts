import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../../models";


export const postAPI = createApi({
  reducerPath: "postAPI",
  tagTypes: ["MyPosts"],
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/` }),
  endpoints: (build) => ({

    fetchAllMyPosts: build.query<IPost[], number>({
      query: (limit: number) => ({
        // url: `posts`,
        url: `posts?${limit && `_limit=${limit}`}`,
        params: {
          limit: limit
        }
      }),
      providesTags: result => ["MyPosts"]
    }),

    createMyPosts: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `posts`,
        method: "POST",
        body: post
      }),
      invalidatesTags: ["MyPosts"],
    }),

    updateMyPosts: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ["MyPosts"]
    }),

    deleteMyPosts: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["MyPosts"]
    }),

  })
})