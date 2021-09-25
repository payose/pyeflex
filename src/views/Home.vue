<template>
  <div class="home">
    <!-- <Header/> -->
    <TrendingMovies
    />

    <DiscoverMovies
    />

  </div>
</template>

<script>
import  TrendingMovies from '@/components/TrendingMovies'
import  DiscoverMovies from '@/components/DiscoverMovies'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    TrendingMovies,
    DiscoverMovies
  }
}
</script>
