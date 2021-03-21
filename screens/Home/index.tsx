import React, { useRef, useState } from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryButton from '../../components/CategoryButton';
import { CATEGORY_BUTTONS } from '../../common/constants';
import { COLORS } from '../../common/theme';
// import SpecialsCard from '../../components/SpecialsCard';
import Card from '../../components/Card';
import { Category } from '../../types';

const { height, width } = Dimensions.get('window');

const back = require('../../assets/background2.png');

const Home = () => {
  // const { navigate } = useNavigation();
  const [active, setActive] = useState<Category>('all');
  const scrollRef = useRef<ScrollView>(null);
  // const onSpecialPress = () => {
  //   navigate('Special');
  // };
  const onCatSelect = (e: GestureResponderEvent, val: Category) => {
    setActive(val);
    const {
      nativeEvent: { pageX },
    } = e;
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x: pageX - 100,
      });
    }
  };
  return (
    <View>
      <ImageBackground source={back} style={[styles.back]} />
      <ScrollView
        contentContainerStyle={[styles.categories]}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        bounces={false}
        snapToInterval={200}
        ref={scrollRef}
      >
        {CATEGORY_BUTTONS.map(({ Icon, label }) => (
          <CategoryButton
            key={label.toLowerCase()}
            icon={Icon}
            label={label}
            active={label.toLowerCase() === active}
            onPress={(e: GestureResponderEvent) => onCatSelect(e, label.toLowerCase() as Category)}
          />
        ))}
      </ScrollView>
      <ScrollView contentContainerStyle={[styles.scroll]}>
        <View style={[styles.card]}>
          {/* <View style={[styles.cardHead]}>
            <Text>Specials</Text>
          </View>
          <View style={[styles.specialsContainer]}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              snapToAlignment="start"
              snapToInterval={width * 0.7}
              style={[styles.specials]}
            >
              <SpecialsCard onPress={onSpecialPress} />
              <SpecialsCard />
              <SpecialsCard />
              <SpecialsCard />
              <SpecialsCard />
              <SpecialsCard />
            </ScrollView>
          </View> */}
          {/* <View style={[styles.cardHead]}>
            <Text>More</Text>
          </View> */}
          <ScrollView contentContainerStyle={[styles.more]}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  back: {
    height,
    width,
    position: 'absolute',
  },
  categories: {
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    marginHorizontal: 10,
    borderRadius: 5,
    // backgroundColor: COLORS.white,
    marginBottom: 50,
    paddingBottom: 20,
  },
  scroll: {
    paddingHorizontal: 2,
  },
  cardHead: {
    padding: 10,
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
  },
  specials: {},
  specialsContainer: {
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
  },
  more: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
});
