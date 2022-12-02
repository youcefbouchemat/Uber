/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootApp from './RootApp';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <RootApp />
    </TailwindProvider>
  );
};

export default App;
