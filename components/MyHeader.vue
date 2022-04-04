<template>

<div class="mb-5 u-clearfix">
    <ul class="float-left">
        <li class="inline-block">
        <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$router.push('/calender')">カレンダー</button>
        </li>
        <li class="inline-block">
        <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$router.push('/search')">検索</button>
        </li>
    </ul>
    <ul class="float-right">
        <li>
        <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$auth.logout()">ログアウト</button>
        </li>
    </ul>
</div>

</template>

<script>

export default {
  layout: "auth",
  name: "myHeader",
  methods: {

  }
}
</script>
