// import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchTodo = createAsyncThunk('fetchTodo' , async ()=>{
//     const data = await fetch ('https://open.er-api.com/v6/latest')
//     return data.json()
// })

// const todoslice = createSlice ({
//     name: 'data',
//     initialState: {
//         isloading: false,
//         data: null,
//         error: false
//     },
//     extraReducers:(builder) =>{
//         builder.addCase(fetchTodo.pending, (state, action) => {
//             state.isloading = true
//         });
//         builder.addCase(fetchTodo.fulfilled, (state, action) => {
//             state.isloading = false;
//             state.data = action.payload
//         })
//         builder.addCase(fetchTodo.rejected, (state, action) => {
//             state.error = true ;
//         })
//     }
// })

// export default todoslice.reducer ;



