import React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

self.addEventListener('message', function(e) {
  self.postMessage(e.data);
}, false);

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql-users"
});

const Worker = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          hello
        }
      `}
    >
      {({ data }) => <div>A greeting from the server: {data.hello}</div>}
    </Query>
  </ApolloProvider>
);

export default Worker;