import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { AnimatePresence, View as MotiView } from 'moti';
import { useDispatch } from 'react-redux';
import uuid from 'react-native-uuid';
import { COLORS } from '../../common/theme';

import CloseIcon from '../../assets/close.svg';
import useBottomSheetOptions from '../../hooks/useBottomSheetOptions';
import { bottomSheetActions } from '../../store/bottomSheet';

interface IOption {
  value: string[]|string;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onPress?: (v:string) => void;
}

interface IBottomsheet {
  // eslint-disable-next-line no-unused-vars
  onOptionSelect?: (v:string)=>void;
  // eslint-disable-next-line no-unused-vars
  onPress?: (v:string) => void;
}

const Option: React.FC<IOption> = ({
  value,
  label,
}) => {
  const { isRadio, onSelect, field } = useBottomSheetOptions();
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const closeBottomSheet = () => {
    dispatch(bottomSheetActions
      .close());
  };
  const onToggle = (val:string) => {
    if (isRadio) {
      onSelect(field, val, true);
      closeBottomSheet();
    } else {
      const v = Array.isArray(value)
        ? [...value, val]
        : [val];
      onSelect && onSelect(field, [...v], true);
      setSelected(!selected);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => onToggle(label)}
      style={[styles.option]}
    >
      <>
        {!isRadio && (
        <CheckBox
          value={selected}
          onChange={() => onToggle(label)}
          tintColors={{
            true: COLORS.secondary,
          }}
          style={[styles.checkbox]}
        />
        )}
        <Text style={[styles.optionLabel]}>
          {label}
        </Text>
      </>
    </TouchableOpacity>

  );
};

const BottomSheet: React.FC<IBottomsheet> = () => {
  const {
    header,
    options,
    show,
    value,
  } = useBottomSheetOptions();
  const {
    height,
  } = useWindowDimensions();
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(bottomSheetActions
      .close());
  };
  return (
    <AnimatePresence>
      {show && (
      <MotiView
        from={{
          opacity: 0,
        }}
        animate={{
          translateY: 1,
        }}
        transition={{
          type: 'timing',
        }}
        style={[styles.root]}
      >
        <Pressable
          onPress={onClose}
          style={[styles.pressable]}
        />
        {show && (
        <MotiView
          from={{
            translateY: height,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            type: 'timing',
          }}
          exit={{
            translateY: height,
          }}
          style={[styles.container]}
        >
          <View
            style={[styles.head]}
          >
            <Text numberOfLines={1} style={[styles.heading]}>
              {header}
            </Text>
            <TouchableOpacity
              onPress={onClose}
            >
              <CloseIcon
                stroke={COLORS.textLight}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[styles.body]}
          >
            {options
            && options.map((option) => (
              <Option
                value={value}
                key={uuid.v4()}
                label={option}
              />
            ))}
          </View>
        </MotiView>
        )}
      </MotiView>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.textLight,
    height: '100%',
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-end',
  },
  container: {
  },
  pressable: {
    flex: 1,
  },
  body: {
    // padding: 12,
    backgroundColor: COLORS.white,
  },
  head: {
    padding: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  option: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light1,
  },
  optionLabel: {
    color: COLORS.textLight,
  },
  checkbox: {
    marginRight: 10,
  },
  touch: {
    flexDirection: 'row',
  },
});
