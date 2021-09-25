<template>
  <div>
    <div class="d-flex justify-content-between">
      <h2 class="ml-4 mb-5 text-secondary">SEARCH RESULTS</h2>
      <b-icon icon="x-octagon-fill" style="width: 30px; height: 30px; cursor: pointer"
      class="mr-5 text-secondary svg" @click="exit(state)">
      </b-icon>
    </div>

    <div class="container">
      <div class="row movies-list">
        <Cards class="col-6 col-sm-3 movie text-center mb-3"
          v-for="movie in movies.searchMovieResults" :key="'search'+movie.id"
          :movie="movie">
        </Cards>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cards from '@/components/Cards.vue'
export default {
  components: {
    Cards
  },

  methods: {
    exit () {
      this.$store.dispatch('exit')
    }

  },

  computed: {
    ...mapState([
      'movies'
    ])
  }

}

</script>
