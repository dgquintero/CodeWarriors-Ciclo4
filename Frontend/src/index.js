import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import ApolloClient from 'apollo-boost'
// import {ApolloProvider} from '@apollo/react-hooks'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3100",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
