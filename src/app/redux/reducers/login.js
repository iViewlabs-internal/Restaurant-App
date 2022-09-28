import {LOGIN} from "../actions/index";

let initialState = {
  login: false,
};
export const changeLogin = (store = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...store,
        login: action.payload,
      };
    default: {
      return store;
    }
  }
};