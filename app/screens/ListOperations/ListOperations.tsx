import React, { useRef, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { ProductCard, SearchInput } from '../../components';
import products from '../../constants/products.json';
import { styles } from './ListOperationsStyles';

const ListOperations = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(products);
  const productListRef = useRef<FlatList>(null);

  const onSearch = (text: string) => {
    if (text === '') {
      setData(products);
    } else {
      let tempList = products.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempList);
    }
  };

  const onSearchTextChange = (searchText: string) => {
    onSearch(searchText);
    setSearch(searchText);
  };

  const clearSearch = () => {
    onSearch('');
    setSearch('');
  };

  const sortByPrice = ({ ascending }: { ascending: boolean }) => {
    const sortByPrice = [...data];
    sortByPrice.sort((a, b) => {
      return ascending ? a.price - b.price : b.price - a.price;
    });
    setData(sortByPrice);
    productListRef?.current?.scrollToIndex({
      animated: true,
      index: 0,
    });
  };

  const renderEmpty = () => (
    <View style={styles.emptyTextWrapper}>
      <Text>No Match Found For {search}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <SearchInput
        {...{ clearSearch, onSearchTextChange, search, sortByPrice }}
      />
      <FlatList
        data={data}
        ref={productListRef}
        initialScrollIndex={0}
        renderItem={({ item }) => {
          return <ProductCard item={item} />;
        }}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 100 }}
        ListEmptyComponent={renderEmpty}
      />
    </SafeAreaView>
  );
};

export default ListOperations;
