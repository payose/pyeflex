<template>
  <SimpleLayout>
    <div id="about-movie">
      <div class="container-fluid about-container">
        <b-icon icon="arrow-left-circle-fill" style="width: 30px; height: 30px; cursor: pointer; top: -50px"
      class="mr-5 text-secondary svg position-absolute" @click="back()">
      </b-icon>
        <div class="row">
          <div class="col-md-8">
            <div class="iframe-container">
              <iframe
                :src="'https://www.youtube.com/embed/' + trailerId + '?controls=0'"
                class="responsive-iframe"
                >
                  <p class="h1 play-btn">
                    <b-icon icon="play-btn" font-scale="2.0" variant="warning" animation="fade"></b-icon>
                  </p>
              </iframe>
            </div>
          </div>
          <div class="col-md-4 mt-4 pd-md-3">
            <div class="text-center text-md-start">
              <h2 class="title pb-1 text-left text-secondary">{{ clickedMovie.title }}</h2>
              <p class="mt-3 text-secondary text-bold">{{clickedMovie.overview}}</p>
              <b-button variant="warning">download</b-button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </SimpleLayout>
</template>

<script>
import SimpleLayout from '@/layouts/SimpleLayout'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'trailerId',
      'clickedMovie'
    ])
  },
  components: {
    SimpleLayout,
  },
  methods: {
    back () {
      this.$router.push('/')
    }

  }
}

</script>

