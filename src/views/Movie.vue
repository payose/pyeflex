<template>
  <b-sidebar
    id="sidebar-backdrop"
    width="550px"
    bg-variant="light"
    bodyClass="sidebar-style"
    :noHeader="true"
    backdrop
    shadow
    lazy
  >
    <div class="px-5 py-5 text-center position-absolute">
      <h2 class="title pb-3 text-left pl-3 text-secondary">{{ clickedMovie.title }}</h2>
      <iframe
      :src="'https://www.youtube.com/embed/' + trailerId + '?controls=0'"
      width="420"
      height="250"
      class="position-relative "
      >
        <p class="h1 play-btn">
          <b-icon icon="play-btn" font-scale="2.0" variant="warning" animation="fade"></b-icon>
        </p>
      </iframe>
      <p class="mt-3 text-secondary text-bold p-3">{{clickedMovie.overview}}</p>
      <b-button variant="warning">download</b-button>
    </div>
  </b-sidebar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'trailerId',
      'clickedMovie'
    ])
  }
}
</script>

<style>

.title{
  color: #fdf;
  font-weight: 900;
}

.movie-trailer{
  border-radius: 10px;
  object-fit: fill;
  position: absolute;
  text-align: center;
  right: 0;
  z-index: 10;
}

.play-btn{
  top: 38%;
  right: 50%;
  font-weight: 900;
  position: absolute;
  transform: translateX(50%)
}

.b-sidebar > .b-sidebar-body{
  background-color: #121620
}
</style>
