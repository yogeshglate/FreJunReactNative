import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  Metrics,
  moderateScale,
  verticalScale,
} from '../../services';

export const styles = StyleSheet.create({
  productCardContainer: {
    alignSelf: 'center',
    margin: moderateScale(20),
    borderWidth: Metrics.borderLineWidth,
    borderColor: 'grey',
    width: horizontalScale(300),
    flexDirection: 'row',
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  productImage: { width: horizontalScale(80), height: verticalScale(80) },
  productTitle: {
    width: horizontalScale(180),
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginHorizontal: horizontalScale(10),
  },
  productDescription: {
    width: horizontalScale(180),
    marginHorizontal: horizontalScale(10),
    fontSize: moderateScale(12),
    marginTop: verticalScale(5),
  },
  productPrice: {
    width: horizontalScale(180),
    marginHorizontal: horizontalScale(10),

    fontSize: moderateScale(14),
    marginTop: verticalScale(5),
    fontWeight: 'bold',
    color: 'green',
  },
});
