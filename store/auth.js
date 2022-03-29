////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const state = () => ({
  data: {},
})

const actions = {
  act: function (context, value) {
    context.commit('mutate', value);
  },
}

const mutations = {
  mutate: function (state, value) {
    state.data = value;
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