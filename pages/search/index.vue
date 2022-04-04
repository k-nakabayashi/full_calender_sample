<template>
<div>
  aa
<vue-good-table
      :columns="columns"
      :rows="rows"/>
</div>
</template>

<script>
export default {
  layout: "auth",
  name: 'search',
  components: {
  },

  data () {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },

  computed: {
    // ...mapGetters({
    //   eventData: "event_list/get"
    // })
  },
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