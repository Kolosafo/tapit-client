/* eslint-disable no-sequences */
import { createSlice } from "@reduxjs/toolkit";
import {
  saveLink,
  getSocialLinks,
  updateSocialLink,
  getLinks,
  updateLink,
  deleteLink,
  saveSocialLink,
} from "../../utils/api/dataApi";

const initailState: DataProvider = {
  links: [],
  socialLinks: [],
  error: false,
  loading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initailState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveLink.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(saveLink.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(saveLink.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });

    builder.addCase(getSocialLinks.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getSocialLinks.fulfilled, (state, { payload }) => {
        state.socialLinks = payload;
        state.loading = false;
      }),
      builder.addCase(getSocialLinks.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });

    builder.addCase(updateSocialLink.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(updateSocialLink.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(updateSocialLink.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });

    builder.addCase(getLinks.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getLinks.fulfilled, (state, { payload }) => {
        state.links = payload;

        state.loading = false;
      }),
      builder.addCase(getLinks.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });

    builder.addCase(updateLink.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(updateLink.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(updateLink.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });

    builder.addCase(deleteLink.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(deleteLink.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(deleteLink.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });

    builder.addCase(saveSocialLink.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(saveSocialLink.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(saveSocialLink.rejected, (state, { payload }) => {
        console.log("REJECTED PAYLOAD", payload);
        state.loading = false;
        state.error = true;
      });
  },
});

export default dataSlice.reducer;
