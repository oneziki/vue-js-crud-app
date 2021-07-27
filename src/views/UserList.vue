<template>
  <div class="my-3 p-3 bg-body rounded shadow-sm container px-4 py-4">
    <div class="d-flex justify-content-center my-2" v-if="users.length">
      <button
        class="btn btn-primary me-md-2"
        type="button"
        @click.prevent="pickRandomUser()"
      >
        <i class="fas fa-random"></i>&nbsp;
        <span>Random Pick</span>
      </button>
    </div>

    <h6 class="border-bottom pb-2 mb-0">Users</h6>
    <div class="d-flex text-muted pt-3" v-for="user in users" :key="user.id">
      <svg
        class="bd-placeholder-img flex-shrink-0 me-2 rounded"
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 32x32"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#007bff" />
        <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
      </svg>

      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">{{ user.name }}</strong>
          <router-link :to="{ name: 'EditUser', params: { id: user.id } }"
            ><i class="far fa-user-edit fa-lg text-secondary"></i
          ></router-link>
        </div>
        <span class="d-block">@{{ user.username }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { dataService } from '../shared';

export default {
  async created() {
    const data = await dataService.getUsers();
    this.users = data;
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    pickRandomUser() {
      let user = this.users[Math.floor(Math.random() * this.users.length)];
      this.$router.push({ name: 'EditUser', params: { id: user.id } });
    },
  },
};
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
