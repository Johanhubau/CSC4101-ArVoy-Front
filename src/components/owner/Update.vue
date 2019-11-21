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

    <OwnerForm
      v-if="item"
      :handle-submit="onSendForm"
      :handle-update-field="updateField"
      :values="item"
      :errors="violations"
      :initial-values="retrieved"
      :routerTo="{ name: 'OwnerList' }"
      :routerText="'Back to list'" />

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import OwnerForm from './Form.vue'

export default {
  components: {
    OwnerForm
  },

  data () {
    return {
      item: {}
    }
  },

  computed: {
    ...mapGetters({
      isLoading: 'owner/update/isLoading',
      error: 'owner/update/error',
      deleteError: 'owner/del/error',
      deleteLoading: 'owner/del/isLoading',
      created: 'owner/create/created',
      deleted: 'owner/del/deleted',
      retrieved: 'owner/update/retrieved',
      updated: 'owner/update/updated',
      violations: 'owner/update/violations'
    })
  },

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    deleted: function (deleted) {
      if (!deleted) {
        return
      }

      this.$router.push({ name: 'OwnerList' })
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
      createReset: 'owner/create/reset',
      deleteItem: 'owner/del/del',
      delReset: 'owner/del/reset',
      retrieve: 'owner/update/retrieve',
      updateReset: 'owner/update/reset',
      update: 'owner/update/update',
      updateRetrieved: 'owner/update/updateRetrieved'
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
