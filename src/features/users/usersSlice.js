import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../../helpers";
import fetchUsers from "../../services/fetchUsers";
import postUser from "../../services/postUser";

export const getUsers = createAsyncThunk("users/fetchGetUsers", async () => {
   const response = await fetchUsers();
   return response;
});

export const postNewUser = createAsyncThunk("users/postUser", async (body) => {
   const response = await postUser(body);
   return response;
});

export const usersSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      //GET users
      builder.addCase(getUsers.pending, (state, action) => {
         state.status = "loading";
      });
      builder.addCase(getUsers.fulfilled, (state, action) => {
         const usersData = action.payload.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city,
         }));
         state.users = usersData;
         state.status = "ok";
      });
      builder.addCase(getUsers.rejected, (state, action) => {
         state.status = "ko";
      });
      //POST user
      builder.addCase(postNewUser.pending, (state, action) => {
         state.status = "loading";
      });
      builder.addCase(postNewUser.fulfilled, (state, action) => {
         state.users.unshift(action.payload);
         state.status = "ok";
      });
      builder.addCase(postNewUser.rejected, (state, action) => {
         state.status = "ko";
      });
   },
});


export const selectUsers = (state) => state.users.users;
export const selectStatus = (state) => state.users.status;

export default usersSlice.reducer;
