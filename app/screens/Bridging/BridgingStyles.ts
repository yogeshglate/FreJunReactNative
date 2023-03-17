import { StyleSheet } from 'react-native';
import { colors } from '../../constants';
import { horizontalScale, moderateScale, verticalScale } from '../../services';

export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    width: horizontalScale(120),
    backgroundColor: colors.black,
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(10),
  },
  buttonText: { color: colors.white, textAlign: 'center' },
});
