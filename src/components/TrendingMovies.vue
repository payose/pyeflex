<template>
  <div id="trending">
    <h2 class="section-title text-secondary">Trending Movies</h2>
      <!--  CAROUSEL -->
      <carousel v-if="trendingMoviesList.length"
        :items=item
        :lazyLoad="true"
        :stagePadding=1
        :autoplay="true"
        :loop="true"
        :nav="false"
        :dots="false"
        :autoplayTimeout=4000
      >
        <div v-for="(trendingMovie, index) in trendingMoviesList" :key="trendingMovie.id" >
          <div v-b-toggle.sidebar-backdrop class="movie-link" @click="getTrendingMovie(index)">
            <img :src="'http://image.tmdb.org/t/p/w500/' + trendingMovie.poster_path" alt="Movie Poster" class="carousel-img">
          </div>
        </div>
      </carousel>
   </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapState } from 'vuex'

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

export default {
  components: {
    carousel
  },

  data () {
    return {
      item: 0
    }
  },

  methods: {
    getTrendingMovie (index) {
      this.$router.push({ path: `/About/${this.trendingMoviesList[index].title}` })
      this.$store.state.clickedMovie = this.trendingMoviesList[index]
      this.$store.dispatch('getMovie')
    },

  /*   getMovie () {
      this.$router.push({ path: `/About/${this.movie.title}` })
      this.$store.state.clickedMovie = this.movie
      this.$store.dispatch('getMovie')
    }, */

    getViewPort () {
      if (vw < 576) {
        this.item = 2
      } else if (vw < 800) {
        this.item = 3
      } else {
        this.item = 4
      }
    }

  },

  computed: {
    ...mapState([
      'trendingMoviesList',
      'clickedMovie'
    ])
  },

  mounted () {
  },
  
  beforeMount () {
    this.$store.dispatch('trendingMovies')
    this.getViewPort(vw)
  }
}
</script>

<style scoped>

</style>
