import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ILoaderProps } from '../types';
import { styles } from './styles/LoaderStyles';

const Loader = ({ size = 'small' }: ILoaderProps) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator {...{ size }} />
    </View>
  );
};

export default Loader;
