import React from 'react';
import {
  StyleSheet, TouchableNativeFeedback, View,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { COLORS } from '../../common/theme';

interface FabProps {
  Icon: React.FC<SvgProps>;
  onPress: () => void;
}

const Fab: React.FC<FabProps> = ({
  Icon,
  onPress,
}) => {
  return (
    <View style={[styles.container]}>
      <TouchableNativeFeedback
        style={[styles.touch]}
        onPress={onPress}
        background={TouchableNativeFeedback
          .Ripple(COLORS.rippleWhite, true)}
      >
        <Icon
          stroke={COLORS.white}
        />
      </TouchableNativeFeedback>
    </View>
  );
};

export default Fab;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: COLORS.textLight,
    overflow: 'hidden',
  },
  touch: {
    flex: 1,
  },
});
