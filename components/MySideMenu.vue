<template>
  <sidebar-menu :menu="menu">
  </sidebar-menu>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      menu: [
          {
              header: true,
              title: '入出庫',
              hiddenOnCollapse: true
          },
          {
              href: '/calender',
              title: 'カレンダー',
              // icon: 'fa fa-user'
          },
          {
              href: '/logut',
              title: 'ログアウト',
              // icon: 'fa fa-user'
          },
          // {
          //     href: '/charts',
          //     title: 'Charts',
          //     icon: 'fa fa-chart-area',
          //     child: [
          //         {
          //             href: '/charts/sublink',
          //             title: 'Sub Link'
          //         }
          //     ]
          // }
      ]
    }
  }
}
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.6.1/css/all.css');

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
} */
</style>