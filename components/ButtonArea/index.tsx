import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { COLORS } from '../../common/theme';
import ButtonLarge from '../ButtonLarge';

interface IButtonArea {
  icon: React.FC<SvgProps>;
  label: string;
}

const ButtonArea: React.FC<IButtonArea> = ({
  icon: Icon,
  label,
}) => {
  return (
    <View style={[styles.contianer]}>
      <ButtonLarge icon={Icon} label={label} />
    </View>
  );
};

export default ButtonArea;

const styles = StyleSheet.create({
  contianer: {
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingVertical: 20,
    borderColor: COLORS.light2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
