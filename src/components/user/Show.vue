<template>
  <div class="container pt-5">
    <h1>Show {{ item && item['@id'] }}</h1>

    <div v-if="isLoading || deleteLoading">
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
             aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
      </div>
    </div>
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
            <td>email</td>
            <td>{{ item['email'] }}</td>
          </tr>
          <tr>
            <td>username</td>
            <td>{{ item['username'] }}</td>
          </tr>
          <tr>
            <td>roles</td>
            <td>{{ item['roles'] }}</td>
          </tr>
          <tr>
            <td>password</td>
            <td>{{ item['password'] }}</td>
          </tr>
          <tr>
            <td>salt</td>
            <td>{{ item['salt'] }}</td>
          </tr>
          <tr>
            <td>emailVerified</td>
            <td>{{ item['emailVerified'] }}</td>
          </tr>
          <tr>
            <td>owner</td>
            <td>{{ item['owner'] }}</td>
          </tr>
          <tr>
            <td>staff</td>
            <td>{{ item['staff'] }}</td>
          </tr>
          <tr>
            <td>client</td>
            <td>{{ item['client'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      v-if="item"
      :to="{ name: 'UserList' }"
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
    deleteError: 'user/del/error',
    error: 'user/show/error',
    isLoading: 'user/show/isLoading',
    item: 'user/show/retrieved'
  }),

  beforeDestroy () {
    this.reset()
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id))
  },

  methods: {
    ...mapActions({
      del: 'user/del/del',
      reset: 'user/show/reset',
      retrieve: 'user/show/retrieve'
    }),

    deleteItem (item) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        this.del(item).then(() => this.$router.push({ name: 'UserList' }))
      }
    }
  }
}
</script>
