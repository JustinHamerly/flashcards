import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topicsByName: {},
}

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      console.log(action.payload);
      state.topicsByName[action.payload.toLowerCase()] = {
        name: action.payload.toLowerCase(),
        quizIds: []
      }
    }
  }
})


//selector functions exports
export const getTopics = (state) => state.topics.topicsByName;

//actions object export
export const {
  addTopic
} = topicsSlice.actions;

//reducer export
export default topicsSlice.reducer;