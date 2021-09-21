import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabNames: [
      { server: 'Crime', id: 80 },
      { server: 'Adventure', id: 12 },
      { server: 'Anime', id: 16 },
      { server: 'Sci-fi', id: 878 },
      { server: 'Horror', id: 27 },
      { server: 'Comic', id: 35 },
      { server: 'Romance', id: 10749 }
    ],

    movieTitleSearch: '',
    trendingMoviesList: [],
    discoverMoviesList: [],
    movies: {
      discoverMoviesList: [],
      searchMovieResults: []
    }
  },

  mutations: {
    trending (state, trendingMoviesList) {
      state.trendingMoviesList = trendingMoviesList
    },
    discover (state, discoverMoviesList) {
      state.movies.discoverMoviesList.push(...discoverMoviesList)
    }
  },
  actions: {
    trendingMovies ({ commit }) {
      axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=8877d1eb614b8be7d7f8df5f78c5609d')
        .then(response => {
          this.trendingMoviesList = response.data.results
          commit('trending', this.trendingMoviesList)
        })
    },
    discoverMovies ({ commit }) {
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=8877d1eb614b8be7d7f8df5f78c5609d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7.0')
        .then(response => {
          this.discoverMoviesList = response.data.results
          commit('discover', this.discoverMoviesList)
        })
    },
  },
  modules: {
  }
})
