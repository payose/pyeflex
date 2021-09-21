<template>
  <nav id="header" class="navbar pb-md-4 px-md-3 pt-sm-1">
    <div class="container-fluid align-items-end">
      <a class="navbar-brand" href="#"><img src="./../assets/pyeflex.png" alt=""></a>

      <form action="" class="d-none d-md-block">
        <input type="text" placeholder="Quick Search...">
        <button type="submit"><b-icon icon='search' class="icon"></b-icon></button>
      </form>

      <div class="d-sm-block d-md-none toggle-icon d-flex flex-wrap">
        <button v-b-toggle.collapse-1><b-icon icon='search' class="icon"  font-scale="1.5"></b-icon></button>
      </div>

      <b-collapse id="collapse-1" class="mt-2">
          <!-- <b-card> -->
            <form action="">
              <input type="text" placeholder="">
              <button type="submit" class="d-none"><b-icon icon='search' class="icon "></b-icon></button>
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
