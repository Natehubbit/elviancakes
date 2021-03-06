import React from 'react';
import {
  Dimensions, Image, StyleSheet, Text, View,
} from 'react-native';
import Button from '../Button';
import ButtonText from '../ButtonText';
import CartIcon from '../../assets/cart.svg';
import { COLORS } from '../../common/theme';

const {
  height,
  width,
} = Dimensions.get('window');

const Card = () => {
  const onAddToCart = () => {

  };
  const onOrder = () => {

  };
  return (
    <View style={[styles.container]}>
      <Image
        source={{ uri: 'https://picsum.photos/300' }}
        style={[styles.img]}
      />
      <View style={[styles.body]}>
        <Text style={[styles.title]}>
          Strawberry Cake
        </Text>
        <View style={[styles.btns]}>
          <Button
            icon={CartIcon}
            label="Add"
            onPress={onAddToCart}
          />
          <ButtonText
            onPress={onOrder}
            label="Order"
          />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // height: height * 0.2,
    width: width * 0.44,
    marginBottom: 20,
    backgroundColor: COLORS.white,
    elevation: 2,
  },
  img: {
    height: height * 0.2,
  },
  body: {
    padding: 5,
  },
  title: {

  },
  btns: {
    flexDirection: 'row',
    paddingTop: 10,
    // justifyContent: 'space-between'
  },
});
