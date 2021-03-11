import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { COLORS } from '../../common/theme';

interface IButtonLarge {
  icon: React.FC<SvgProps>;
  label: string;
}

const ButtonLarge: React.FC<IButtonLarge> = ({
  icon: Icon,
  label,
}) => {
  return (
    <TouchableOpacity style={[styles.root]}>
      <LinearGradient
        style={[styles.container]}
        start={{ x: 0.8, y: 0.8 }}
        colors={[COLORS.primary, COLORS.secondary]}
      >
        <View style={[styles.icon]}>
          {Icon && <Icon />}
        </View>
        <Text>
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>

  );
};

export default ButtonLarge;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.white,
    elevation: 3,
    overflow: 'hidden',
    borderRadius: 5,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
});
