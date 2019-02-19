import * as types from "./types";

let nextTodoId = 0;
export const addTodo = text => ({
  type: types.ADD_TODO,
  payload: {
    id: nextTodoId++,
    text
  }
});

export const removeTodo = id => ({
  type: types.REMOVE_TODO,
  id
});
