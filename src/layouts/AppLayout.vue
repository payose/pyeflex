<template>
  <div>
    <Header/>
    <div class="container-fluid">
      <div class="row" id="row">
        <div class="col-md-2 d-none d-md-block">
          <SideBar/>
        </div>
        <div class="col-md-10">
          <div id="nav">
            <router-link to="/"></router-link>
          <router-link to="/movie/movieName"></router-link>
            <router-link to="/Filter/tabName"></router-link>
          </div>
        <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  Header from '@/components/Header'
import  SideBar from '@/components/SideBar'
export default {
  components: {
    SideBar,
    Header
  }
}
</script>