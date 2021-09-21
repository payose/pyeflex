<template>
  <div id="app">
    <Header/>
    <div class="container-fluid">
      <div class="row" id="row">
        <div class="col-md-2 d-none d-md-block">
          <SideBar/>
        </div>
        <div class="col-md-10">
          <TrendingMovies
          />

          <DiscoverMovies
          />
        </div>
      </div>
    </div>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import  Header from '@/components/Header'
import  SideBar from '@/components/SideBar'
import  TrendingMovies from '@/components/TrendingMovies'
import  DiscoverMovies from '@/components/DiscoverMovies'
export default {
  components: {
    Header,
    SideBar,
    TrendingMovies,
    DiscoverMovies
  }
}
</script>

<style lang="scss">
@import 'assets/css/main.scss';

</style>
