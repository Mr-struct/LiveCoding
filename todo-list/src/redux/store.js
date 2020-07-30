import rootReducer from "./reducers";
import { createStore } from "redux";
export default createStore(rootReducer);

// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../views/todo-view/todoListSlice";
// export default configureStore({
//   reducer: {
//     todoOpp: todoReducer,
//   },
// });
