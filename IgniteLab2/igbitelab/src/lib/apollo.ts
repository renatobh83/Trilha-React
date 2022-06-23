import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pyd5gc2ks901xshl7y17v1/master",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
