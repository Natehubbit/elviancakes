import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, TouchableOpacityProps,
} from 'react-native';
import { COLORS } from '../../common/theme';

interface ButtonTextProps extends TouchableOpacityProps {
  label: string
}

const ButtonText: React.FC<ButtonTextProps> = ({
  label,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.touch,
        style && style,
      ]}
    >
      <Text style={[styles.text]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  text: {
    color: COLORS.secondary,
  },
  touch: {
    padding: 5,
    paddingHorizontal: 10,
  },
});
