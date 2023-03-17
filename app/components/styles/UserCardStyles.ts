import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../services';

export const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    margin: moderateScale(20),
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(30),
    height: verticalScale(60),
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: horizontalScale(300),
    alignSelf: 'center',
  },
  cardImage: {
    height: verticalScale(50),
    width: horizontalScale(50),
    borderRadius: moderateScale(30),
  },
  cardText: {
    width: horizontalScale(200),
  },
});
