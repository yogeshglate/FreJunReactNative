import { StyleSheet } from 'react-native';
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
  },
  footerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  emptyText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
