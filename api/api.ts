import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  tagTypes: ["Products", "Users"],
  endpoints: () => ({}),
});

export default apiSlice;
