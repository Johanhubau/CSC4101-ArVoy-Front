<template>
  <div class="container pt-5">
  <h1>UnavailablePeriod List</h1>

    <div v-if="isLoading || deleteLoading">
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
             aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
      </div>
    </div>
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
            <th>start</th>
            <th>until</th>
            <th>room</th>
            <th>description</th>
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
                :to="{name: 'UnavailablePeriodShow', params: { id: item['@id'] }}">
                {{ item['@id'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UnavailablePeriodShow', params: { id: item['@id'] }}">
                {{ item['start'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UnavailablePeriodShow', params: { id: item['@id'] }}">
                {{ item['until'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UnavailablePeriodShow', params: { id: item['@id'] }}">
                {{ item['room'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UnavailablePeriodShow', params: { id: item['@id'] }}">
                {{ item['description'] }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{name: 'UnavailablePeriodShow', params: { id: item['@id'] }}">
                <span
                  class="fa fa-search"
                  aria-hidden="true" />
                <span class="sr-only">Show</span>
              </router-link>
            </td>
            <td>
              <router-link :to="{name: 'UnavailablePeriodUpdate', params: { id: item['@id'] }}">
                <span
                  class="fa fa-edit"
                  aria-hidden="true" />
                <span class="sr-only">Edit</span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      :to="{ name: 'UnavailablePeriodCreate' }"
      class="btn btn-primary">Create</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    deletedItem: 'unavailableperiod/del/deleted',
    error: 'unavailableperiod/list/error',
    items: 'unavailableperiod/list/items',
    isLoading: 'unavailableperiod/list/isLoading',
    view: 'unavailableperiod/list/view'
  }),

  created () {
    this.getPage()
  },

  methods: mapActions({
    getPage: 'unavailableperiod/list/default'
  })
}
</script>
