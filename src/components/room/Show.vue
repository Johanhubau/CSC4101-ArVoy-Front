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
            <td>summary</td>
            <td>{{ item['summary'] }}</td>
          </tr>
          <tr>
            <td>description</td>
            <td>{{ item['description'] }}</td>
          </tr>
          <tr>
            <td>capacity</td>
            <td>{{ item['capacity'] }}</td>
          </tr>
          <tr>
            <td>superficy</td>
            <td>{{ item['superficy'] }}</td>
          </tr>
          <tr>
            <td>price</td>
            <td>{{ item['price'] }}</td>
          </tr>
          <tr>
            <td>address</td>
            <td>{{ item['address'] }}</td>
          </tr>
          <tr>
            <td>owner</td>
            <td>{{ item['owner'] }}</td>
          </tr>
          <tr>
            <td>regions</td>
            <td>{{ item['regions'] }}</td>
          </tr>
          <tr>
            <td>unavailablePeriods</td>
            <td>{{ item['unavailablePeriods'] }}</td>
          </tr>
          <tr>
            <td>reservations</td>
            <td>{{ item['reservations'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      v-if="item"
      :to="{ name: 'RoomList' }"
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
    deleteError: 'room/del/error',
    error: 'room/show/error',
    isLoading: 'room/show/isLoading',
    item: 'room/show/retrieved'
  }),

  beforeDestroy () {
    this.reset()
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id))
  },

  methods: {
    ...mapActions({
      del: 'room/del/del',
      reset: 'room/show/reset',
      retrieve: 'room/show/retrieve'
    }),

    deleteItem (item) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        this.del(item).then(() => this.$router.push({ name: 'RoomList' }))
      }
    }
  }
}
</script>
