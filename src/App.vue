

<script setup>
import NavBar from './components/NavBar.vue'

import Footer from './components/Footer.vue'
</script>

<template>

<router-view/>
<NavBar></NavBar>
<Footer> </Footer>

</template>

<style>
@import url('https://fonts.cdnfonts.com/css/cascadia-code');


#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  padding: 6.1rem 0px 0px 0px
}

body{
  background-color: #f1f1f1;
  margin: 0;
}

</style>
