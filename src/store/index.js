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
    movies: {
      discoverMoviesList: [],
      searchMovieResults: []
    },
    pageNo: 1
  },

  mutations: {
    trending (state, trendingMoviesList) {
      state.trendingMoviesList = trendingMoviesList
    },
    discover (state, discoverMoviesList) {
      state.movies.discoverMoviesList = []
      discoverMoviesList.forEach(discoverMovieList => {
        if(discoverMovieList.poster_path && discoverMovieList.overview) {
          state.movies.discoverMoviesList.push(discoverMovieList)
          }
      });
      // state.movies.discoverMoviesList.push(...discoverMoviesList)
    },
    search (state, searchMovieResults) {
      state.movies.searchMovieResults = []
      searchMovieResults.forEach(searchMovieResult => {
        if(searchMovieResult.poster_path && searchMovieResult.overview) {
          state.movies.searchMovieResults.push(searchMovieResult)
          }
      });
        
    },
    updateMessage (state, movieTitleSearch) {
      state.movieTitleSearch = movieTitleSearch
    },
    fetchMoreMovies (state) {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight >
          document.documentElement.offsetHeight
          // console.log(bottomOfWindow, window.innerHeight, document.documentElement.scrollTop, window.innerHeight+document.documentElement.scrollTop, document.documentElement.offsetHeight)
        
         if (bottomOfWindow) {
          state.pageNo += state.pageNo
          console.log(state.pageNo)
          this.dispatch('discoverMovies')
          console.log('dispatched...')
          setTimeout(() => {
          console.log('dispatched...')
            
          }, 3000);
          // bottomOfWindow=false
           
        }
      }
    }
  },

  getters: {
    getItems (state) {
      return state.items
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
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8877d1eb614b8be7d7f8df5f78c5609d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.pageNo}&vote_average.gte=7.0`)
        .then(response => {
          this.discoverMoviesList = response.data.results
          commit('discover', this.discoverMoviesList)
        })
    },
    searchMovies ({ commit }) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8877d1eb614b8be7d7f8df5f78c5609d&language=en-US&query=${this.state.movieTitleSearch}&page=1&include_adult=true`)
        .then(response => {
          this.searchMovieResults = response.data.results
          commit('search', this.searchMovieResults)
        })

    },
    searchCategories (context, index) {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8877d1eb614b8be7d7f8df5f78c5609d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${index}`)
        .then(response => {
          this.searchMovieResults = response.data.results
          context.commit('search', this.searchMovieResults)
        })

    },
  },
  modules: {
  }
})
