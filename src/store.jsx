import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "user") {
    return { ...state, username: action.user };
  }
  if (action.type === "login") {
    return { ...state, authenticated: action.athenticated };
  }
  if (action.type === "curlType") {
    return {
      ...state,
      pattern: action.pattern,
      texture: action.texture,
      porosity: action.porosity
    };
  }
  return state;
};

const store = createStore(
  reducer,
  {
    username: undefined,
    authenticated: false,
    pattern: "",
    texture: "",
    porosity: ""
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
