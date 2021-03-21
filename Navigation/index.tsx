import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import Special from '../screens/Special';
import TabNav from './TabNav';
import CustomOrder from '../screens/CustomOrder';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="CustomOrder"
        headerMode="none"
      >
        <Stack.Screen
          name="Home"
          component={TabNav}
        />
        <Stack.Screen
          name="Special"
          component={Special}
        />
        <Stack.Screen
          name="CustomOrder"
          component={CustomOrder}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
