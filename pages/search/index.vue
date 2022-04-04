<template>
  <vue-good-table
        :columns="columns"
        :rows="this.event_list"
        :search-options="searchOptions"
        :rtl="false"
        @on-row-click="goToDetail"
      />

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: "auth_full_screen",
  name: 'search',
  components: {
  },

  data (context) {
    return {
      searchOptions: {
        enabled: true,
        placeholder: 'テーブルを検索します',
        trigger: "enter",
      },
      columns: [
        {
          label: '仕入れ先',
          field: 'extendedProps.supplier',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'keyup', //or keyup 
          },
        },
        {
          label: '商品名',
          field: 'extendedProps.item_name',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'keyup', //or keyup 
          },
        },
        {
          label: '購買申請No',
          field: 'extendedProps.purchase_no',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'keyup', //or keyup 
          },
        },
        {
          label: 'ETD',
          field: 'extendedProps.etd',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'yyyy-MM-dd',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'enter', //or keyup 
          },
        },
        {
          label: '管理番号',
          field: 'extendedProps.ctrl_no',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'keyup', //or keyup 
          },
        },

        {
          label: '入港予定日 ( ETA )',
          field: 'extendedProps.eta',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'yyyy-MM-dd',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'enter', //or keyup 
          },
        },
        {
          label: 'Proforma Ioice No.',
          field: 'extendedProps.invoice_no',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'keyup', //or keyup 
          },
        },
        {
          label: 'デバン入荷日',
          field: 'extendedProps.devanning_date',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'yyyy-MM-dd',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'enter', //or keyup 
          },
        },
        {
          label: 'B/L No',
          field: 'extendedProps.bl_no',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'keyup', //or keyup 
          },
        },
        {
          label: '在庫登録日',
          field: 'extendedProps.inventory_registration_date',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'yyyy-MM-dd',
          filterOptions: {
            enabled: true,
            placeholder: " ", 
            trigger: 'keyup', //or keyup 
          },
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      event_list: "event_list/get"
    })
  },

  methods: {
    goToDetail(clickInfo) {
      let target = clickInfo.row;
      this.$store.dispatch('event/act', {
        title: target.title,
        start: target.start,
        extendedProps: target.extendedProps
      });

      this.$router.push(`/detail`)
    },
  }
}

</script>

<style lang='scss' scoped>
// .vgt-table:hover {
//   background: grey!important;
//   color: white;
// }
</style>