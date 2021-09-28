<template>
  <div id="card" v-b-toggle.sidebar-backdrop>
    <div class="card-movie"  @click="getMovie()">
      <div>
        <img :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" 
        loading="lazy" 
        alt="Movie Poster" 
        class="img-fluid"
        >
      </div>
      <p class="text-secondary text-truncate">{{ movie.title }}</p>
    </div>
    <!-- <div class="detail mt-3">
      <p class="text-secondary text-truncate">{{ movie.title }}</p>
    </div> -->
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  props: ['movie'],

  computed: {
    ...mapState([
      'clickedMovie'
    ]),

    ...mapGetters({
    })
  },

  methods: {
    getMovie () {
      this.$router.push({ path: `/About/${this.movie.title}` })
      this.$store.state.clickedMovie = this.movie
      this.$store.dispatch('getMovie')
    }
  }
}
</script>
