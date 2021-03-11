import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  ImageBackground, ScrollView, StyleSheet, View,
} from 'react-native';
import uuid from 'react-native-uuid';
import { ORDER_FORM } from '../../common/constants';
import FormCard from '../../components/FormCard';
import Navbar from '../../components/Navbar';
import { OrderForm } from '../../types';

const background = require('../../assets/background2.png');

interface CustomOrderProps extends StackHeaderProps {

}

const CustomOrder: React.FC<
  CustomOrderProps> = () => {
    useEffect(() => {
      initForm();
    }, []);
    const [form, setForm] = useState<object|null>(null);
    useEffect(() => {
    }, [form]);
    const onUpdateForm = (
      key:keyof OrderForm,
      value: any,
    ) => {
      setForm((v) => ({
        ...v,
        [key]: value,
      }));
    };
    const initForm = () => {
      const data = {};
      Object
        .keys(ORDER_FORM)
        .forEach((k:keyof typeof ORDER_FORM) => {
          const vals = ORDER_FORM[k];
          vals.forEach((r) => {
            const v = r.key === 'range'
              ? 100
              : '';
            data[
              r.key
            ] = v;
          });
        });
      setForm(data);
    };
    return (
      <View
        style={[styles.container]}
      >
        <ImageBackground
          source={background}
          style={[
            StyleSheet
              .absoluteFillObject,
            styles.background]}
        />
        <ScrollView>
          <Navbar />
          {Object
            .keys(ORDER_FORM)
            .map((key) => {
              const hideLeaveToUs = key
                .toLowerCase() === 'details';
              return (
                <FormCard
                  key={uuid.v4()}
                  title={key}
                  formData={form}
                  leaveToUs={hideLeaveToUs}
                  formInfo={ORDER_FORM[key]}
                  onUpdate={onUpdateForm}
                />
              );
            })}
        </ScrollView>
      </View>
    );
  };

export default CustomOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
  },
});
