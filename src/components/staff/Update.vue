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

    <StaffForm
      v-if="item"
      :handle-submit="onSendForm"
      :handle-update-field="updateField"
      :values="item"
      :errors="violations"
      :initial-values="retrieved" />

    <router-link
      v-if="item"
      :to="{ name: 'StaffList' }"
      class="btn btn-default">Back to list</router-link>
    <button
      class="btn btn-danger"
      @click="del">Delete</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import StaffForm from './Form.vue'

export default {
  components: {
    StaffForm
  },

  data () {
    return {
      item: {}
    }
  },

  computed: {
    ...mapGetters({
      isLoading: 'staff/update/isLoading',
      error: 'staff/update/error',
      deleteError: 'staff/del/error',
      deleteLoading: 'staff/del/isLoading',
      created: 'staff/create/created',
      deleted: 'staff/del/deleted',
      retrieved: 'staff/update/retrieved',
      updated: 'staff/update/updated',
      violations: 'staff/update/violations'
    })
  },

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    deleted: function (deleted) {
      if (!deleted) {
        return
      }

      this.$router.push({ name: 'StaffList' })
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
      createReset: 'staff/create/reset',
      deleteItem: 'staff/del/del',
      delReset: 'staff/del/reset',
      retrieve: 'staff/update/retrieve',
      updateReset: 'staff/update/reset',
      update: 'staff/update/update',
      updateRetrieved: 'staff/update/updateRetrieved'
    }),

    del () {
      if (window.confirm('Are you sure you want to delete this staff ?')) {
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
