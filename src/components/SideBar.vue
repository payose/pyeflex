<template>
  <div id="sidebar">
    <b-nav vertical pills>
      <b-nav-item 
      v-for="tabName in tabNames" 
      :key="tabName.id" 
      @click="searchCategories(tabName)"
      >{{tabName.server}}</b-nav-item>
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
    searchCategories (tabName) {
      this.$router.push({ path: `/filter/${tabName.server}` })
      // this.$router.push('/filter/'+this.tabName)
      this.$store.dispatch('searchCategories', tabName.id)
    }
  }
}
</script>
