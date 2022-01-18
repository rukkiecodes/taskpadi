export default {
  state: {
    transactionFilters: [
      { title: "All" },
      { title: "Successful" },
      { title: "Pending" },
      { title: "Failed" },
    ],
    search: ""
  },
  getters: {
    transactionFilters: (state) => state.transactionFilters,
  },
  mutations: {},
  actions: {},
}
