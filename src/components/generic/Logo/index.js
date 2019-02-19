import React from 'react';
import { Image } from 'react-native';
import { View, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {},
});

export default ({ source }) => {
  console.log(source);
  return (
    <View style={styles.container}>
      <Image source={source} resizeMode="contain" style={{}} />
    </View>
  );
};
