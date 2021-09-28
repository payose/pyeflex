<template>
  <div class="home">
    <AppLayout>
      <TrendingMovies
      />

      <DiscoverMovies
      />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from '@/layouts/AppLayout'
import  TrendingMovies from '@/components/TrendingMovies'
import  DiscoverMovies from '@/components/DiscoverMovies'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    AppLayout,
    TrendingMovies,
    DiscoverMovies
  }
}
</script>
