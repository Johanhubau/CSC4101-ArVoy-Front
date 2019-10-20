<template>
  <div>
    <h1>Show {{ item && item['@id'] }}</h1>

    <div
      v-if="isLoading"
      class="alert alert-info"
      role="status">Loading...</div>
    <div
      v-if="error"
      class="alert alert-danger"
      role="alert">
      <span
        class="fa fa-exclamation-triangle"
        aria-hidden="true" /> {{ error }}
    </div>
    <div
      v-if="deleteError"
      class="alert alert-danger"
      role="alert">
      <span
        class="fa fa-exclamation-triangle"
        aria-hidden="true" /> {{ deleteError }}
    </div>
    <div
      v-if="item"
      class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>firstname</td>
            <td>{{ item['firstname'] }}</td>
          </tr>
          <tr>
            <td>lastname</td>
            <td>{{ item['lastname'] }}</td>
          </tr>
          <tr>
            <td>address</td>
            <td>{{ item['address'] }}</td>
          </tr>
          <tr>
            <td>country</td>
            <td>{{ item['country'] }}</td>
          </tr>
          <tr>
            <td>rooms</td>
            <td>{{ item['rooms'] }}</td>
          </tr>
          <tr>
            <td>telephone</td>
            <td>{{ item['telephone'] }}</td>
          </tr>
          <tr>
            <td>validated</td>
            <td>{{ item['validated'] }}</td>
          </tr>
          <tr>
            <td>user</td>
            <td>{{ item['user'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      v-if="item"
      :to="{ name: 'OwnerList' }"
      class="btn btn-default">Back to list</router-link>
    <button
      class="btn btn-danger"
      @click="deleteItem(item)">Delete</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    deleteError: 'owner/del/error',
    error: 'owner/show/error',
    isLoading: 'owner/show/isLoading',
    item: 'owner/show/retrieved'
  }),

  beforeDestroy () {
    this.reset()
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id))
  },

  methods: {
    ...mapActions({
      del: 'owner/del/del',
      reset: 'owner/show/reset',
      retrieve: 'owner/show/retrieve'
    }),

    deleteItem (item) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        this.del(item).then(() => this.$router.push({ name: 'OwnerList' }))
      }
    }
  }
}
</script>
