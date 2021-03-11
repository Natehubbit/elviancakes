import React from 'react';
import {
  Dimensions,
  ImageBackground, ScrollView, StyleSheet, Text, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS } from '../../common/theme';
import Drip from '../../assets/drip1.svg';
import Button from '../../components/Button';
import Fab from '../../components/Fab';
import BackIcon from '../../assets/back.svg';

const {
  height,
  width,
} = Dimensions.get('window');

const Special:React.FC = () => {
  const {
    goBack,
  } = useNavigation();
  return (
    <View style={[styles.root]}>
      <View style={[styles.nav]}>
        <Fab
          Icon={BackIcon}
          onPress={goBack}
        />
        {/* <Fab
          Icon={CartIcon}
        /> */}
      </View>
      <ScrollView
        contentContainerStyle={[styles.container]}
        bounces={false}
      >
        <ImageBackground
          source={{ uri: 'https://picsum.photos/600' }}
          style={[styles.img]}
        />
        <View
          style={[styles.head]}
        >
          <Text style={[styles.headLabel, FONTS.h1]}>
            Chocolate Cake
          </Text>
        </View>
        <View style={[styles.body]}>
          <Drip style={[styles.drip]} />
          <View
            style={[styles.info]}
          >
            <View>
              <Text style={[styles.subHeading]}>
                Description
              </Text>
              <Text>
                Chocolate cake with shells designed whip cream Icing with a touch of cinamon.
              </Text>
            </View>
            <View>
              <Text style={[styles.subHeading]}>
                Colors
              </Text>
              <Text>
                red, green
              </Text>
            </View>
            <View>
              <Text style={[styles.subHeading]}>
                Size
              </Text>
              <Text>
                red, green
              </Text>
            </View>
            <View>
              <Text style={[styles.subHeading]}>
                Shape
              </Text>
              <Text>
                red, green
              </Text>
            </View>
            <View>
              <Text style={[styles.subHeading]}>
                Inscription
              </Text>
              <Text>
                red, green
              </Text>
            </View>
            <View>
              <Text style={[styles.subHeading]}>
                Note
              </Text>
              <Text>
                red, green
              </Text>
            </View>
            <View>
              <Text style={[styles.subHeading]}>
                Delivery
              </Text>
              <Text>
                red, green
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <View style={[styles.shadow]} />
        <View style={[styles.btnRoot]}>
          <Button
            title="GHS200"
            onPress={null}
            size="lg"
            label="GHS200"
          />
        </View>
      </View>
    </View>
  );
};

export default Special;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.border,
  },
  container: {
    backgroundColor: COLORS.border,
  },
  img: {
    height: height * 0.45,
    width: '100%',
  },
  nav: {
    position: 'absolute',
    top: 0,
    zIndex: 5,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  head: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: COLORS.textLight,
    paddingTop: 14,
    paddingBottom: 60,
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    top: height * 0.28,
  },
  headLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  subHeading: {
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 20,
  },
  body: {
    minHeight: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: COLORS.border,
    bottom: height * 0.1,
  },
  shadow: {
    height: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: COLORS.light1,
    position: 'absolute',
    top: 0,
    width,
  },
  drip: {
    position: 'absolute',
  },
  info: {
    paddingVertical: 34,
    paddingHorizontal: 44,
  },
  btnRoot: {
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginTop: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: COLORS.border,
  },
});
