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

    <ReservationForm
      v-if="item"
      :handle-submit="onSendForm"
      :handle-update-field="updateField"
      :values="item"
      :errors="violations"
      :initial-values="retrieved"
      :routerTo="{ name: 'ReservationList' }"
      :routerText="'Back to list'" />

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ReservationForm from './Form.vue'

export default {
  components: {
    ReservationForm
  },

  data () {
    return {
      item: {}
    }
  },

  computed: {
    ...mapGetters({
      isLoading: 'reservation/update/isLoading',
      error: 'reservation/update/error',
      deleteError: 'reservation/del/error',
      deleteLoading: 'reservation/del/isLoading',
      created: 'reservation/create/created',
      deleted: 'reservation/del/deleted',
      retrieved: 'reservation/update/retrieved',
      updated: 'reservation/update/updated',
      violations: 'reservation/update/violations'
    })
  },

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    deleted: function (deleted) {
      if (!deleted) {
        return
      }

      this.$router.push({ name: 'ReservationList' })
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
      createReset: 'reservation/create/reset',
      deleteItem: 'reservation/del/del',
      delReset: 'reservation/del/reset',
      retrieve: 'reservation/update/retrieve',
      updateReset: 'reservation/update/reset',
      update: 'reservation/update/update',
      updateRetrieved: 'reservation/update/updateRetrieved'
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
