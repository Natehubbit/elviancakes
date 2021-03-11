import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import pascalcase from 'pascalcase';
import { COLORS } from '../../common/theme';

interface IShapeProps {
  shape: string;
  active: boolean;
  // eslint-disable-next-line no-unused-vars
  onPress?: () => void;
}

const ShapeButton: React.FC<IShapeProps> = ({
  shape,
  active,
  onPress,
}) => {
  const shapeStyle = shape === 'round'
    && styles.round;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        shapeStyle,
        active && styles.activeBtn,
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.label,
        active && styles.activeText]}
      >
        {pascalcase(shape)}
      </Text>
    </TouchableOpacity>
  );
};

export default ShapeButton;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 60,
    width: 60,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.textLight,
  },
  label: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  round: {
    borderRadius: 100,
  },
  activeBtn: {
    borderColor: COLORS.primary,
  },
  activeText: {
    color: COLORS.primary,
  },
  inactiveText: {
    color: COLORS.textLight,
  },
});
