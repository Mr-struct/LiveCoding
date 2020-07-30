import * as Actions from "../actions";

const initState = [{ id: 0, value: "Hello" }];

const todoOpp = (state = initState, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...state, action.item];
    case Actions.DEL_TODO:
      return state.filter((x) => x.id !== action.id);
    default:
      return state;
  }
};

export default todoOpp;
