<template>
  <SimpleLayout>
    <div id="about-movie">
      <div class="container-fluid about-container">
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
          <div class="col-md-4 mt-4">
            <div class="text-sm-center">
              <h2 class="title pb-1 text-left text-secondary">{{ clickedMovie.title }}</h2>
              <p class="mt-3 text-secondary text-bold">{{clickedMovie.overview}}</p>
              <b-button variant="warning">download</b-button>
            </div>
          </div>
        </div>
      </div>
      <!-- <b-icon icon="x-octagon-fill" style="width: 30px; height: 30px; cursor: pointer"
      class="mr-5 text-secondary svg" @click="back()">
      </b-icon> -->
      <!-- <div class="iframe-container">
        <iframe
          :src="'https://www.youtube.com/embed/' + trailerId + '?controls=0'"
          class="responsive-iframe"
          >
            <p class="h1 play-btn">
              <b-icon icon="play-btn" font-scale="2.0" variant="warning" animation="fade"></b-icon>
            </p>
        </iframe>
      </div>
      <div class="">
        <h2 class="title pb-1 text-left text-secondary">{{ clickedMovie.title }}</h2>
        <p class="mt-3 text-secondary text-bold p-3">{{clickedMovie.overview}}</p>
        <b-button variant="warning">download</b-button>
      </div> -->
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
  }
}

</script>

