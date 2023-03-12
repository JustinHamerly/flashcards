import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzesById: {},
}

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addNewQuiz: (state, action) => {
      const newQuiz = action.payload;
      state.quizzesById[newQuiz.id] = newQuiz
    },
  }
})


//selector functions exports
export const getQuizzes = (state) => state.quizzes.quizzesById;

//actions object export
export const {
  addNewQuiz
} = quizzesSlice.actions;

//reducer export
export default quizzesSlice.reducer;