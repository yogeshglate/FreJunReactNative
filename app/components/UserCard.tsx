import React from 'react';
import { Image, Text, View } from 'react-native';
import { IUserCardProps } from '../types';
import { styles } from './styles/UserCardStyles';

const UserCard = ({ user }: IUserCardProps) => {
  const userFullName = `${user?.name?.title}. ${user?.name?.first} ${user?.name?.last}`;

  return (
    <View key={user?.login?.uuid} style={styles.cardWrapper}>
      <Image
        source={{ uri: user?.picture?.medium }}
        style={styles.cardImage}
        defaultSource={require('../assets/avatarLoading.png')}
      />
      <Text numberOfLines={1} style={styles.cardText}>
        {userFullName}
      </Text>
    </View>
  );
};

export default UserCard;
