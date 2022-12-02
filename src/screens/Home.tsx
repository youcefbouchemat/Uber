import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {Icon} from '@rneui/themed';

const Home = () => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 bg-slate-400')}>
      <Text>Home</Text>
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        onPress={() => console.log('hello')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
