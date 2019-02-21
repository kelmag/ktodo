import React, { Component } from 'react';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Image, SafeAreaView, Text } from 'react-native';
import {
  Container, Content, Header, Left, Body, Title, Subtitle, Right,
} from 'native-base';
import { InputButton, ListTodo } from '../../components';
import { addTodo, removeTodo } from '../../models/todo/actions';

const styles = EStyleSheet.create({
  container: {},
});

const mapStateToProps = storeState => ({
  todos: storeState.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  removeTodo: id => dispatch(removeTodo(id)),
});

class Todo extends Component {
  state = {};

  render() {
    const { todos, addTodo, removeTodo } = this.props;
    return (
      <SafeAreaView>
        <Container style={styles.container}>
          <InputButton onPress={addTodo} />
          <ListTodo todos={todos} onPress={removeTodo} />
        </Container>
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
