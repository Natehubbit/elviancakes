import { AnimatePresence, View as MotiView } from 'moti';
import React, {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import {
  StyleProp,
  StyleSheet, Text, TextInput, TextStyle, TouchableOpacityProps, View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../common/theme';
import { InputTypes } from '../../types';
import Input from '../Input';

interface ButtonGroupProps {
  type?: InputTypes;
  options: string[];
  field: string;
  // eslint-disable-next-line no-unused-vars
  onSelect?: (field: string, value: any, shouldValidate?: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  onInputChange?: (e: string | ChangeEvent<any>)=>void;
}

interface ButtonProps extends TouchableOpacityProps{
  label: string;
  textStyle: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  label,
  style,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.btn,
        style,
      ]}
    >
      <Text style={textStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  onSelect,
  onInputChange,
  field,
}) => {
  const [active, setActive] = useState(options[0] || '');
  const inputRef = useRef<TextInput>(null);
  const isOther = active === 'other';
  useEffect(() => {
    isOther
      && inputRef.current
      && inputRef.current.focus();
  }, [isOther]);
  const onButtonSelect = (option:string) => {
    const opt = option.toLowerCase();
    const fieldVal = opt === 'other'
      ? ''
      : opt;
    setActive(opt);
    onSelect
      && onSelect(field, fieldVal, true);
  };
  const onTextChange = (text:string) => {
    onInputChange(text.toLowerCase());
  };
  return (
    <>
      <View
        style={[
          styles.container,
        ]}
      >
        {options.map((option) => {
          const isActive = option.toLowerCase() === active;
          return (
            <Button
              style={[
                isActive
                  ? styles.activeBtn
                  : styles.btn,
              ]}
              textStyle={isActive
                ? styles.activeText
                : styles.inactiveText}
              onPress={() => onButtonSelect(option.toLowerCase())}
              key={option}
              label={option}
            />
          );
        })}
      </View>
      <AnimatePresence>
        {isOther && (
        <MotiView
          from={{
            height: 0,
          }}
          animate={{
            height: 60,
          }}
          transition={{
            type: 'timing',
          }}
        >
          <Input
            innerRef={inputRef}
            onChangeText={onTextChange}
          />
        </MotiView>
        )}
      </AnimatePresence>
    </>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn: {
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 5,
    marginBottom: 8,
    borderColor: COLORS.textLight,
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
