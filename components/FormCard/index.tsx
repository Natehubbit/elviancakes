import { Formik } from 'formik';
import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import uuid from 'react-native-uuid';
import DripMiniIcon from '../../assets/dripMini.svg';
import { MAX_BUDGET, MIN_BUDGET } from '../../common/constants';
import { COLORS } from '../../common/theme';
import { FormUIData, OrderForm } from '../../types';
import Button from '../Button';
import ButtonArea from '../ButtonArea';
import ButtonGroup from '../ButtonGroup';
import ButtonText from '../ButtonText';
import Input from '../Input';
import Selector from '../Selector';
import ShapeButtonGroup from '../ShapeButtonGroup';
import Slider from '../Slider';
import UploadIcon from '../../assets/upload.svg';
import Textarea from '../Textarea';

interface FormCardProps {
  title: string;
  formData: object|null;
  formInfo: FormUIData[];
  leaveToUs?: boolean;
  // eslint-disable-next-line no-unused-vars
  onUpdate?: (key: keyof OrderForm, value: any) => void;
}

const FormCard:React.FC<FormCardProps> = ({
  title,
  formData,
  leaveToUs,
  formInfo,
}) => {
  const onLeaveToChef = () => {

  };
  const onNext = () => {

  };
  if (!formData) return null;
  return (
    <Formik
      initialValues={formData}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        setFieldValue,
        // handleSubmit,
        values,
      }) => (
        <View style={[styles.container]}>
          <View
            style={[styles.head]}
          >
            <DripMiniIcon
              preserveAspectRatio="xMinYMin clear"
              width="100%"
              style={[styles.drip]}
            />
            <Text style={[styles.heading]}>
              {title}
            </Text>
          </View>
          <View
            style={[styles.formContianer]}
          >
            {formInfo.map((d) => {
              const isSlider = d.type === 'slider';
              const isText = d.type === 'text';
              const isRowBtns = d.type === 'buttonsRow';
              const isShape = d.type === 'shapeBtns';
              const isImage = d.type === 'upload' && d.key === 'imageUrl';
              const isNote = d.type === 'textarea' && d.key === 'note';
              // const isTextArea = d.type === 'textarea';
              const isList = d.type === 'list';
              return (
                <View key={uuid.v4()} style={[styles.row]}>
                  <Text style={[styles.label]}>
                    {d.label}
                  </Text>
                  {isList && (
                    <Selector
                      field={d.key}
                      isRadio
                      options={Object
                        .values(d.options)}
                      placeholder={d.placeholder}
                      value={values[d.key]}
                      onSelect={setFieldValue}
                    />
                  )}
                  {isText && (
                  <Input
                    onChangeText={handleChange(d.key)}
                    handleBlur={() => handleBlur(d.key)}
                    value={values[d.key]}
                    placeholder={d.placeholder}
                  />
                  )}
                  {isShape && (
                  <ShapeButtonGroup
                    options={Object
                      .values(d.options)}
                    onSelect={setFieldValue}
                    field={d.key}
                  />
                  )}
                  {isSlider && (
                  <Slider
                    // onChangeText={handleChange(d.key)}
                    field={d.key}
                    placeholder={d.placeholder}
                    maxFoot={MAX_BUDGET}
                    minFoot={MIN_BUDGET}
                    onChange={setFieldValue}
                    showFooter
                    value={values[d.key]}
                  />
                  )}
                  {isRowBtns && (
                  <ButtonGroup
                    field={d.key}
                    onSelect={setFieldValue}
                    type="buttonsRow"
                    onInputChange={handleChange(d.key)}
                    options={
                      Object
                        .values(d.options)
                    }
                  />
                  )}
                  {isImage && (
                  <ButtonArea
                    icon={UploadIcon}
                    label="Upload Image"
                  />
                  )}
                  {isNote && (
                  <Textarea
                    onChangeText={handleChange(d.key)}
                    placeholder="Any thing els you want us to know? eg. allergies, exemptions"
                  />
                  )}
                </View>
              );
            })}
          </View>
          <View
            style={[styles.footer]}
          >
            {leaveToUs && (
            <ButtonText
              onPress={onLeaveToChef}
              label="Leave to chef"
              style={[styles.leave]}
            />
            )}
            <Button
              label="Next"
              onPress={onNext}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default FormCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    elevation: 5,
    // borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
  },
  head: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light1,
  },
  heading: {
    fontWeight: 'bold',
  },
  drip: {
    position: 'absolute',
    top: 0,
  },
  formContianer: {
    padding: 20,
    backgroundColor: COLORS.white,
  },
  footer: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.light1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leave: {
    marginRight: 10,
  },
  row: {
    marginBottom: 18,
  },
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
  },
});
