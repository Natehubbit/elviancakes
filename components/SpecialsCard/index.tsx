import React from 'react';
import {
  Dimensions, Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View,
} from 'react-native';
import { COLORS } from '../../common/theme';
import CediIcon from '../../assets/cedi.svg';
import ScaleIcon from '../../assets/scale.svg';

interface SpecialCardProps extends TouchableOpacityProps {

}

const {
  width,
} = Dimensions.get('window');

const SpecialsCard: React.FC<SpecialCardProps> = ({
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container]}
    >
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={[styles.img]}
      />
      <View
        style={[styles.info]}
      >
        <Text style={[styles.title]}>
          Chocolate Cake
        </Text>
        <View style={[styles.row]}>
          <ScaleIcon
            height={15}
            width={15}
            style={[styles.icon]}
          />
          <Text>
            1 pound(s)
          </Text>
        </View>
        <View style={[styles.row]}>
          <CediIcon
            height={15}
            width={15}
            style={[styles.icon]}
          />
          <Text>
            GHS200
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SpecialsCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    width: width * 0.7,
    elevation: 3,
    backgroundColor: COLORS.white,
    marginRight: 10,
    borderRadius: 4,
    margin: 10,
    overflow: 'hidden',
  },
  info: {
    padding: 5,
    paddingHorizontal: 10,
  },
  img: {
    width: '40%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.5,
    marginBottom: 5,
  },
  title: {
    lineHeight: 30,
  },
  icon: {
    marginRight: 5,
  },
});
