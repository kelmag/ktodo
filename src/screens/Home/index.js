import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container, View } from 'native-base';
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

const Home = (props) => {
  const { navigation } = props;
  return (
    <Container style={styles.container}>
      <Logo source={require('../../images/Logo.png')} />
      <Button text="press me " onPress={() => navigation.navigate('Todo')} />
    </Container>
  );
};

export default Home;
