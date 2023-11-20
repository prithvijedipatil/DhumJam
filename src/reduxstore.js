import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Redux/dataslice";

export const store = configureStore({
  reducer: {
    User: userreducer,
  },
});
