<template>
  <div id="sidebar">
    <b-nav vertical pills>
      <b-nav-item v-for="(tabName, index) in tabNames" :key="tabName.id" @click="searchCategories(index)">{{tabName.server}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  computed: {
    ...mapState([
      'tabNames'
    ])
  },

  methods: {
    searchCategories (index) {
      this.$store.dispatch('searchCategories', index)
    }
  }
}
</script>
