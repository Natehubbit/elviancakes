import React from 'react';
import {
  StyleSheet, Text, TouchableNativeFeedback, View,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { COLORS } from '../../common/theme';

interface NotificationCardProps {
  Icon: React.FC<SvgProps>;
  label: string;
  read?: boolean;
  onPress?: ()=>void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  Icon,
  label,
  read,
  onPress,
}) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback
        .Ripple(COLORS.lightPrimary, false)}
      onPress={onPress}
    >
      <View
        style={[
          styles.container,
          read && styles.read,
        ]}
      >
        <Icon
          style={[styles.icon]}
        />
        <Text>
          {label}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 21,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light1,
  },
  icon: {
    marginRight: 15,
  },
  read: {
    opacity: 0.5,
  },
});
