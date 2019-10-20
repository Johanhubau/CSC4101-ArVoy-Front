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

    <UnavailablePeriodForm
      v-if="item"
      :handle-submit="onSendForm"
      :handle-update-field="updateField"
      :values="item"
      :errors="violations"
      :initial-values="retrieved" />

    <router-link
      v-if="item"
      :to="{ name: 'UnavailablePeriodList' }"
      class="btn btn-default">Back to list</router-link>
    <button
      class="btn btn-danger"
      @click="del">Delete</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UnavailablePeriodForm from './Form.vue'

export default {
  components: {
    UnavailablePeriodForm
  },

  data () {
    return {
      item: {}
    }
  },

  computed: {
    ...mapGetters({
      isLoading: 'unavailableperiod/update/isLoading',
      error: 'unavailableperiod/update/error',
      deleteError: 'unavailableperiod/del/error',
      deleteLoading: 'unavailableperiod/del/isLoading',
      created: 'unavailableperiod/create/created',
      deleted: 'unavailableperiod/del/deleted',
      retrieved: 'unavailableperiod/update/retrieved',
      updated: 'unavailableperiod/update/updated',
      violations: 'unavailableperiod/update/violations'
    })
  },

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    deleted: function (deleted) {
      if (!deleted) {
        return
      }

      this.$router.push({ name: 'UnavailablePeriodList' })
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
      createReset: 'unavailableperiod/create/reset',
      deleteItem: 'unavailableperiod/del/del',
      delReset: 'unavailableperiod/del/reset',
      retrieve: 'unavailableperiod/update/retrieve',
      updateReset: 'unavailableperiod/update/reset',
      update: 'unavailableperiod/update/update',
      updateRetrieved: 'unavailableperiod/update/updateRetrieved'
    }),

    del () {
      if (window.confirm('Are you sure you want to delete this unavailableperiod ?')) {
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
