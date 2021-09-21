<template>
  <nav id="flex-header" class="navbar pb-md-4 px-md-3 pt-sm-1">
    <div class="container-fluid align-items-end">
      <a class="navbar-brand" href="#"><img src="./../assets/pyeflex.png" alt=""></a>

      <form action="" class="d-none d-md-block">
        <input type="text" placeholder="Quick Search...">
        <button type="submit"><b-icon icon='search' class="icon"></b-icon></button>
      </form>

      <div class="d-sm-block d-md-none toggle-icon d-flex flex-wrap">
        <button v-b-toggle.collapse-1><b-icon icon='search' class="icon"  font-scale="1.5"></b-icon></button>
        <button v-b-toggle.collapse-2><b-icon icon='grid' class="icon ml-5"  font-scale="1.5"></b-icon></button>
      </div>

      <b-collapse id="collapse-1" class="mt-2">
        <form action="">
          <input type="text">
          <button type="submit" class="d-none"><b-icon icon='search' class="icon "></b-icon></button>
        </form>
      </b-collapse>

      <b-collapse id="collapse-2" class="mt-2 d-md-none">
        <b-nav vertical pills>
          <b-nav-item v-for="(tabName, index) in tabNames" :key="tabName.id" @click="searchCategories(index)">{{tabName.server}}</b-nav-item>
        </b-nav>
      </b-collapse>

    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'flex-header',
  computed: {
    ...mapState([
      'tabNames'
    ])
  },

  methods: {
    searchCategories (index) {
      this.$store.dispatch('searchCategories', index)
    }
  }
}
</script>