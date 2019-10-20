<template>
  <div>
    <h1>Edit {{ item && item['@id'] }}</h1>

    <div
      v-if="created"
      class="alert alert-success"
      role="status">{{ created['@id'] }} created.</div>
    <div
      v-if="updated"
      class="alert alert-success"
      role="status">{{ updated['@id'] }} updated.</div>
    <div
      v-if="isLoading || deleteLoading"
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

    <RoomForm
      v-if="item"
      :handle-submit="onSendForm"
      :handle-update-field="updateField"
      :values="item"
      :errors="violations"
      :initial-values="retrieved" />

    <router-link
      v-if="item"
      :to="{ name: 'RoomList' }"
      class="btn btn-default">Back to list</router-link>
    <button
      class="btn btn-danger"
      @click="del">Delete</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RoomForm from './Form.vue'

export default {
  components: {
    RoomForm
  },

  data () {
    return {
      item: {}
    }
  },

  computed: {
    ...mapGetters({
      isLoading: 'room/update/isLoading',
      error: 'room/update/error',
      deleteError: 'room/del/error',
      deleteLoading: 'room/del/isLoading',
      created: 'room/create/created',
      deleted: 'room/del/deleted',
      retrieved: 'room/update/retrieved',
      updated: 'room/update/updated',
      violations: 'room/update/violations'
    })
  },

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    deleted: function (deleted) {
      if (!deleted) {
        return
      }

      this.$router.push({ name: 'RoomList' })
    }
  },

  beforeDestroy () {
    this.reset()
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id))
  },

  methods: {
    ...mapActions({
      createReset: 'room/create/reset',
      deleteItem: 'room/del/del',
      delReset: 'room/del/reset',
      retrieve: 'room/update/retrieve',
      updateReset: 'room/update/reset',
      update: 'room/update/update',
      updateRetrieved: 'room/update/updateRetrieved'
    }),

    del () {
      if (window.confirm('Are you sure you want to delete this room ?')) {
        this.deleteItem(this.retrieved)
      }
    },

    reset () {
      this.updateReset()
      this.delReset()
      this.createReset()
    },

    onSendForm () {
      this.update()
    },

    updateField (field, value) {
      this.updateRetrieved({ [field]: value })
    }
  }
}
</script>
