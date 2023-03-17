import React from 'react';
import { Image, Text, View } from 'react-native';
import { appConstants } from '../constants';
import { styles } from './styles/NoInternetStyles';

const NoInternet = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/noInternet.webp')}
        style={styles.noInternetImage}
      />
      <Text style={styles.noInternetText}>{appConstants.noInternet}</Text>
    </View>
  );
};

export default NoInternet;
