import React, { useState } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import ShapeButton from '../ShapeButton';

interface IShapeProps {
  field: string;
  options: string[];
  // eslint-disable-next-line no-unused-vars
  onSelect: (field: string, value: any, shouldValidate?: boolean) => void;
}

const ShapeButtonGroup: React.FC<IShapeProps> = ({
  field,
  onSelect,
  options,
}) => {
  const [active, setActive] = useState('');
  const onPress = (val:string) => {
    onSelect && onSelect(field, val, true);
    setActive(val.toLowerCase());
  };
  return (
    <View
      style={[styles.container]}
    >
      {options.map((option) => {
        return (
          <ShapeButton
            key={option}
            shape={option}
            onPress={() => onPress(option.toLowerCase())}
            active={active === option}
          />
        );
      })}
    </View>
  );
};

export default ShapeButtonGroup;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
