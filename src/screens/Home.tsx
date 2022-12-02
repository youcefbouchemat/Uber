import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';

const Home = () => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 bg-slate-400')}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
