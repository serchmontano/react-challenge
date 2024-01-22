import { configureStore } from "@reduxjs/toolkit";
import challengeReducer from "./challengeSlice";

export default configureStore({
  reducer: {
    challenge: challengeReducer,
  },
});
