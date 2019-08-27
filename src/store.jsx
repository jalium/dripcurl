import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "user") {
    return { ...state, username: action.user};
  }
  if (action.type === "login") {
    return { ...state, authenticated: false };
  }
  return state;
};

const store = createStore(
  reducer,
  { username: undefined, authenticated: false },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
