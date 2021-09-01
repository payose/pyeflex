<template>
  <nav id="header" class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./../assets/pyeflex.png" alt=""></a>

      <form action="" class="d-none d-md-block">
        <input type="text" placeholder="Quick Search...">
        <button type="submit"><b-icon icon='search' class="icon"></b-icon></button>
      </form>

      <div class="d-sm-block d-md-none toggle-icon d-flex flex-wrap">
        <button v-b-toggle.collapse-1><b-icon icon='search' class="icon"></b-icon></button>
      </div>
      
      <b-collapse id="collapse-1" class="mt-2">
          <!-- <b-card> -->
            <form action="">
              <input type="text" placeholder="">
              <button type="submit" class="d-none"><b-icon icon='search' class="icon"></b-icon></button>
            </form>
          <!-- </b-card> -->
        </b-collapse>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
