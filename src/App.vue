<template>
  <div id="app">
    <Header/>

    <!-- <div id="nav">

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import  Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import 'assets/css/main.scss';

</style>
