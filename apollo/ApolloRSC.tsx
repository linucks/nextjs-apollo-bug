"use server";

import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://graphqlzero.almansi.me/api",
    }),
  });
});

// The below code works
/*
const registeredClient = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://graphqlzero.almansi.me/api",
    }),
  });
});
export const { getClient, query, PreloadQuery } = registeredClient;
*/
