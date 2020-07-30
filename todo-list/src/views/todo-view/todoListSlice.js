import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { id, value } = action.payload;
      state.push({ id: id, value });
    },
    deleteTodo(state, action) {
      const id = action.payload;
      return state.filter((x) => x.id !== id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
