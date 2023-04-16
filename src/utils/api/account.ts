import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIURL } from "../rootUrl";
import axios from "axios";

const loginUrl = `${APIURL}/account/token/`;
const signUpUrl = `${APIURL}/account/register/`;
type loginDetails = {
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload: loginDetails) => {
    return fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);

type RegisterType = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  password_confirm: string;
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (payload: RegisterType) => {
    return fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);

export type username = {
  username: string;
};

export type _email = {
  email: string;
};
export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (payload: _email) => {
    return fetch(`${APIURL}/account/forgot_password/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);

type resetType = {
  token: string;
  password: string;
  password_confirm: string;
};

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (payload: resetType) => {
    return fetch(`${APIURL}/account/password_reset/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);

// export const Logout = async () => {}

export const contactUs = async (
  name: string,
  message: string,
  email: string,
  setSendStatus: any
) => {
  const data = { name: name, message: message, email: email };
  const response = await axios.post(`${APIURL}/api/contact_us/`, data);
  if (response.status === 200) {
    setSendStatus(true);
  }
};

type usernameType = {
  username: string;
};
export const updateProfile = async (data: any) => {
  const response = await axios.post(`${APIURL}/account/update_profile/`, data);
  return response;
};

export const getUserApi = async (username: usernameType) => {
  const response = await axios.post(`${APIURL}/account/get_user/`, username);
  return response.data;
};
