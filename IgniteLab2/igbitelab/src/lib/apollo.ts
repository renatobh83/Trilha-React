import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pyd5gc2ks901xshl7y17v1/master",
  cache: new InMemoryCache(),
});
