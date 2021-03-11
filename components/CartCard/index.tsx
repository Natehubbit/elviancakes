import React, { useState } from 'react';
import {
  StyleSheet, View, Image, Dimensions, Text, TouchableOpacity, TouchableNativeFeedback,
} from 'react-native';
import { COLORS, FONTS } from '../../common/theme';
import CountInput from '../CountInput';
import DeleteIcon from '../../assets/trash.svg';

const {
  width,
  height,
} = Dimensions.get('window');

interface CartCardProps {
  onPress?: () => void;
  onDelete?: () => void;
}

const CartCard: React.FC<CartCardProps> = ({
  onPress,
}) => {
  const [qty, setQty] = useState(0);
  const onAdd = () => {
    setQty((v) => (v > -1 ? v + 1 : 0));
  };
  const onSub = () => {
    setQty((v) => (v === 0 ? v : v - 1));
  };
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback
        .Ripple(COLORS.lightPrimary, false)}
      onPress={onPress && onPress}
    >
      <View
        style={[styles.container]}
      >
        <Image
          source={{ uri: 'https://picsum.photos/500' }}
          style={[styles.img]}
        />
        <View style={[styles.info]}>
          <Text
            style={[
              styles.head,
            ]}
            numberOfLines={1}
          >
            Chocolate Cake
          </Text>
          <View style={[styles.body]}>
            <Text
              style={[FONTS.light]}
            >
              GHS200
            </Text>
            <View style={[styles.bottom]}>
              <CountInput
                value={qty.toString()}
                onIncrease={onAdd}
                onDecrease={onSub}
              />
              <TouchableOpacity>
                <DeleteIcon
                  height={20}
                  width={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    borderBottomColor: COLORS.light1,
    borderBottomWidth: 1,
    width: '100%',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  img: {
    height: '100%',
    width: width * 0.4,
  },
  info: {
    padding: 10,
    overflow: 'hidden',
  },
  body: {
    justifyContent: 'space-around',
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '60%',
  },
});
