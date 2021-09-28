<template>
  <nav id="flex-header" class="navbar pb-md-4 px-md-3 pt-sm-1">
    <div class="container-fluid align-items-end">
      <a class="navbar-brand" to="/"><img src="./../assets/pyeflex.png" alt=""></a>

      <form @submit.prevent="searchMovies()" action="" class="d-none d-md-block">
        <input
          id="search"
          v-model="movieTitleSearch"
          type="text"
          placeholder="Quick Search..."
          required
        >
        <button type="submit"><b-icon icon='search' class="icon"></b-icon></button>
      </form>

      <div class="d-sm-block d-md-none toggle-icon d-flex flex-wrap">
        <button v-b-toggle.collapse-1><b-icon icon='search' class="icon"  font-scale="1.5"></b-icon></button>
        <button v-b-toggle.collapse-2><b-icon icon='grid' class="icon ml-5"  font-scale="1.5"></b-icon></button>
      </div>

      <b-collapse id="collapse-1" class="mt-2">
        <form @submit.prevent="searchMovies()" action="">
          <input id="search"
          v-model="movieTitleSearch"
          type="text"
          placeholder="Quick Search..."
          required
          >
          <button type="submit" class="d-none"><b-icon icon='search' class="icon "></b-icon></button>
        </form>
      </b-collapse>

      <b-collapse id="collapse-2" class="mt-2 d-md-none">
        <b-nav vertical pills>
          <b-nav-item 
          v-for="tabName in tabNames" 
          :key="tabName.id" 
          @click="searchCategories(tabName)">
          {{tabName.server}}</b-nav-item>
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
    ]),

    movieTitleSearch: {
      get () {
        return this.$store.state.movieTitleSearch
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  },

  methods: {
    searchMovies () {
      this.$router.push({ path: `/filter/${this.movieTitleSearch}` })
      this.$store.dispatch('searchMovies')
    },

    // searchCategories (index) {
    //   this.$store.dispatch('searchCategories', index)
    // },

    searchCategories (tabName) {
      this.$router.push({ path: `/filter/${tabName.server}` })
      // this.$router.push('/filter/'+this.tabName)
      this.$store.dispatch('searchCategories', tabName.id)
    }
  }
}
</script>