import { baseApi } from '../../api/baseApi';

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllBike: builder.query({
      query: () => ({
        url: '/bikes',
        method: 'GET',
      }),
    }),

    getSearchBike: builder.query({
      query: (searchTerm) => ({
        url: `/bikes?searchTerm=${searchTerm}`,
        method: 'GET',
      }),
    }),

    getBikeByCategory: builder.query({
      query: (category) => ({
        url: `/bikes?category=${category}`,
        method: 'GET',
      }),
    }),



    createRentals: builder.mutation({
      query: (data) => ({
        url: '/rentals',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),

    createBike: builder.mutation({
      query: (data) => ({
        url: '/bikes',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetAllBikeQuery, useCreateRentalsMutation, useGetSearchBikeQuery, useGetBikeByCategoryQuery, useCreateBikeMutation } = bikeApi;



