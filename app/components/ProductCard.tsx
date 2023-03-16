import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles/ProductCardStyles';

const ProductCard = ({ item }: { item: any }) => {
  return (
    <View style={styles.productCardContainer} key={item.id}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
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
