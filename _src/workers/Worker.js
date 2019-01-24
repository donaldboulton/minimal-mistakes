import React, { Component } from "react";
import ReactDom from 'react-dom';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

import apollo from "./apollo.svg";

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql-users"
});
class LambdaDemo extends Component {
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
        const ApolloClient = () => (
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
      </div>
    );
  }
}

ReactDOM.render(
  <LambdaDemo />,
  document.getElementById('graph')
)