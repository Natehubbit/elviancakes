import React from 'react';
import {
  StyleSheet, Text, TouchableNativeFeedback, TouchableNativeFeedbackProps, View,
} from 'react-native';
import {
  useDispatch,
} from 'react-redux';
import { COLORS } from '../../common/theme';
import { bottomSheetActions } from '../../store/bottomSheet';
import ChevronIcon from '../../assets/chevron.svg';

interface SelectorProps extends TouchableNativeFeedbackProps{
  value: string;
  placeholder: string;
  options: string[];
  isRadio?: boolean;
  field: string;
  // eslint-disable-next-line no-unused-vars
  onSelect?: (field: string, value: any, shouldValidate?: boolean) => void;
}

const Selector: React.FC<SelectorProps> = ({
  value,
  options,
  placeholder,
  isRadio,
  field,
  onSelect,
}) => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(bottomSheetActions.open({
      value,
      header: placeholder,
      field,
      options,
      show: true,
      isRadio,
      onSelect,
    }));
  };
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback
        .Ripple(COLORS.lightPrimary, false)}
      onPress={onPress}
    >
      <View
        style={[styles.container]}
      >
        {value ? (
          <Text>
            {value}
          </Text>
        ) : (
          <Text style={[styles.placeholder]}>
            {placeholder}
          </Text>
        )}
        <ChevronIcon
          style={[styles.chevron]}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

export default Selector;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.light1,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholder: {
    opacity: 0.4,
  },
  chevron: {
    transform: [
      { rotate: '90deg' },
    ],
  },
});
