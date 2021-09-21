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
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Cards
  },

  /* data () {
    return {
      moreItems: []
    }
  }, */

  methods: {
  },

  computed: {
    ...mapState([
      'movies'
    ]),

    ...mapGetters({
    })
  },

  mounted () {
    this.$store.dispatch('discoverMovies')
  }
}

</script>

<style>

</style>
