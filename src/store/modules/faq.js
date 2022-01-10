export default {
  state: {
    askedQuestion: [],
    activeQuestion: ""
  },
  getters: {
    askedQuestion: (state) => state.askedQuestion,
  },
  mutations: {
    askQuestion: (state, question) => {
      state.askedQuestion = [];
      state.askedQuestion.push(question);
      state.activeQuestion = state.askedQuestion[0].title;
      console.log(state.activeQuestion);
    },
  },
  actions: {
    askQuestion({ commit }, question) {
      commit("askQuestion", question);
    },
  },
};
