import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import VuexPersistence from 'vuex-persist'

Vue.use(VueSidebarMenu)

export default ({ store }) => {
    new VuexPersistence({
      storage: window.localStorage,
      reducer: (state) => ({ 
          auth: state.auth,
          event: state.event,
          event_list: state.event_list,
        }),
    //   filter: (mutation) => mutation.type === 'setYourState',
    }).plugin(store)
}