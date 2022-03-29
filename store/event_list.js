let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '')

function createEventId() {
  return String(eventGuid++)
}

const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '木材１',
    start: '2022-03-03T13:00:00',
    end: '2022-03-04T13:00:00',
    constraint: 'businessHours',

    extendedProps: {
      test: "dds"
    }
  },
  {
    id: createEventId(),
    title: '木材2',
    start: '2022-03-13T11:00:00',
    constraint: 'availableForMeeting', // defined below
    color: '#257e4a'
  },
  {
    id: createEventId(),
    title: '木材3',
    start: '2022-03-18',
    end: '2022-03-20'
  },
  {
    id: createEventId(),
    title: '人工芝1',
    start: '2022-03-29T20:00:00'
  },

  {
    id: createEventId(),
    title: '人工芝2',
    groupId: 'availableForMeeting',
    start: '2022-03-11T10:00:00',
    end: '2022-03-11T16:00:00',
    rendering: 'background'
  },
  {
    id: createEventId(),
    title: '人工芝3',
    groupId: 'availableForMeeting',
    start: '2022-03-13T10:00:00',
    end: '2022-03-13T16:00:00',
    rendering: 'background'
  },

  {
    id: createEventId(),
    title: '梱包材1',
    start: '2022-03-24',
    end: '2022-03-28',
    overlap: false,
    rendering: 'background',
    color: '#ff9f89'
  },
  {
    id: createEventId(),
    title: '梱包材2',
    start: '2022-03-06',
    end: '2022-03-08',
    overlap: false,
    rendering: 'background',
    color: '#ff9f89'
  }
];

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const state = () => ({
  data: INITIAL_EVENTS,
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