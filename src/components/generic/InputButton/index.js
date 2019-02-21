import React, { Component } from 'react';
import {
  Text,
  Icon,
  Button,
  Right,
  View,
  Item,
  Input,
  Body,
  Left,
  Container,
  Content,
} from 'native-base';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
  InputContainer: {
    flex: 5,
  },
  Button: {
    flex: 1,
  },
});

class Todo extends Component {
  state = { text: '' };

  handleTextChange = value => this.setState({ text: value });

  handleButtonClick = () => {
    const { onPress } = this.props;
    const { text } = this.state;
    if (text.trim() !== '') {
      onPress(text);
    }
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Item style={styles.InputContainer}>
          <Input
            placeholder="Anything to do ?"
            primary
            value={text}
            onChangeText={this.handleTextChange}
          />
        </Item>
        <Button block style={styles.Button} transparent info onPress={this.handleButtonClick}>
          <Icon name="add" style={{ fontSize: 40, fontWeight: 'bold' }} />
        </Button>
      </View>
    );
  }
}
/* controlling the state */
export default Todo;
