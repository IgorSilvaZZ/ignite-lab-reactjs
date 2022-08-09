import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6lhss380q6i01tb7q9ydft6/master",
  cache: new InMemoryCache(),
});
