import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
// import {useQuery} from '@apollo/react-hooks';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from '@apollo/client';

const getCategories = gql`
  query($first: Int!, $page: Int!) {
    categories(first: $first, page: $page) {
      paginatorInfo {
        count
      }
      data {
        id
        name
        image
      }
    }
  }
`;

const Root = () => {
  const [categoryResult, setCategoryResult] = useState([]);

  const {loading, error, data} = useQuery(getCategories, {
    variables: {first: 1, page: 1},
  });

  useEffect(() => {
    if (loading) {
      console.log('is loading');
    } else {
      console.log('not loading');
    }
    if (error) {
      console.log('error');
    } else {
      console.log('not error');
    }
    if (data) {
      const {categories} = data;
      console.log(categories, 'adasda');
      const kategori = categories.data.map((category) => {
        return {
          id: category.id,
          name: category.name,
        };
      });
      setCategoryResult(kategori);
    }
  }, [loading, error, data]);
  const categoryTexts = categoryResult.map((category) => {
    return (
      <View>
        <Text>{category.id}</Text>
        <Text>{category.name}</Text>
      </View>
    );
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{categoryTexts}</Text>
    </View>
  );
};

export default Root;
