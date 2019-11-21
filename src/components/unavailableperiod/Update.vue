<template>
  <div class="container pt-5">
    <h1>Edit {{ item && item['@id'] }}</h1>

    <div
      v-if="created"
      class="alert alert-success"
      role="status">{{ created['@id'] }} created.</div>
    <div
      v-if="updated"
      class="alert alert-success"
      role="status">{{ updated['@id'] }} updated.</div>
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

    <UnavailablePeriodForm
      v-if="item"
      :handle-submit="onSendForm"
      :handle-update-field="updateField"
      :values="item"
      :errors="violations"
      :initial-values="retrieved"
      :routerTo="{ name: 'UnavailablePeriodList' }"
      :routerText="'Back to list'" />

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
