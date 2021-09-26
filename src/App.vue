<template>
  <div id="app">
    <Header/>
    <div class="container-fluid">
      <div class="row" id="row">
        <div class="col-md-2 d-none d-md-block">
          <SideBar/>
        </div>
        <div class="col-md-10">
          <div id="nav">
            <router-link to="/"></router-link>
            <router-link to="/Filter/tabName"></router-link>
          </div>
          <router-view/>
        </div>
        <router-link to="/movie"></router-link>

      </div>
    </div>

    
  </div>
</template>

<script>
import  Header from '@/components/Header'
import  SideBar from '@/components/SideBar'
export default {
  components: {
    Header,
    SideBar,
  }
}
</script>

<style lang="scss">
@import 'assets/css/main.scss';

</style>
