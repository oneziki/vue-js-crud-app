<template>
  <div class="d-flex flex-column flex-shrink-0 bg-light">
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <router-link
          class="nav-link py-3 border-bottom"
          id="homeLink"
          :to="{ name: 'Users' }"
          ><i class="fa fa-home fa-2x" role="img" aria-label="Home"></i
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
#homeLink:not(.router-link-exact-active) {
  color: red;
}
#homeLink:not(.router-link-exact-active):hover {
  color: rgba(255, 0, 0, 0.7);
}
</style>
