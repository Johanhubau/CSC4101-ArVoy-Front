<template>
  <div class="container pt-5">
  <h1>User List</h1>

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
            <th>email</th>
            <th>username</th>
            <th>roles</th>
            <th>password</th>
            <th>salt</th>
            <th>emailVerified</th>
            <th>owner</th>
            <th>staff</th>
            <th>client</th>
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
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['@id'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['email'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['username'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['roles'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['password'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['salt'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['emailVerified'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['owner'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['staff'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                {{ item['client'] }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{name: 'UserShow', params: { id: item['@id'] }}">
                <span
                  class="fa fa-search"
                  aria-hidden="true" />
                <span class="sr-only">Show</span>
              </router-link>
            </td>
            <td>
              <router-link :to="{name: 'UserUpdate', params: { id: item['@id'] }}">
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
      :to="{ name: 'UserCreate' }"
      class="btn btn-primary">Create</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    deletedItem: 'user/del/deleted',
    error: 'user/list/error',
    items: 'user/list/items',
    isLoading: 'user/list/isLoading',
    view: 'user/list/view'
  }),

  created () {
    this.getPage()
  },

  methods: mapActions({
    getPage: 'user/list/default'
  })
}
</script>
