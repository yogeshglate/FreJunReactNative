import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from '../components';
import { appConstants } from '../constants';
import { ISearchInputProps } from '../types';
import { styles } from './styles/SearchInputStyles';

const SearchInput = ({
  search,
  clearSearch,
  onSearchTextChange,
  sortByPrice,
}: ISearchInputProps) => {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.searchInputWrapper}>
        <TextInput
          value={search}
          placeholder={appConstants.search}
          style={styles.searchInput}
          onChangeText={onSearchTextChange}
        />
        {search && (
          <TouchableOpacity onPress={clearSearch}>
            <Icon name={appConstants.closeIcon} size={25} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.sortWrapper}>
        <Text>{appConstants.sortByPrice}</Text>

        <View style={styles.sortButtonWrapper}>
          <TouchableOpacity onPress={() => sortByPrice({ ascending: true })}>
            <Icon name={appConstants.ascSort} size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortByPrice({ ascending: false })}>
            <Icon name={appConstants.descSort} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchInput;
