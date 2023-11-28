import { combineReducers, createStore } from "redux";
import modalReducer from "../reducer/modal";

const rootReducer = combineReducers({
  modal: modalReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
