/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootApp from './RootApp';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App = () => {
  return (
    <SafeAreaProvider>
      <TailwindProvider utilities={utilities}>
        <RootApp />
      </TailwindProvider>
    </SafeAreaProvider>
  );
};

export default App;
