import { createSlice } from "@reduxjs/toolkit";
import { findElementInWord } from "../utils/searchUtils";

export const challengeSlice = createSlice({
  name: "challenge",
  initialState: {
    firstWord: [],
    secondWord: [],
  },
  reducers: {
    findMatchingElements: (state, action) => {
      const { firstWord, secondWord } = action.payload;
      state.firstWord = findElementInWord(firstWord);
      state.secondWord = findElementInWord(secondWord);
    },
  },
});

export const { findMatchingElements } = challengeSlice.actions;
export default challengeSlice.reducer;
