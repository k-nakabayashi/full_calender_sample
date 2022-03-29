
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const state = () => ({
  data: {},
})

const actions = {
  act: function (context, value) {
    console.log("actions");
    context.commit('mutate', value);
  },
}

const mutations = {
  mutate: function (state, value) {
    console.log("mutate");
    state.data = value;
    console.log("mutate2");
  },   
}

const getters = {
  get:  state => {
    console.log("store");
      return state.data;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
  /*
  export const plugins = [
    createPersistedState(),
  ]*/