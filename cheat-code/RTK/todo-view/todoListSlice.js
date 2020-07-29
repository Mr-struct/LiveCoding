import { createSlice } from "@reduxjs/toolkit";
let idTodos = 0;
const todoSlice = createSlice({
  name: "todo",
  initialState: [{ id: 0, value: "Hello" }],
  reducers: {
    addTodo(state, action) {
      const { value } = action.payload;
      state.push({ id: idTodos++, value });
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.splice(id, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
