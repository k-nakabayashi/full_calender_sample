<template>
  <vue-good-table
        :columns="columns"
        :rows="rows"
        :search-options="searchOptions"
        @on-row-dblclick="goToDetail"
      />
</template>

<script>
export default {
  layout: "auth",
  name: 'search',
  components: {
  },

  data (context) {
    let _event_list = context.$store.state.event_list.data;

    return {
      rows: _event_list,
      searchOptions: {
        enabled: true,
        placeholder: 'テーブルを検索します',
        trigger: "",
      },
      columns: [
        {
          label: '仕入れ先',
          field: 'extendedProps.supplier',
        },
        {
          label: '商品名',
          field: 'extendedProps.item_name',
        },
        {
          label: '購買申請No',
          field: 'extendedProps.purchase_no',
        },
        {
          label: 'ETD',
          field: 'extendedProps.etd',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: '管理番号',
          field: 'extendedProps.ctrl_no',
        },

        {
          label: '入港予定日 ( ETA )',
          field: 'extendedProps.eta',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Proforma Ioice No.',
          field: 'extendedProps.invoice_no',
        },
        {
          label: 'デバン入荷日',
          field: 'extendedProps.devanning_date',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'B/L No',
          field: 'extendedProps.bl_no',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: '在庫登録日',
          field: 'extendedProps.inventory_registration_date',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
      ],
    };
  },

  computed: {
    // ...mapGetters({
    //   eventData: "event_list/get"
    // })
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


      // columns: [
      //   {
      //     label: '仕入れ先',
      //     field: 'title',
      //   },
      //   {
      //     label: '商品名',
      //     field: 'age',
      //   },
      //   {
      //     label: '購買申請No',
      //     field: 'title',
      //   },
      //   {
      //     label: 'ETD',
      //     field: 'age',
      //     type: 'date',
      //     dateInputFormat: 'yyyy-MM-dd',
      //     dateOutputFormat: 'MMM do yy',
      //   },
        
      //   {
      //     label: '管理番号',
      //     field: 'title',

      //   },


      //   {
      //     label: '入港予定日 ( ETA )',
      //     field: 'title',
      //     type: 'date',
      //     dateInputFormat: 'yyyy-MM-dd',
      //     dateOutputFormat: 'MMM do yy',
      //   },
      //   {
      //     label: 'Proforma Ioice No.',
      //     field: 'age',
      //     type: 'date',
      //     dateInputFormat: 'yyyy-MM-dd',
      //     dateOutputFormat: 'MMM do yy',
      //   },
      //   {
      //     label: 'デバン入荷日',
      //     field: 'title',
      //     type: 'date',
      //     dateInputFormat: 'yyyy-MM-dd',
      //     dateOutputFormat: 'MMM do yy',
      //   },
      //   {
      //     label: 'B/L No',
      //     field: 'age',
      //     type: 'date',
      //     dateInputFormat: 'yyyy-MM-dd',
      //     dateOutputFormat: 'MMM do yy',
      //   },
      //   {
      //     label: '在庫登録日',
      //     field: 'title',
      //     type: 'date',
      //     dateInputFormat: 'yyyy-MM-dd',
      //     dateOutputFormat: 'MMM do yy',
      //   },


</script>









      //   {
      //     label: 'Created On',
      //     field: 'createdAt',
      //     type: 'date',
      //     dateInputFormat: 'yyyy-MM-dd',
      //     dateOutputFormat: 'MMM do yy',
      //   },
      //   {
      //     label: 'Percent',
      //     field: 'score',
      //     type: 'percentage',
      //   },
      // ],
      // rows: event_list