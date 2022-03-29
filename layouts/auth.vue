<template>
  <div class="u-clearfix pt-6 px-1 pl-3 pr-3">

    
    <div class="c-Article max-w-screen-lg u-mx-auto">
      <button  v-if="$auth.loggedIn" class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$auth.logout()">ログアウト</button>
      <Nuxt />
    </div>
  </div>
</template>
<script>
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