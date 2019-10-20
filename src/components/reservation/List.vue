<template>
  <div>
    <h1>Reservation List</h1>

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
            <th>client</th>
            <th>occupants</th>
            <th>room</th>
            <th>start</th>
            <th>until</th>
            <th>validated</th>
            <th>message</th>
            <th>comments</th>
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
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                {{ item['@id'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                {{ item['client'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                {{ item['occupants'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                {{ item['room'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                {{ item['start'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                {{ item['until'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                {{ item['validated'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                {{ item['message'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                {{ item['comments'] }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{name: 'ReservationShow', params: { id: item['@id'] }}">
                <span
                  class="fa fa-search"
                  aria-hidden="true" />
                <span class="sr-only">Show</span>
              </router-link>
            </td>
            <td>
              <router-link :to="{name: 'ReservationUpdate', params: { id: item['@id'] }}">
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
      :to="{ name: 'ReservationCreate' }"
      class="btn btn-primary">Create</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    deletedItem: 'reservation/del/deleted',
    error: 'reservation/list/error',
    items: 'reservation/list/items',
    isLoading: 'reservation/list/isLoading',
    view: 'reservation/list/view'
  }),

  created () {
    this.getPage()
  },

  methods: mapActions({
    getPage: 'reservation/list/default'
  })
}
</script>
