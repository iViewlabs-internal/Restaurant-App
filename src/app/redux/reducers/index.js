import changeLogin  from "./login";
import changeLoginOut  from "./login";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeLogin,
    changeLoginOut
  });
  export default rootReducer;