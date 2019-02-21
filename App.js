import React from 'react';
import { Provider, connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Root } from 'native-base';
import { store } from './src/models';
import Navigator from './src/core/navigation/routes';

EStyleSheet.build({
  $bgColor: '#F5F5F5',
  $shadowColor: '#EEEEEE',
  $fontColor: '#333',
  // $outline: 1,
});

export default () => (
  <Root>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </Root>
);
