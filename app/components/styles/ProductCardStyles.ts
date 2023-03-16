import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productCardContainer: {
    alignSelf: 'center',
    margin: 20,
    borderWidth: 1,
    borderColor: 'grey',
    width: 300,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
  productImage: { width: 80, height: 80 },
  productTitle: {
    width: 180,
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  productDescription: {
    width: 180,
    marginHorizontal: 10,
    fontSize: 12,
    marginTop: 5,
  },
  productPrice: {
    width: 180,
    marginHorizontal: 10,
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'green',
  },
});
