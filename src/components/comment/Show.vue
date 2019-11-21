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
            <td>reservation</td>
            <td>{{ item['reservation'] }}</td>
          </tr>
          <tr>
            <td>comment</td>
            <td>{{ item['comment'] }}</td>
          </tr>
          <tr>
            <td>date</td>
            <td>{{ item['date'] }}</td>
          </tr>
          <tr>
            <td>rating</td>
            <td>{{ item['rating'] }}</td>
          </tr>
          <tr>
            <td>accepted</td>
            <td>{{ item['accepted'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      v-if="item"
      :to="{ name: 'CommentList' }"
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
    deleteError: 'comment/del/error',
    error: 'comment/show/error',
    isLoading: 'comment/show/isLoading',
    item: 'comment/show/retrieved'
  }),

  beforeDestroy () {
    this.reset()
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id))
  },

  methods: {
    ...mapActions({
      del: 'comment/del/del',
      reset: 'comment/show/reset',
      retrieve: 'comment/show/retrieve'
    }),

    deleteItem (item) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        this.del(item).then(() => this.$router.push({ name: 'CommentList' }))
      }
    }
  }
}
</script>
