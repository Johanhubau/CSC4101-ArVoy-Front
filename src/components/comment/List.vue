<template>
  <div>
    <h1>Comment List</h1>

    <div
      v-if="isLoading"
      class="alert alert-info">Loading...</div>
    <div
      v-if="deletedItem"
      class="alert alert-success">{{ deletedItem['@id'] }} deleted.</div>
    <div
      v-if="error"
      class="alert alert-danger">{{ error }}</div>

    <span v-if="view">
      <button
        :disabled="!view['hydra:previous']"
        type="button"
        class="btn btn-basic btn-sm"
        @click="getPage(view['hydra:first'])">First</button>
      &nbsp;
      <button
        :disabled="!view['hydra:previous']"
        type="button"
        class="btn btn-basic btn-sm"
        @click="getPage(view['hydra:previous'])">Previous</button>
      &nbsp;
      <button
        :disabled="!view['hydra:next']"
        type="button"
        class="btn btn-basic btn-sm"
        @click="getPage(view['hydra:next'])">Next</button>
      &nbsp;
      <button
        :disabled="!view['hydra:last']"
        type="button"
        class="btn btn-basic btn-sm"
        @click="getPage(view['hydra:last'])">Last</button>
      &nbsp;
    </span>

    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>reservation</th>
            <th>comment</th>
            <th>date</th>
            <th>rating</th>
            <th>accepted</th>
            <th colspan="2" />
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item['@id']">
            <td>
              <router-link
                v-if="item"
                :to="{name: 'CommentShow', params: { id: item['@id'] }}">
                {{ item['@id'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'CommentShow', params: { id: item['@id'] }}">
                {{ item['reservation'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'CommentShow', params: { id: item['@id'] }}">
                {{ item['comment'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'CommentShow', params: { id: item['@id'] }}">
                {{ item['date'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'CommentShow', params: { id: item['@id'] }}">
                {{ item['rating'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'CommentShow', params: { id: item['@id'] }}">
                {{ item['accepted'] }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{name: 'CommentShow', params: { id: item['@id'] }}">
                <span
                  class="fa fa-search"
                  aria-hidden="true" />
                <span class="sr-only">Show</span>
              </router-link>
            </td>
            <td>
              <router-link :to="{name: 'CommentUpdate', params: { id: item['@id'] }}">
                <span
                  class="fa fa-pencil"
                  aria-hidden="true" />
                <span class="sr-only">Edit</span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      :to="{ name: 'CommentCreate' }"
      class="btn btn-primary">Create</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    deletedItem: 'comment/del/deleted',
    error: 'comment/list/error',
    items: 'comment/list/items',
    isLoading: 'comment/list/isLoading',
    view: 'comment/list/view'
  }),

  created () {
    this.getPage()
  },

  methods: mapActions({
    getPage: 'comment/list/default'
  })
}
</script>
