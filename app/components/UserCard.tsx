import { View, Text, Image } from 'react-native';
import React from 'react';
import { IUsers } from '../types';
import { styles } from './styles/UserCardStyles';

const UserCard = ({ user }: { user: IUsers }) => {
  return (
    <View key={user.login.uuid} style={styles.cardWrapper}>
      <Image source={{ uri: user.picture.medium }} style={styles.cardImage} />
      <Text
        numberOfLines={1}
        style={
          styles.cardText
        }>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</Text>
    </View>
  );
};

export default UserCard;
