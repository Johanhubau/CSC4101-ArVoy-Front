<template>
  <div class="container pt-5">
    <h1>New Region</h1>

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

    <RegionForm
      :handle-submit="onSendForm"
      :handle-update-field="updateField"
      :values="item"
      :errors="violations"
      :routerTo="{ name: 'RegionList' }"
      :routerText="'Back to list'" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import RegionForm from './Form'

const { mapGetters, mapActions } = createNamespacedHelpers('region/create')

export default {
  components: {
    RegionForm
  },

  data () {
    return {
      item: {}
    }
  },

  computed: mapGetters([
    'error',
    'isLoading',
    'created',
    'violations'
  ]),

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    created: function (created) {
      if (!created) {
        return
      }

      this.$router.push({ name: 'RegionUpdate', params: { id: created['@id'] } })
    }
  },

  methods: {
    ...mapActions([
      'create'
    ]),

    onSendForm () {
      this.create(this.item)
    },

    updateField (field, value) {
      Object.assign(this.item, { [field]: value })
    }
  }
}
</script>
