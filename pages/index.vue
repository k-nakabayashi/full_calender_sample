<template>
<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        メールアドレス
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        パスワード
        </label>
        <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
    </div>
    <div class="flex items-center justify-between">
        <button class="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded" type="button" @click="loginWithAuthModule()">
        ログイン
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        パスワードを忘れた場合
        </a>
</div>

</div>

</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async loginWithAuthModule () {
      await this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
      .then((response) => {
        return response
      },
      (error) => {
        return error
      })
    }
  }
}
</script>

