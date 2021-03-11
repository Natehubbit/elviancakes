import React from 'react';
import {
  ImageBackground,
  ScrollView, StyleSheet, View,
} from 'react-native';
import NotifSuccess from '../../assets/notifBell.svg';
import NotifError from '../../assets/notifCross.svg';
import { COLORS } from '../../common/theme';
import Navbar from '../../components/Navbar';
import NotificationCard from '../../components/NotificationCard';

const back = require('../../assets/background2.png');

const Notifications = () => {
  return (
    <>
      <View style={[styles.container]}>
        <ImageBackground
          source={back}
          style={StyleSheet.absoluteFillObject}
        />
        <Navbar
          title="Notifications"
        />
        <View style={[styles.card]}>
          <ScrollView>
            <NotificationCard
              Icon={NotifSuccess}
              label="Your Order has been successfully placed"
            />
            <NotificationCard
              Icon={NotifError}
              label="Your order failed"
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
