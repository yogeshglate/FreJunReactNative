import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../services';

export const styles = StyleSheet.create({
  emptyTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(20),
  },
  productList: { marginBottom: verticalScale(100) },
});
