import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles/SearchInputStyles';

const SearchInput = ({
  search,
  clearSearch,
  onSearchTextChange,
  sortByPrice,
}: {
  search: string;
  clearSearch: () => void;
  onSearchTextChange: (searchText: string) => void;
  sortByPrice: ({ ascending }: { ascending: boolean }) => void;
}) => {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.searchInputWrapper}>
        <TextInput
          value={search}
          placeholder="Search"
          style={styles.searchInput}
          onChangeText={onSearchTextChange}
        />
        {search && (
          <TouchableOpacity onPress={clearSearch}>
            <Icon name="close" size={25} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.sortWrapper}>
        <Text>Sort By Price</Text>

        <View style={styles.sortButtonWrapper}>
          <TouchableOpacity onPress={() => sortByPrice({ ascending: true })}>
            <Icon name="sort-alphabetical-ascending" size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortByPrice({ ascending: false })}>
            <Icon name="sort-alphabetical-descending" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchInput;
