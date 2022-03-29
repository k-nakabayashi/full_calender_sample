import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import VuexPersistence from 'vuex-persist'
import VueGoodTablePlugin from 'vue-good-table';
 
import 'vue-good-table/dist/vue-good-table.css'
 
Vue.use(VueGoodTablePlugin);
Vue.use(VueSidebarMenu)

// export default ({ store }) => {
//     new VuexPersistence({
//       storage: window.localStorage,
//       reducer: (state) => ({ 
//           auth: state.auth,
//           event: state.event,
//           event_list: state.event_list,
//         }),
//     //   filter: (mutation) => mutation.type === 'setYourState',
//     }).plugin(store)
// }