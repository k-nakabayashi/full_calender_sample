<template>
   <div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$router.back()">戻る</button>
    <div>
      <ul>
        <li><p>{{ this.$route.params.title }}</p></li>
        <li><p>{{ this.$route.params.start }}</p></li>
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