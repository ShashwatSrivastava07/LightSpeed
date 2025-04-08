<template>
  <div id="app">
    <HeaderNav />
  </div>
</template>

<script>

  import HeaderNav from './components/HeaderNav.vue';

  export default {
    name: 'App',
    components: {
      HeaderNav,
    }
  }
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
