import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { v4 as uuid } from 'react-native-uuid';
import DripIcon from '../../assets/dripLarge.svg';
import { SETTINGS } from '../../common/constants';
import { COLORS } from '../../common/theme';
import Accordion from '../../components/Accordion';

const back = require('../../assets/background2.png');

const {
  height,
  width,
} = Dimensions.get('window');

const Account = () => {
  return (
    <View
      style={[
        styles.container,
      ]}
    >
      <ImageBackground
        style={StyleSheet.absoluteFillObject}
        source={back}
      />
      <ScrollView>
        <View
          style={[
            styles.top,
            styles.card,
          ]}
        >
          <DripIcon
            preserveAspectRatio="xMinYMin slice"
            style={[styles.drip]}
            width="100%"
            height="100%"
          />
          <View style={[styles.avatar]}>
            <Image
              style={[styles.img]}
              source={{ uri: 'https://picsum.photos/900' }}
            />
            <View style={[styles.userInfo]}>
              <Text style={[styles.name]}>
                Janny
              </Text>
              <Text style={[styles.email]}>
                janny@example.com
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.list,
            styles.card,
          ]}
        >
          {SETTINGS.map((item) => (
            <Accordion key={uuid()} {...item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.border,
  },
  card: {
    elevation: 3,
    marginBottom: 16,
  },
  top: {
    height: height * 0.3,
    backgroundColor: COLORS.white,
  },
  drip: {
    position: 'absolute',
    width,
    height: '100%',
    bottom: 50,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    height: height * 0.15,
    width: height * 0.15,
    borderRadius: height * 0.15,
  },
  list: {
    minHeight: 200,
    backgroundColor: COLORS.white,
  },
  userInfo: {
    marginVertical: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
  },
  email: {
    fontSize: 12,
    opacity: 0.5,
  },
});
