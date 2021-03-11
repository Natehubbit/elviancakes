import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity, Dimensions,
} from 'react-native';
import {
  v4 as uuid,
} from 'react-native-uuid';

import HomeIcon from '../../assets/home.svg';
import CartIcon from '../../assets/cart.svg';
import BellIcon from '../../assets/bell.svg';
import UserIcon from '../../assets/user.svg';
import AddIcon from '../../assets/add.svg';
import { COLORS } from '../../common/theme';

const {
  width,
} = Dimensions.get('window');

const BottomTab: React.FC<BottomTabBarProps> = ({
  state: {
    routes,
    index,
  },
  navigation,
}) => {
  const { navigate } = navigation;
  const { name } = routes[index];
  const onPress = (val:string) => {
    navigate(val);
  };
  const left = [];
  const right = [];
  const orderIcons = () => {
    routes.forEach(({ name: route }, i) => {
      const isLeft = i < 2;
      const isOrder = route === 'CustomOrder';
      const isActive = route === name;
      const Icon = route === 'Home'
        ? HomeIcon
        : route === 'Cart'
          ? CartIcon
          : route === 'Account'
            ? UserIcon
            : route === 'Notifications'
              ? BellIcon
              : null;
      const TabIcon = Icon
        && (
        <TouchableNativeFeedback
          key={uuid()}
          onPress={() => onPress(route)}
          background={TouchableNativeFeedback
            .Ripple(COLORS.secondaryLight, true)}
        >
          <View style={[styles.icon]}>
            <Icon
              stroke={isActive
                ? COLORS.secondary
                : COLORS.textLight}
            />
            <Text
              style={[
                styles.label,
                isActive && styles.highlight,
              ]}
            >
              {route}
            </Text>
          </View>
        </TouchableNativeFeedback>
        );
      if (Icon) {
        if (isLeft) {
          left.push(TabIcon);
        } else if (!isOrder) {
          right.push(TabIcon);
        }
      }
    });
  };
  orderIcons();
  return (
    <View>
      <View style={[styles.shadow]} />
      <View
        style={[styles.container]}
      >
        <View style={[styles.side]}>
          {left}
        </View>
        <TouchableOpacity
          onPress={() => onPress('CustomOrder')}
        >
          <AddIcon />
        </TouchableOpacity>
        <View style={[styles.side]}>
          {right}
        </View>
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.light1,
    justifyContent: 'space-between',
    marginTop: 1,
  },
  side: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  label: {
    color: COLORS.textLight,
    fontSize: 9,
  },
  icon: {
    alignItems: 'center',
  },
  highlight: {
    color: COLORS.secondary,
  },
  shadow: {
    backgroundColor: COLORS.light1,
    position: 'absolute',
    height: '100%',
    width,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  touch: {
    backgroundColor: COLORS.border,
  },
});
