import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, TouchableOpacityProps,
} from 'react-native';
import { COLORS } from '../../common/theme';

interface CategoryButtonProps extends TouchableOpacityProps {
  icon: any;
  label: string;
  active?: boolean;
}

const CategoryButton:React.FC<CategoryButtonProps> = ({
  icon: Icon,
  label,
  active,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress
        && onPress}
      style={[
        styles.container,
        active
          && styles.highlight,
      ]}
    >
      <Icon
        height={24}
        width={24}
        style={[styles.icon]}
        stroke={active
          ? COLORS.primary
          : COLORS.dark}
      />
      <Text
        style={[
          active
            ? styles
              .highlightText
            : styles
              .originalText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 15,
    paddingRight: 20,
    borderRadius: 100,
    elevation: 5,
    marginRight: 5,
  },
  icon: {
    marginRight: 5,
  },
  highlight: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  highlightText: {
    color: COLORS.primary,
  },
  originalText: {
    color: COLORS.dark,
  },
});
