import React from 'react';
import { Input, View } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from '..';

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: '#f5f5f5',
    height: 50,
    width: '80%',
    borderRadius: 50,
  },
  buttonContainer: {
    height: 50,
    width: '20%',
  },
});

const InputButton = () => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Input style={styles.input} placeholder="Anything to do ?" />
    </View>
    <View style={styles.buttonContainer}>
      <Button text="+" style={styles.button} />
    </View>
  </View>
);

export default InputButton;
