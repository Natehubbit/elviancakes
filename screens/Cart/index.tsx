import React from 'react';
import {
  ImageBackground,
  ScrollView, StyleSheet, View,
} from 'react-native';
import { COLORS } from '../../common/theme';
import CartCard from '../../components/CartCard';
import Navbar from '../../components/Navbar';

const Background = require('../../assets/background2.png');

const Cart = () => {
  return (
    <View
      style={[styles.container]}
    >
      <ImageBackground
        source={Background}
        style={StyleSheet.absoluteFillObject}
      />
      <Navbar
        title="My Cart"
      />
      <View
        style={[styles.scrollCard]}
      >
        <ScrollView
          style={[styles.scroll]}
        >
          <CartCard />
          <CartCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.border,
  },
  title: {

  },
  scrollCard: {
    flex: 1,
  },
  scroll: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
