import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IIconProps } from '../types';

const CustomIcon = ({ color, name, size }: IIconProps) => {
  return <Icon {...{ color, name, size }} />;
};

export default CustomIcon;
