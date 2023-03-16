import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    height: 60,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 300,
    alignSelf: 'center',
  },
  cardImage: { height: 50, width: 50, borderRadius: 30 },
  cardText: {
    width: 200,
  },
});
