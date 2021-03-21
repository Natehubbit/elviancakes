import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, TouchableOpacityProps,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../common/theme';

interface ButtonComponentProps extends TouchableOpacityProps {
  icon?: React.FC<SvgProps>;
  label: string;
  size?: 'lg'|'sm'|'md'
}

const Button:React.FC<ButtonComponentProps> = ({
  icon: Icon,
  label,
  size,
  style,
}) => {
  const isLarge = size === 'lg';
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style && style,
      ]}
    >
      <LinearGradient
        style={[
          styles.gradient,
          isLarge ? styles.large : styles.small,
        ]}
        start={{ x: 0.8, y: 0.8 }}
        colors={[COLORS.primary, COLORS.secondary]}
      >
        {Icon && (
          <Icon
            stroke={COLORS.dark}
            height={17}
            style={[styles.icon]}
          />
        )}
        <Text
          style={[
            styles.text,
            isLarge
              ? styles.lgText
              : styles.smText]}
        >
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    overflow: 'hidden',
  },
  large: {
    padding: 10,
  },
  small: {
    padding: 5,
  },
  lgText: {
    fontSize: 20,
  },
  smText: {
    fontSize: 14,
  },
  text: {
    color: COLORS.dark,
  },
  gradient: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    // marginRight: 5,
    color: COLORS.white,
    zIndex: 10,
  },
});
