import * as types from './types';

const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: action.payload.id, text: action.payload.text }],
      };
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
