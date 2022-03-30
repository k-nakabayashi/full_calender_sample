let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '')

function createEventId() {
  return String(eventGuid++)
}

const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '材木屋A：木材１',
    start: '2022-03-03',
    constraint: 'businessHours',

    extendedProps: {
      supplier: "材木屋A",
      item_name: "木材１-1",
      etd: '2022-03-03T13:00:00',
      eta: '2022-03-04T13:00:00',
      devanning_date: "?",
      inventory_registration_date: "?",

      purchase_no: "1",
      ctrl_no: "1",
      invoice_no: "1",
      bl_no: "?",
    }
  },
  {
    id: createEventId(),
    title: '材木屋A：木材2',
    start: '2022-03-13',
    color: '#257e4a',

    extendedProps: {
      supplier: "材木屋A",
      item_name: "木材１-2",
      etd: '?',
      eta: '2022-03-13T11:00:00',
      devanning_date: "?",
      inventory_registration_date: "?",

      purchase_no: "1",
      ctrl_no: "1",
      invoice_no: "1",
      bl_no: "?",
    }
  },
  {
    id: createEventId(),
    title: '材木屋A：木材3',
    start: '2022-03-18',
    extendedProps: {
      supplier: "材木屋A",
      item_name: "木材１-3",
      etd: '2022-03-18',
      eta: '2022-03-20',
      devanning_date: "?",
      inventory_registration_date: "?",

      purchase_no: "1",
      ctrl_no: "1",
      invoice_no: "1",
      bl_no: "?",
    }
  },
  {
    id: createEventId(),
    title: 'DIY店-A：人工芝1',
    start: '2022-03-29',
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "人工芝１-1",
      etd: '?',
      eta: '2022-03-29T20:00:00',
      devanning_date: "?",
      inventory_registration_date: "?",

      purchase_no: "1",
      ctrl_no: "1",
      invoice_no: "1",
      bl_no: "?",
    }
  },

  {
    id: createEventId(),
    title: 'DIY店-A：人工芝2',
    start: '2022-03-11',
    rendering: 'background',
    
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "人工芝１-2",
      etd: '2022-03-11T10:00:00',
      eta: '2022-03-11T16:00:00',
      devanning_date: "?",
      inventory_registration_date: "?",

      purchase_no: "1",
      ctrl_no: "2",
      invoice_no: "1",
      bl_no: "?",
    }
  },
  {
    id: createEventId(),
    title: 'DIY店-A：人工芝3',
    start: '2022-03-13',
    rendering: 'background',
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "人工芝1-3",
      etd: '2022-03-13T10:00:00',
      eta: '2022-03-13T10:00:00',
      devanning_date: "?",
      inventory_registration_date: "?",

      purchase_no: "1",
      ctrl_no: "2",
      invoice_no: "1",
      bl_no: "?",
    }
  },

  {
    id: createEventId(),
    title: 'DIY店-A：梱包材1',
    start: '2022-03-24',
    rendering: 'background',
    color: '#ff9f89',
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "その他1-1",
      etd: '2022-03-24',
      eta: '2022-03-24',
      devanning_date: "?",
      inventory_registration_date: "?",

      purchase_no: "1",
      ctrl_no: "2",
      invoice_no: "1",
      bl_no: "?",
    }
  },
  {
    id: createEventId(),
    title: 'DIY店-A：梱包材2',
    start: '2022-03-06',
    rendering: 'background',
    color: '#ff9f89',
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "その他1-2",
      etd: '2022-03-06',
      eta: '2022-03-08',
      devanning_date: "?",
      inventory_registration_date: "?",

      purchase_no: "1",
      ctrl_no: "2",
      invoice_no: "1",
      bl_no: "?",
    }
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