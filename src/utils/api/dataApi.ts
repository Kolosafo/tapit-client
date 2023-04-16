import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIKEY, APIURL } from "../rootUrl";
import { username } from "./account";
type UpdatePayload = {
  id?: number;
  user?: string;
  title?: string;
  url?: string;
};
// COVER LETTER RELATED
export const saveSocialLink = createAsyncThunk(
  "api/saveSocialLink",
  async (payload) => {
    return fetch(`${APIURL}/api/save_social_links/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);

export const getSocialLinks = createAsyncThunk(
  "api/getSocialLinks",
  async (payload: username) => {
    return fetch(`${APIURL}/api/get_social_links/${payload.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
);

export const updateSocialLink = createAsyncThunk(
  "api/updateSocialLink",
  async (payload: UpdatePayload) => {
    return fetch(`${APIURL}/api/update_social_links/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);

export const getLinks = createAsyncThunk(
  "api/getLinks",
  async (payload: username) => {
    return fetch(`${APIURL}/api/get_links/${payload.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
);

export const saveLink = createAsyncThunk(
  "api/saveLink",
  async (payload: UpdatePayload) => {
    return fetch(`${APIURL}/api/save_link/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);

export const updateLink = createAsyncThunk(
  "api/updateLink",
  async (payload: UpdatePayload) => {
    return fetch(`${APIURL}/api/update_link/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: APIKEY,
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);

type DeleteType = {
  id: number;
};

// SKILLS RELATED
export const deleteLink = createAsyncThunk(
  "api/deleteLink",
  async (payload: DeleteType) => {
    return fetch(`${APIURL}/api/delete_link/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);
