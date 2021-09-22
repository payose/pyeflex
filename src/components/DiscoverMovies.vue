<template>
  <div id="discover">
    <h2 class="section-title mb-3 text-secondary">Discover Movies</h2>
    <div class="container">
      <div class="row movies-list">
        <Cards class="col-6 col-sm-3 movie text-center mb-4"
        v-for="movie in movies.discoverMoviesList" :key="movie.id"
        :movie="movie">
        </Cards>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from './Cards.vue'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
  components: {
    Cards
  },

  methods: {
  },

  computed: {
    ...mapState([
      'movies'
    ]),

    ...mapMutations([
      'fetchMoreMovies'
    ])
  },

  mounted () {
    this.$store.dispatch('discoverMovies')
    this.$store.commit('fetchMoreMovies')
    
  }
}

</script>

<style>

</style>
