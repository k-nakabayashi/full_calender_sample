<template>
   <div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$router.back()">戻る</button>
    <div>
      <ul>
        <li><p>タイトル：{{ this.$route.query.title }}</p></li>
        <li><p>日付：{{ this.$route.query.startStr }}</p></li>
        <li><p>test：{{ this.$route.query.test }}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'calender',
  components: {
  },
  data() {
    return {

    }
  },

  methods: {
   
  }
}
</script>

<style lang='scss' scoped>

</style>