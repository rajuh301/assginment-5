import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/users/login',
        method: 'POST',
        body: userInfo,
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: '/users/me',
        method: 'GET',
      }),
    }),
  }),
})

export const { useLoginMutation , useGetUserQuery} = authApi;



