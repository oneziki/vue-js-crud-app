<template>
  <div id="app">
    <SideBar />
    <h1 class="dispay-3 text-center my-3 text-uppercase">
      User Explorer
    </h1>
    <router-view />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
export default {
  name: 'App',
  components: { SideBar },
};
</script>

<style>
#app {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}

a.router-link-exact-active:hover {
  color: #3f8062;
}
</style>
