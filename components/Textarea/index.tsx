import React, { useState } from 'react';
import {
  StyleSheet, TextInput, TextInputProps,
} from 'react-native';
import { COLORS } from '../../common/theme';

interface ITextarea extends TextInputProps {

}

const Textarea: React.FC<ITextarea> = ({
  placeholder,
}) => {
  const [active, setActive] = useState(false);
  return (
    <TextInput
      multiline
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      style={[styles.container, active && styles.active]}
      placeholder={placeholder}
    />
  );
};

export default Textarea;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.light2,
    height: 100,
    borderRadius: 4,
    textAlignVertical: 'top',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  active: {
    borderColor: COLORS.primary,
  },
});
