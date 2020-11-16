import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: "", //String
  },
  reducers: {
    setUser:(state, action) => {
      const {uid, displayName, email} = action.payload
      state = {name: displayName, uid:uid, email:email}
    }
  },
});

//we can make a thunk to handle the login or we can dispatch from
//the component a state when successfully logged in
//The errorr messages will be handles in the internal state of
// the login and sign out component

export const { userLogin, setDisplayName, setUser } = userSlice.actions;
export default userSlice.reducer;
