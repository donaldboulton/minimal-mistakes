import React, { Component } from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

import apollo from "./apollo.svg";

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql-users"
});

const LambdaDemo = () => (
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

class App extends Component {
  render() {
    return (
      <div className="AppCenter">
        <header className="App-header">
          <img src={apollo} className="App-logo align-center" alt="logo" />
          <h1 className="App-title">GraphQL Lambda</h1>
        </header>
        <p className="App-intro">
          Netlify Functions
        </p>
        <LambdaDemo />
      </div>
    );
  }
}

export default App;