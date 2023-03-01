import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../../helpers";
import { fetchUsers } from "../../helpers";

export const getUsers = createAsyncThunk("users/fetchGetUsers", async () => {
   const response = await fetchUsers();
   return response;
});

export const usersSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      builder.addCase(getUsers.pending, (state, action) => {
         state.status = "loading";
      });
      builder.addCase(getUsers.fulfilled, (state, action) => {
         console.log(action.payload);
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
   },
});

// Action creators are generated for each case reducer function
export const { sortName } = usersSlice.actions

export const selectUsers = (state) => state.users.users;
export const selectStatus = (state) => state.users.status;

export default usersSlice.reducer;
