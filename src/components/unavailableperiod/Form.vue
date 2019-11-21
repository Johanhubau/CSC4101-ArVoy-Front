<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="unavailableperiod_start"
        class="form-control-label">start</label>
      <input
        id="unavailableperiod_start"
        v-model="item.start"
        :class="['form-control', isInvalid('start') ? 'is-invalid' : '']"
        type="dateTime"
        placeholder=""
        @input="handleUpdateField('start', $event.target.value)">
      <div
        v-if="isInvalid('start')"
        class="invalid-feedback">{{ violations.start }}</div>
    </div>
    <div class="form-group">
      <label
        for="unavailableperiod_until"
        class="form-control-label">until</label>
      <input
        id="unavailableperiod_until"
        v-model="item.until"
        :class="['form-control', isInvalid('until') ? 'is-invalid' : '']"
        type="dateTime"
        placeholder=""
        @input="handleUpdateField('until', $event.target.value)">
      <div
        v-if="isInvalid('until')"
        class="invalid-feedback">{{ violations.until }}</div>
    </div>
    <div class="form-group">
      <label
        for="unavailableperiod_room"
        class="form-control-label">room</label>
      <input
        id="unavailableperiod_room"
        v-model="item.room"
        :class="['form-control', isInvalid('room') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('room', $event.target.value)">
      <div
        v-if="isInvalid('room')"
        class="invalid-feedback">{{ violations.room }}</div>
    </div>
    <div class="form-group">
      <label
        for="unavailableperiod_description"
        class="form-control-label">description</label>
      <input
        id="unavailableperiod_description"
        v-model="item.description"
        :class="['form-control', isInvalid('description') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('description', $event.target.value)">
      <div
        v-if="isInvalid('description')"
        class="invalid-feedback">{{ violations.description }}</div>
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
