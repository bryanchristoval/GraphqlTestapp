/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/mainscreen';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://play-anorthite-hak12.antikode.dev/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
