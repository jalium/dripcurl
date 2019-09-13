import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "logout") {
    state = undefined;
  }
  if (action.type === "user") {
    return {
      ...state,
      username: action.user,
      cookie: action.cookie,
      frontendPath: action.frontendPath
    };
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
  if (action.type === "filter") {
    return {
      ...state,
      isFiltered: action.isFiltered,
      filteredResults: action.filteredResults
    };
  }
  return state;
};

const store = createStore(
  reducer,
  {
    username: undefined,
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
    isFiltered: false,
    filteredResults: []
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
