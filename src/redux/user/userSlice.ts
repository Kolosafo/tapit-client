import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIURL } from "../../utils/rootUrl";
import jwt_decode from "jwt-decode";
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
} from "../../utils/api/account";

type backendUserType = {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  bio: string;
  id: number;
  profile_pic: string;
  public_phone_number: string;
  occupation: string;
  cv: string;
};

const AuthUlr = `${APIURL}/auth/`;
const initailState: IUserProvider = {
  isLogged: false,
  user: {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    bio: "",
    profile_pic: "",
    id: 0,
    public_phone_number: "",
    occupation: "",
    cv: "",
  },
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initailState,
  reducers: {
    logout: (state) => {
      state.isLogged = false;
      state.user = null;
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log("THE LOGIN DATA");
        const rawUserData: backendUserType = jwt_decode(payload.refresh);
        console.log("USER", rawUserData);
        state.user = {
          username: rawUserData.username,
          email: rawUserData.email,
          firstName: rawUserData.first_name,
          lastName: rawUserData.last_name,
          bio: rawUserData.bio,
          profile_pic: rawUserData.profile_pic,
          id: rawUserData.id,
          public_phone_number: rawUserData.public_phone_number,
          occupation: rawUserData.occupation,
          cv: rawUserData.cv,
        };
        state.loading = false;
        state.isLogged = true;
      }),
      builder.addCase(loginUser.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });

    builder.addCase(forgotPassword.pending, (state, { payload }) => {
      state.loading = true;
    }),
      builder.addCase(forgotPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
      }),
      builder.addCase(forgotPassword.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });

    builder.addCase(resetPassword.pending, (state, { payload }) => {
      state.loading = true;
    }),
      builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
      }),
      builder.addCase(resetPassword.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });

    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(registerUser.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
