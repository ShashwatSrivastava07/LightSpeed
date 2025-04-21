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
  text-decoration: none;
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

.desktop-width {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.link {
    display: block;
    color:#000;
    text-decoration: underline;
    font-size: 20px;
    color: #e81c1c;
    font-weight: 600;
    margin-top: 15px;
}

.logo-login {
    margin-bottom: 20px;
}

.red.svelte-1xm44i5 {
    fill: #e81c1c;
}

</style>
