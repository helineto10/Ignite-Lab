import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oi559407xa01xkftizfv6u/master',
    cache: new InMemoryCache()
})