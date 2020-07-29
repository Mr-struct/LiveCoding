export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";

export const addTodo = (item) => {
  return {
    type: ADD_TODO,
    item,
  };
};

export const deleteTodo = (id) => {
  return { type: DEL_TODO, id };
};
