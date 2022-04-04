<template>
  <div class="u-clearfix pt-6 px-1 pl-3 pr-3">

    
    <div class="c-Article max-w-screen-xl u-mx-auto u-ch-mb-1">
      <MyHeader />

      <Nuxt />
    </div>
  </div>
</template>
<script>

import MyHeader from '/components/MyHeader'

export default {
  auth: true,
  name: "auth",
  components: {
    MyHeader,
  },
}
// import { mapGetters } from 'vuex'

// import Vue from 'vue'
// Vue.mixin({
//     ...mapGetters({
//       event_list: 'event_list/get',
//     }),
// });

// import { defineComponent } from '@vue/composition-api'
// import { useRouter } from 'vue-router'
// export default defineComponent({
//   setup() {
//     const router = useRouter()

//     // ブラウザバックを無効化
//     addEventListener("popstate", () => {
//       router.push("自分自身のパス")
//     })
//   },
// })

</script>

<style lang="scss">



</style>