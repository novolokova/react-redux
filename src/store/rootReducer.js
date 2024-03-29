import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import usersReducer from "./usersSlice"



const rootReducer = combineReducers({
    counter:counterReducer, // бере функції з counterSlice.reducer(по default)       
    todo: todoReducer,
    users: usersReducer,
})


export default rootReducer; 

