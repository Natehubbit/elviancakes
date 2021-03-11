import React, { useEffect, useState } from 'react';
import {
  StatusBar,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import {
  setCustomText,
} from 'react-native-global-props';
import { Provider } from 'react-redux';

import Navigation from './Navigation';
import AppOverlay from './components/AppOverlay';
import { store } from './store';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    Lora: require('./assets/fonts/Lora/Lora-Bold.ttf'),
    Merriweather: require('./assets/fonts/Merriweather/Merriweather-Regular.ttf'),
  });
  useEffect(() => {
    if (fontsLoaded) {
      const textStyle = {
        style: {
          fontFamily: 'Merriweather',
        },
      };
      setCustomText(textStyle);
      setTimeout(() => setLoaded(true), 5000);
    }
  }, [fontsLoaded]);
  return (!loaded)
    ? (
      <AppLoading />
    ) : (
      <Provider store={store}>
        <>
          <StatusBar />
          <AppOverlay>
            <Navigation />
          </AppOverlay>
        </>
      </Provider>
    );
}
