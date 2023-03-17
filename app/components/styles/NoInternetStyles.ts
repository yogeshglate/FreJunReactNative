import { StyleSheet } from 'react-native';
import { colors } from '../../constants';
import { horizontalScale, moderateScale, verticalScale } from '../../services';

export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  noInternetImage: { height: verticalScale(300), width: horizontalScale(300) },
  noInternetText: {
    color: colors.black,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
});
