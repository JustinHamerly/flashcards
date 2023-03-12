import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topicsByName: {},
}

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const topicName = action.payload.name.toLowerCase();
      if (state.topicsByName[topicName]) return;
      state.topicsByName[topicName] = {
        name: topicName,
        icon: action.payload.icon,
        quizIds: []
      }
    },
    addQuizIdToTopic: (state, action) => {
      const {id, topic} = action.payload;
      state.topicsByName[topic].quizIds.push(id);
    }
  }
})


//selector functions exports
export const getTopics = (state) => state.topics.topicsByName;

//actions object export
export const {
  addTopic,
  addQuizIdToTopic
} = topicsSlice.actions;

//reducer export
export default topicsSlice.reducer;