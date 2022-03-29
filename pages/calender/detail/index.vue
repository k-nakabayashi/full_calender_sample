<template>
  <section>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$router.back()">戻る</button>

    <div class="u-ch-mb-1">
      <!-- ヘッダー情報 -->
      <div>
        <ul classa="u-ch-mb-1">
          <li>
            <p>仕入れ先</p>
            <p></p>
          </li>
          <li><p>商品名</p></li>
        </ul>
      </div>
      <!-- 各種日時 -->
      <div></div>
    </div>
    <div>
      <ul>
        <li><p>{{ this.eventData.title }}</p></li>
        <li><p>{{ this.eventData.start }}</p></li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: "auth",
  auth: false,
  name: 'detail',
  components: {
  },

  computed: {
    ...mapGetters({
      eventData: "event/get"
    })
  },

  methods: {
   
  }
}
</script>

<style lang='scss' scoped>

</style>