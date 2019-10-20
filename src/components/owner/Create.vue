<template>
  <div>
    <h1>New Owner</h1>

    <div
      v-if="isLoading"
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

    <OwnerForm
      :handle-submit="onSendForm"
      :handle-update-field="updateField"
      :values="item"
      :errors="violations" />

    <router-link
      :to="{ name: 'OwnerList' }"
      class="btn btn-default">Back to list</router-link>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import OwnerForm from './Form'

const { mapGetters, mapActions } = createNamespacedHelpers('owner/create')

export default {
  components: {
    OwnerForm
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

      this.$router.push({ name: 'OwnerUpdate', params: { id: created['@id'] } })
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
