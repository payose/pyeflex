<template>
  <div>
    <AppLayout>
      <div class="d-flex justify-content-between">
        <h2 class="section-title mb-3 text-secondary">filter for {{ $route.params.tabName}}</h2>
        <b-icon icon="arrow-left-circle-fill" style="width: 30px; height: 30px; cursor: pointer"
        class="mr-5 text-secondary svg" @click="back()">
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
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from '@/layouts/AppLayout'
import { mapState } from 'vuex'
import Cards from '@/components/Cards.vue'
export default {
  components: {
    Cards,
    AppLayout
  },

  methods: {
    back () {
      this.$router.push('/')
    }

  },

  computed: {
    ...mapState([
      'movies'
    ])
  },
  mounted() {
  }
}
</script>
