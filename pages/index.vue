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
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '')

function createEventId() {
  return String(eventGuid++)
}

const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '材木屋A：木材１',
    start: '2022-03-03',
    constraint: 'businessHours',

    extendedProps: {
      supplier: "材木屋A",
      item_name: "木材１-1",
      etd: '2022-03-03',
      eta: '2022-03-04',
      devanning_date: "2022-03-04",
      inventory_registration_date: "2022-03-04",

      purchase_no: "1",
      ctrl_no: "1",
      invoice_no: "1",
      bl_no: "test",
    }
  },
  {
    id: createEventId(),
    title: '材木屋A：木材2',
    start: '2022-03-13',
    color: '#257e4a',

    extendedProps: {
      supplier: "材木屋A",
      item_name: "木材１-2",
      etd: '2022-03-13',
      eta: '2022-03-13',
      devanning_date: "2022-03-13",
      inventory_registration_date: "2022-03-13",

      purchase_no: "1",
      ctrl_no: "1",
      invoice_no: "1",
      bl_no: "test",
    }
  },
  {
    id: createEventId(),
    title: '材木屋A：木材3',
    start: '2022-03-18',
    extendedProps: {
      supplier: "材木屋A",
      item_name: "木材１-3",
      etd: '2022-03-18',
      eta: '2022-03-20',
      devanning_date: "2022-03-18",
      inventory_registration_date: "2022-03-18",

      purchase_no: "1",
      ctrl_no: "1",
      invoice_no: "1",
      bl_no: "test",
    }
  },
  {
    id: createEventId(),
    title: 'DIY店-A：人工芝1',
    start: '2022-03-29',
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "人工芝１-1",
      etd: '2022-03-29',
      eta: '2022-03-29',
      devanning_date: "2022-03-29",
      inventory_registration_date: "2022-03-29",

      purchase_no: "1",
      ctrl_no: "1",
      invoice_no: "1",
      bl_no: "test",
    }
  },

  {
    id: createEventId(),
    title: 'DIY店-A：人工芝2',
    start: '2022-03-11',
    rendering: 'background',
    
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "人工芝１-2",
      etd: '2022-03-11',
      eta: '2022-03-11',
      devanning_date: "2022-03-11",
      inventory_registration_date: "2022-03-11",

      purchase_no: "1",
      ctrl_no: "2",
      invoice_no: "1",
      bl_no: "test",
    }
  },
  {
    id: createEventId(),
    title: 'DIY店-A：人工芝3',
    start: '2022-03-13',
    rendering: 'background',
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "人工芝1-3",
      etd: '2022-03-13',
      eta: '2022-03-13',
      devanning_date: "2022-03-13",
      inventory_registration_date: "2022-03-13",

      purchase_no: "1",
      ctrl_no: "2",
      invoice_no: "1",
      bl_no: "test",
    }
  },

  {
    id: createEventId(),
    title: 'DIY店-A：梱包材1',
    start: '2022-03-24',
    rendering: 'background',
    color: '#ff9f89',
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "その他1-1",
      etd: '2022-03-24',
      eta: '2022-03-24',
      devanning_date: "2022-03-24",
      inventory_registration_date: "2022-03-24",

      purchase_no: "1",
      ctrl_no: "2",
      invoice_no: "1",
      bl_no: "test",
    }
  },
  {
    id: createEventId(),
    title: 'DIY店-A：梱包材2',
    start: '2022-03-06',
    rendering: 'background',
    color: '#ff9f89',
    extendedProps: {
      supplier: "DIY店-A",
      item_name: "その他1-2",
      etd: '2022-03-06',
      eta: '2022-03-08',
      devanning_date: "2022-03-06",
      inventory_registration_date: "2022-03-06",

      purchase_no: "1",
      ctrl_no: "2",
      invoice_no: "1",
      bl_no: "test",
    }
  }
];

export default {
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async loginWithAuthModule () {
      let that = this;

      await this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
      .then((response) => {
        that.$store.dispatch('event_list/act', INITIAL_EVENTS);
        return response
      },
      (error) => {
        return error
      })
    }
  }
}
</script>

