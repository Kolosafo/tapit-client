import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import dataReducer from "./data/dataSlice";

const Allreducer = combineReducers({
  user: userReducer,
  data: dataReducer,
});
export const store = configureStore({
  reducer: Allreducer,
});

export type IRootState = ReturnType<typeof store.getState>;
