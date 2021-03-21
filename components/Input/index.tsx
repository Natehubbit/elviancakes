import React, { useState } from 'react';
import {
  StyleSheet, TextInput, TextInputProps,
} from 'react-native';
import { COLORS } from '../../common/theme';
import { OrderForm } from '../../types';

interface InputProps extends TextInputProps {
  innerRef?: React.MutableRefObject<TextInput | undefined>;
  // eslint-disable-next-line no-unused-vars
  onUpdate?:(key: keyof OrderForm, value: any) => void;
  keyVal?: keyof OrderForm;
  handleBlur?: ()=>void;
}

const Input: React.FC<InputProps> = ({
  keyVal,
  onUpdate,
  handleBlur,
  innerRef,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const onFocus = () => {
    setActive(true);
  };
  const onBlur = () => {
    setActive(false);
    handleBlur && handleBlur();
  };
  return (
    <TextInput
      onFocus={onFocus}
      onBlur={onBlur}
      style={[
        styles.container,
        active && styles.active,
      ]}
      ref={innerRef as any}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.light1,
    padding: 8,
    borderRadius: 4,
  },
  active: {
    borderColor: COLORS.primary,
  },
});
