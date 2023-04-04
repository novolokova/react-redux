import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

       
export const getAllUsers = createAsyncThunk(
    'users/getAllUsers', 
async (params={}, thunkAPI)=>{
    try {
        const {dispatch}= thunkAPI;
     const data = await fetch('https://randomuser.me/api/?results=5').then((res)=>
     res.json());
     dispatch(loadUsers(data.results))
    } catch (error) {
        
    }
})

const usersSlice = createSlice({
    name: "users",
    initialState:{
        users:[{id:1, name:"Tom"}],
        error: null,
        isFetching:false 
    },
    reducers: {
        loadUsers(state, action ){
            state.users = action.payload;
        }
    }
})
const {loadUsers} = usersSlice.actions;

export default usersSlice.reducer;