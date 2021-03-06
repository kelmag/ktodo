import React from 'react';
import { Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 50;

const styles = EStyleSheet.create({
  button: {
    minHeight: 20,
    height: INPUT_HEIGHT,
    backgroundColor: '#FE4242',
    alignSelf: 'center',
    borderRadius: 60,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default props => (
  <Button {...props} style={styles.button}>
    <Text style={styles.text}>{props.text}</Text>
  </Button>
);
