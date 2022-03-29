<template>
  <section class="u-ch-mb-2">
    <h2 class="text-3xl">入出庫詳細</h2>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$router.back()">戻る</button>
    <div class="u-ch-mb-2">
      <!-- ヘッダー情報 -->
      <ul class="m-Head-Detail u-clearfix">
        <li class="c-Head-Detail">
          <div class="a-Title">
            <p class="text-xl">仕入れ先</p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
        <li class="c-Head-Detail u-ch-mb-1">
          <div class="a-Title">
            <p class="text-xl">仕入れ先</p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
          <li class="c-Head-Detail u-ch-mb-1">
          <div class="a-Title">
            <p class="text-xl">購買申請NO</p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
        <li class="c-Head-Detail u-ch-mb-1">
          <div class="a-Title">
            <p class="text-xl">ETD</p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
        <li class="c-Head-Detail u-ch-mb-1">
          <div class="a-Title">
            <p class="text-xl">管理番号</p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
        <li class="c-Head-Detail u-ch-mb-1">
          <div class="a-Title">
            <p class="text-xl">入港予定日 ( ETA ) </p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
          <li class="c-Head-Detail u-ch-mb-1">
          <div class="a-Title">
            <p class="text-xl">Proforma Ioice No.</p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
        <li class="c-Head-Detail u-ch-mb-1">
          <div class="a-Title">
            <p class="text-xl">デバン入荷び</p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
        <li class="c-Head-Detail u-ch-mb-1">
          <div class="a-Title">
            <p class="text-xl">B/L No</p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
        <li class="c-Head-Detail u-ch-mb-1">
          <div class="a-Title">
            <p class="text-xl">在庫登録日</p>
          </div>
          <p class="a-Txt pl-3">{{ this.eventData.title }}</p>
        </li>
      </ul>
      <!-- 各種日時 -->
      <div class="m-Date-List">
        <table border="1">
          <tbody>
            <tr>
              <td>購買申請所承認</td>
              <td>1月26日</td>
            </tr>
          </tbody>
        </table>
      </div>
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
.m-Head-Detail {

}
.c-Head-Detail {
  float: left;
  // display: inline-block;
  min-width: 50%;
  padding-left: 16px;
  padding-right: 16px;
  .a-Title {
    border-bottom: 1px solid gray;
  }
  .a-Txt {
    
  }
}

</style>