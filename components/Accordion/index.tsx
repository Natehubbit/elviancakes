import React from 'react';
import {
  StyleSheet, Text, TouchableNativeFeedback, View,
} from 'react-native';

import { SvgProps } from 'react-native-svg';
import ChevronIcon from '../../assets/chevron.svg';

import { COLORS } from '../../common/theme';

interface AccordionProps {
  Icon: React.FC<SvgProps>;
  label: string;
  showChevron?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  Icon,
  label,
  showChevron,
}) => {
  return (
    <TouchableNativeFeedback
      onPress={() => console.log('hello')}
      background={TouchableNativeFeedback
        .Ripple(COLORS.lightPrimary, false)}
    >
      <View
        style={[styles.container]}
      >
        <View
          style={[styles.content]}
        >
          <Icon
            style={[styles.icon]}
            color={COLORS.textLight}
          />
          <Text style={[styles.label]}>
            {label}
          </Text>
        </View>
        {showChevron && <ChevronIcon />}
      </View>
    </TouchableNativeFeedback>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    opacity: 0.8,
  },
  icon: {
    marginRight: 20,
  },
});
