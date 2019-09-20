import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "logout") {
    state = undefined;
  }
  if (action.type === "loadUsers") {
    return {
      ...state,
      allUsers: action.allUsers
    };
  }
  if (action.type === "user") {
    return {
      ...state,
      username: action.username,
      frontendPath: action.frontendPath
    };
  }
  if (action.type === "login") {
    return { ...state, authenticated: action.authenticated };
  }
  if (action.type === "curlType") {
    return {
      ...state,
      pattern: action.pattern,
      texture: action.texture,
      porosity: action.porosity
    };
  }
  if (action.type === "products") {
    return {
      ...state,
      shampoo: action.shampoo,
      conditioner: action.conditioner,
      leaveIn: action.leaveIn,
      treatments: action.treatments,
      stylers: action.stylers
    };
  }
  if (action.type === "search") {
    return {
      ...state,
      searchQuery: action.searchQuery
    };
  }
  return state;
};

const store = createStore(
  reducer,
  {
    allUsers: [],
    username: "",
    authenticated: false,
    cookie: undefined,
    pattern: "",
    texture: "",
    porosity: "",
    shampoo: "",
    conditioner: "",
    leaveIn: "",
    treatments: "",
    stylers: "",
    frontendPath: "",
    searchQuery: ""
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
