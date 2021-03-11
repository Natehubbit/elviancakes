import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  StyleSheet, TextInput, TouchableOpacity, View,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { COLORS } from '../../common/theme';
import AddIcon from '../../assets/plus.svg';
import MinusIcon from '../../assets/minus.svg';

interface CountButtonProps {
  Icon: React.FC<SvgProps>;
  invert?: boolean;
  style?: object;
  onPress?: () => void;
}

interface CountInputProps {
  value: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Button: React.FC<CountButtonProps> = ({
  Icon,
  invert,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, style && style]}
      onPress={onPress && onPress}
    >
      {!invert && (
      <LinearGradient
        style={[
          styles.gradient,
        ]}
        start={{ x: 0.8, y: 0.2 }}
        colors={[COLORS.primary, COLORS.secondary]}
      >
        <Icon
          height={20}
          width={20}
        />
      </LinearGradient>
      )}
      {invert && (
      <View
        style={[
          styles.gradient,
        ]}
      >
        <Icon
          height={20}
          width={20}
        />
      </View>
      )}
    </TouchableOpacity>
  );
};

const CountInput: React.FC<CountInputProps> = ({
  value,
  onDecrease,
  onIncrease,
}) => {
  return (
    <View style={[styles.container]}>
      <Button
        Icon={AddIcon}
        onPress={onIncrease}
      />
      <TextInput
        editable={false}
        value={value}
        style={[styles.input]}
      />
      <Button
        invert
        onPress={onDecrease}
        Icon={MinusIcon}
        style={[{ marginLeft: 5 }]}
      />
    </View>
  );
};

export default CountInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  btn: {
    borderRadius: 100,
    marginRight: 5,
    elevation: 5,
    overflow: 'hidden',
  },
  gradient: {
    padding: 5,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    // flex: 1,
  },
  input: {
    borderBottomColor: COLORS.textLight,
    borderBottomWidth: 1,
    textAlign: 'center',
    color: COLORS.dark,

  },
});
