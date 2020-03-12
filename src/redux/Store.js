import {createStore} from "redux";
import authReducer from "./AuthReducer";

var store = createStore(authReducer);
console.log("Initial state of store:- ", store.getState());

store.dispatch({
    type: "LOGIN",
    payload: {
        email: "vipintomartest@gmail.com",
        name: "Vipin Tomar"
    }
});

console.log("Updated state of store:- ", store.getState());

export default store;
