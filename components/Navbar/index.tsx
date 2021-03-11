import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';

import { COLORS } from '../../common/theme';

import BackIcon from '../../assets/backChevron.svg';
import CloseIcon from '../../assets/close.svg';

interface NavbarProps extends Partial<StackHeaderProps> {
  onClear?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onClear,
}) => {
  const {
    goBack,
  } = useNavigation();
  const {
    name,
  } = useRoute();
  const title = name === 'CustomOrder'
    ? 'Custom Order'
    : name === 'Cart'
      ? 'My Cart'
      : name;
  const backable = name === 'CustomOrder';
  const shouldClear = name === 'Cart'
    || name === 'Notifications';
  const onBack = () => {
    goBack();
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.title]}>
        {backable
        && (
          <TouchableOpacity
            onPress={onBack}
            style={[styles.backIcon]}
          >
            <BackIcon
              stroke={COLORS.dark}
            />
          </TouchableOpacity>
        )}
        <Text style={[styles.head]}>
          {title}
        </Text>
      </View>
      {shouldClear && (
      <TouchableOpacity
        style={[styles.touch]}
        onPress={onClear}
      >
        <Text style={[styles.clear]}>
          Clear
        </Text>
        <CloseIcon
          height={17}
          width={17}
          stroke={COLORS.primary}
          style={[styles.icon]}
          strokeWidth={3}
        />
      </TouchableOpacity>
      )}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  touch: {
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clear: {
    color: COLORS.primary,
    fontWeight: 'normal',
    fontSize: 17,
  },
  icon: {
    marginLeft: 5,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    marginRight: 5,
  },
});
