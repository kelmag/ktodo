import React from 'react';

import { Container, View } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Logo } from '../../components';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 0,
  },
});

const Home = props => (
  <Container style={styles.container}>
    <Logo source={require('../../images/Logo.png')} />
    <Button text="press me " onPress={() => props.navigation.navigate('Todo')} />
  </Container>
);

export default Home;
