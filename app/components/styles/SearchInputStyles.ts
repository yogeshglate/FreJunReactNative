import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  Metrics,
  moderateScale,
  verticalScale,
} from '../../services';

export const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  },
  searchInputWrapper: {
    flex: 1,
    borderWidth: Metrics.borderLineWidth,
    borderColor: 'grey',
    borderRadius: moderateScale(30),
    margin: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    maxWidth: horizontalScale(280),
  },
  searchInput: {
    height: verticalScale(48),
    marginHorizontal: horizontalScale(10),
    width: horizontalScale(180),
  },
  sortWrapper: { alignItems: 'center' },
  sortButtonWrapper: { flexDirection: 'row' },
});
