<template>
  <div id="#app" style="width: 100%; overflow: hidden;">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/store'
  export default {
    store
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  html,
  body,
  #app {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
  }
</style>
