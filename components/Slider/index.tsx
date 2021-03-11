import React from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import SliderComponent from '@react-native-community/slider';
import { COLORS } from '../../common/theme';
import { MAX_BUDGET, MIN_BUDGET } from '../../common/constants';

interface SliderProps {
  field: string;
  value: number;
  placeholder: string;
  showFooter: boolean;
  maxFoot: number;
  minFoot: number;
  onChangeText?: ()=>void;
  // eslint-disable-next-line no-unused-vars
  onChange?: (field:string, val:any, shouldValidate?:boolean) => void;
}

const Slider: React.FC<SliderProps> = ({
  placeholder,
  field,
  value,
  showFooter,
  maxFoot,
  minFoot,
  onChange,
  onChangeText,
}) => {
  // const [budget, setBudget] = useState(MIN_BUDGET);
  // const onUpdateSlider = (val:number) => {
  //   const newVal = Math.floor(val * MAX_BUDGET);
  //   if (newVal <= MIN_BUDGET) {
  //     setBudget(MIN_BUDGET);
  //   } else if (newVal >= MIN_BUDGET) {
  //     setBudget(newVal);
  //   } else setBudget(MIN_BUDGET);
  // };
  const onUpdate = (val:number|string) => {
    onChange && onChange(field, val, true);
  };
  return (
    <View>
      <Text style={[styles.placeholder]}>
        {placeholder}
      </Text>
      <SliderComponent
        style={[styles.slider]}
        value={Number(value)}
        thumbTintColor={COLORS.primary}
        step={50}
        minimumValue={MIN_BUDGET}
        maximumValue={MAX_BUDGET}
        minimumTrackTintColor={COLORS.primary}
        maximumTrackTintColor={COLORS.light1}
        onValueChange={onUpdate}
      />
      {showFooter && (
      <View style={[styles.cost]}>
        <Text style={[styles.costText]}>
          {minFoot}
        </Text>
        <View style={[styles.range]}>
          <Text style={[styles.amount]}>
            GHS
          </Text>
          <TextInput
            defaultValue={value.toString()}
            onChangeText={(v) => onUpdate(v)}
            style={[styles.input]}
            keyboardType="number-pad"
            maxLength={4}
          />
        </View>
        <Text style={[styles.costText]}>
          {maxFoot}
        </Text>
      </View>
      )}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
  },
  placeholder: {
    opacity: 0.4,
    marginBottom: 10,
  },
  cost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thumb: {
    elevation: 5,
    backgroundColor: COLORS.primary,
  },
  costText: {
    opacity: 0.5,
  },
  amount: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  slider: {
    width: '100%',
    margin: 0,
    padding: 0,
    marginVertical: 15,
  },
  range: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.light2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
