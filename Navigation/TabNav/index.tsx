import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from '../../components/BottomTab';
import Home from '../../screens/Home';
import Cart from '../../screens/Cart';
import Account from '../../screens/Account';
import Notifications from '../../screens/Notifications';
// import CustomOrder from '../../screens/CustomOrder';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <BottomTab
          {...props}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
      />
      <Tab.Screen
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
