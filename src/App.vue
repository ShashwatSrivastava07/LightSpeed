<template>
  <div id="app">
    <HeaderNav />
    <router-view />
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
@import url('https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Geologica", sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-variation-settings:
    "slnt" 0,
    "CRSV" 0,
    "SHRP" 0;
}

/* Button CSS */

.btn-primary {
  background-color: #e81c1c;
  color: #fff;
  border: 1px solid #e81c1c;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color .12s ease-in-out;
}

.btn-primary:hover {
  background-color: #c7141f;
}

.btn-secondary {
  background-color: #fff;
  color: #e81c1c;
  border: 1px solid #e81c1c;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 20px;
  transition: all .12s ease-in-out;
}

.btn-secondary:hover {
  background-color: #e81c1c;
  color: #fff;
}

</style>
