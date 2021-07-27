<template>
  <section class="container px-4 py-5" v-if="Object.keys(user).length">
    <h1 class="pb-2 mb-3 display-6 lh-1 fw-bold border-bottom">Edit User</h1>
    <form class="row g-2">
      <div class="col-12">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="id"
            placeholder="ID"
            aria-label="ID"
            v-model="user.id"
            readonly
          />
          <label for="id">ID</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
            aria-label="Name"
            v-model="user.name"
          />
          <label for="name">Name</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
            aria-label="Username"
            v-model="user.username"
          />
          <label for="username">Username</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email address"
            aria-label="Email address"
            v-model="user.email"
          />
          <label for="email">Email address</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Phone"
            aria-label="Phone"
            v-model="user.phone"
          />
          <label for="phone">Phone</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="website"
            placeholder="Website"
            aria-label="Website"
            v-model="user.website"
          />
          <label for="website">Website</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="company"
            placeholder="Company"
            aria-label="Company"
            v-model="user.company.name"
          />
          <label for="company">Company</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="street"
            placeholder="Address"
            aria-label="Street address"
            v-model="user.address.street"
          />
          <label for="street">Address</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="suite"
            placeholder="Address 2"
            aria-label="Suite"
            v-model="user.address.suite"
          />
          <label for="suite">Address 2</label>
        </div>
      </div>
      <div class="col-md-10">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="city"
            placeholder="City"
            aria-label="City"
            v-model="user.address.city"
          />
          <label for="city">City</label>
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="zip"
            placeholder="Zip"
            aria-label="Zip"
            v-model="user.address.zipcode"
          />
          <label for="zip">Zip</label>
        </div>
      </div>
      <div class="buttons-panel py-3">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            class="btn btn-danger me-md-2"
            type="button"
            @click.prevent="cancelUserChanges()"
          >
            <i class="fas fa-undo"></i>
            <span>Cancel</span>
          </button>
          <button
            class="btn btn-primary btn-lg"
            type="button"
            @click.prevent="saveUser()"
          >
            <i class="fas fa-save"></i>
            <span>Save</span>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { dataService } from '../shared';

export default {
  name: 'User',
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      user: {},
    };
  },
  async created() {
    this.user = await dataService.getUser(this.id);
  },
  methods: {
    cancelUserChanges() {
      this.$router.push({ name: 'Users' });
    },
    async saveUser() {
      await dataService.updateUser(this.user);
      this.$router.push({ name: 'Users' });
    },
  },
};
</script>

<style>
.buttons-panel i.fas {
  margin-right: 10px;
}
</style>
