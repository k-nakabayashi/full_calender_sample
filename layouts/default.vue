<template>
  <div class="u-clearfix pt-6 px-1 pl-3 pr-3">
    <!-- <div class="c-Menu">
      <Menu />
    </div> -->
    <div class="c-Article">
      <Nuxt />
    </div>
  </div>
</template>
<style lang="scss">

  .c-Menu {
    position: fixed;
    background: gray;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .c-Article {
    position: static;
    z-index: 0;
  }

</style>