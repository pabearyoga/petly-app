import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'notices',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Notices'],
  endpoints: builder => ({
    getAllNotices: builder.query({
      query: () => `/notices`,
      providesTags: ['Notices'],
    }),
    addNotice: builder.mutation({
      query: notice => ({
        url: `/notices`,
        method: 'POST',
        body: notice,
      }),
      invalidatesTags: ['Notices'],
    }),
    deleteNotice: builder.mutation({
      query: noticeID => ({
        url: `/notices/${noticeID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});

export const {
  useGetAllNoticesQuery,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApi;
