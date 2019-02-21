import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  View,
  SwipeRow,
  Button,
  Item,
} from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: 50,
  },
  content: {
    padding: 10,
  },
  title: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#EC524B',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  SwipeRow: {
    backgroundColor: '#FAFAFA',
  },
});

class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedId: -1 };
  }

  render() {
    const { todos, onPress } = this.props;
    return (
      <View style={styles.container}>
        <List style={{ padding: 0 }}>
          <ListItem itemDivider style={styles.title}>
            <Text style={styles.text}>Tasks</Text>
          </ListItem>
          {todos.map(todo => (
            <SwipeRow
              key={todo.id}
              style={styles.SwipeRow}
              rightOpenValue={-75}
              body={(
                <View>
                  <Text style={styles.content}>{todo.text}</Text>
                </View>
)}
              right={(
                <Button danger onPress={() => onPress(todo.id)}>
                  <Icon active name="trash" />
                </Button>
)}
            />
          ))}
        </List>
      </View>
    );
  }
}

export default ListTodo;
