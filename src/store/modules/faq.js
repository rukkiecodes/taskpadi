export default {
  state: {
    active_question: "",
    answer: ``,
    initial: "What is TrustPaddi",
  },
  getters: {},
  mutations: {
    pass_data: (state, question) => {
      state.active_question = question.title;
      state.answer = question.answer;
      state.initial = "";
    },
  },
  actions: {
    pass_data({ commit }, question) {
      commit("pass_data", question);
    },
  },
};
