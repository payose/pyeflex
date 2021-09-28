<template>
  <div id="app">
    <!-- <Header/> -->
      <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import  Header from '@/components/Header'
export default {
  components: {
    // Header
  },
  computed: {
    ...mapState([
      'movies',
      'clickedMovie',
      'trailerId'
    ])
  }
}
</script>

<style lang="scss">
@import 'assets/css/main.scss';

</style>
