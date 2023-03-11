import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: [],
  createTopicIsPending: false,
  failedToCreateTopic: false,
}

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics.push(action.payload)
    }
  }
})


//selector functions exports
export const getTopics = (state) => state.topics;

//actions object export
export const {
  addTopic
} = topicsSlice.actions;

//reducer export
export default topicsSlice.reducer;