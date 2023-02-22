import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';

// створює store,  в неї може бути багато reducer
const store = configureStore({
    reducer:{
        counter:counterReducer,        
        todo: todoReducer,
    }
})

// виконує частину з ф-ії counterSlice(counterSlice.reducer)--- 
               //reducer---(те що по default), тому напишемо counterReducer
export default store; 