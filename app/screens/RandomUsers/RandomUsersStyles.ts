import { StyleSheet } from 'react-native';
import { colors } from '../../constants';
import { horizontalScale, moderateScale, verticalScale } from '../../services';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: moderateScale(25),
    fontWeight: '700',
    marginVertical: verticalScale(15),
    marginHorizontal: horizontalScale(10),
    textAlign: 'center',
    color: colors.black,
  },
  footerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
    color: colors.black,
  },
  emptyText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.black,
  },
});
