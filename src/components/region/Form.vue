<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="region_name"
        class="form-control-label">name</label>
      <input
        id="region_name"
        v-model="item.name"
        :class="['form-control', isInvalid('name') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('name', $event.target.value)">
      <div
        v-if="isInvalid('name')"
        class="invalid-feedback">{{ violations.name }}</div>
    </div>
    <div class="form-group">
      <label
        for="region_presentation"
        class="form-control-label">presentation</label>
      <input
        id="region_presentation"
        v-model="item.presentation"
        :class="['form-control', isInvalid('presentation') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('presentation', $event.target.value)">
      <div
        v-if="isInvalid('presentation')"
        class="invalid-feedback">{{ violations.presentation }}</div>
    </div>
    <div class="form-group">
      <label
        for="region_country"
        class="form-control-label">country</label>
      <input
        id="region_country"
        v-model="item.country"
        :class="['form-control', isInvalid('country') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('country', $event.target.value)">
      <div
        v-if="isInvalid('country')"
        class="invalid-feedback">{{ violations.country }}</div>
    </div>
    <div class="form-group">
      <label
        for="region_rooms"
        class="form-control-label">rooms</label>
      <input
        id="region_rooms"
        v-model="item.rooms"
        :class="['form-control', isInvalid('rooms') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('rooms', $event.target.value)">
      <div
        v-if="isInvalid('rooms')"
        class="invalid-feedback">{{ violations.rooms }}</div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit</button>
    <router-link
      :to="routerTo"
      class="btn btn-default">{{routerText}}
    </router-link>
  </form>
</template>

<script>
export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true
    },

    handleUpdateField: {
      type: Function,
      required: true
    },

    values: {
      type: Object,
      required: true
    },

    errors: {
      type: Object,
      default: () => {}
    },

    initialValues: {
      type: Object,
      default: () => {}
    },

      routerTo: {
          type: Object,
          default: () =>"{ name: 'UserList' }"
      },

      routerText: {
          type: String,
          default: "Back to Index"
      }
  },

  computed: {
    // eslint-disable-next-line
    item () {
      return this.initialValues || this.values
    },

    violations () {
      return this.errors || {}
    }
  },

  methods: {
    isInvalid (key) {
      return Object.keys(this.violations).length > 0 && this.violations[key]
    }
  }
}
</script>
