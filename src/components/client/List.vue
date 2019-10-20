<template>
  <div>
    <h1>Client List</h1>

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
            <th>firstname</th>
            <th>lastname</th>
            <th>telephone</th>
            <th>address</th>
            <th>birthdate</th>
            <th>country</th>
            <th>presentation</th>
            <th>reservations</th>
            <th>user</th>
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
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['@id'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['firstname'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['lastname'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['telephone'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['address'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['birthdate'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['country'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['presentation'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['reservations'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                {{ item['user'] }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{name: 'ClientShow', params: { id: item['@id'] }}">
                <span
                  class="fa fa-search"
                  aria-hidden="true" />
                <span class="sr-only">Show</span>
              </router-link>
            </td>
            <td>
              <router-link :to="{name: 'ClientUpdate', params: { id: item['@id'] }}">
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
      :to="{ name: 'ClientCreate' }"
      class="btn btn-primary">Create</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    deletedItem: 'client/del/deleted',
    error: 'client/list/error',
    items: 'client/list/items',
    isLoading: 'client/list/isLoading',
    view: 'client/list/view'
  }),

  created () {
    this.getPage()
  },

  methods: mapActions({
    getPage: 'client/list/default'
  })
}
</script>
