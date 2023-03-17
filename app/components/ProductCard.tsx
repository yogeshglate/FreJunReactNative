import React from 'react';
import { Image, Text, View } from 'react-native';
import { IProductCardProps } from '../types';
import { styles } from './styles/ProductCardStyles';

const ProductCard = ({ item }: IProductCardProps) => {
  return (
    <View style={styles.productCardContainer} key={item.id}>
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        defaultSource={require('../assets/loadingImage.png')}
      />
      <View>
        <Text numberOfLines={1} style={styles.productTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.productDescription}>
          {item.description}
        </Text>
        <Text style={styles.productPrice}>{`$${item.price}`}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
