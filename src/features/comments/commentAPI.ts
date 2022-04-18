import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IComment } from "../../models";

export const commentAPI = createApi({
  reducerPath: "commentAPI",
  tagTypes: ["Comments"],
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/` }),
  endpoints: (build) => ({
    fetchAllComments: build.query<IComment[], number>({
      query: (limit: number) => ({
        url: `comments?${limit && `_limit=${limit}`}`,
        params: {
          limit: limit
        }
      }),
      providesTags: result => ["Comments"],
    }),
    createComment: build.mutation<IComment, IComment>({
      query: (comment) => ({
        url: `comments`,
        method: "POST",
        body: comment
      }),
      invalidatesTags: result => ["Comments"],
    }),
    updateComment: build.mutation<IComment, IComment>({
      query: (comment) => ({
        url: `comments/${comment.id}`,
        method: "PUT",
        body: comment
      }),
      invalidatesTags: result => ["Comments"],
    }),
    deleteComment: build.mutation<IComment, IComment>({
      query: (comment) => ({
        url: `comments/${comment.id}`,
        method: "DELETE",
      }), 
      invalidatesTags: ["Comments"]
    })
  })
})