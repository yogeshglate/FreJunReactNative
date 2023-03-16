import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchInputWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 30,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
    maxWidth: 280,
  },
  searchInput: {
    height: 48,
    marginHorizontal: 10,
    width: 180,
  },
  sortWrapper: { alignItems: 'center' },
  sortButtonWrapper: { flexDirection: 'row' },
});
