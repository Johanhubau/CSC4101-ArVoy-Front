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
            <td>client</td>
            <td>{{ item['client'] }}</td>
          </tr>
          <tr>
            <td>occupants</td>
            <td>{{ item['occupants'] }}</td>
          </tr>
          <tr>
            <td>room</td>
            <td>{{ item['room'] }}</td>
          </tr>
          <tr>
            <td>start</td>
            <td>{{ item['start'] }}</td>
          </tr>
          <tr>
            <td>until</td>
            <td>{{ item['until'] }}</td>
          </tr>
          <tr>
            <td>validated</td>
            <td>{{ item['validated'] }}</td>
          </tr>
          <tr>
            <td>message</td>
            <td>{{ item['message'] }}</td>
          </tr>
          <tr>
            <td>comments</td>
            <td>{{ item['comments'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      v-if="item"
      :to="{ name: 'ReservationList' }"
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
    deleteError: 'reservation/del/error',
    error: 'reservation/show/error',
    isLoading: 'reservation/show/isLoading',
    item: 'reservation/show/retrieved'
  }),

  beforeDestroy () {
    this.reset()
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id))
  },

  methods: {
    ...mapActions({
      del: 'reservation/del/del',
      reset: 'reservation/show/reset',
      retrieve: 'reservation/show/retrieve'
    }),

    deleteItem (item) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        this.del(item).then(() => this.$router.push({ name: 'ReservationList' }))
      }
    }
  }
}
</script>
