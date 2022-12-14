import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config/config.json"
export const restaurantApi = createApi({
  reducerPath: "restaurantApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      config.SERVER_URL,
  }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query({
      query: () => ({
        url: "/restaurant/random_restaurant?size=100",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllRestaurantsQuery } = restaurantApi;