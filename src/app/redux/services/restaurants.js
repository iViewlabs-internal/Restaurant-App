import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurantApi = createApi({
  reducerPath: "restaurantApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://random-data-api.com/api/restaurant/random_restaurant?size=100",
  }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllRestaurantsQuery } = restaurantApi;