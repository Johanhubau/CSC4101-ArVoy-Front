<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="reservation_client"
        class="form-control-label">client</label>
      <input
        id="reservation_client"
        v-model="item.client"
        :class="['form-control', isInvalid('client') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('client', $event.target.value)">
      <div
        v-if="isInvalid('client')"
        class="invalid-feedback">{{ violations.client }}</div>
    </div>
    <div class="form-group">
      <label
        for="reservation_occupants"
        class="form-control-label">occupants</label>
      <input
        id="reservation_occupants"
        v-model="item.occupants"
        :class="['form-control', isInvalid('occupants') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('occupants', $event.target.value)">
      <div
        v-if="isInvalid('occupants')"
        class="invalid-feedback">{{ violations.occupants }}</div>
    </div>
    <div class="form-group">
      <label
        for="reservation_room"
        class="form-control-label">room</label>
      <input
        id="reservation_room"
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
        for="reservation_start"
        class="form-control-label">start</label>
      <input
        id="reservation_start"
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
        for="reservation_until"
        class="form-control-label">until</label>
      <input
        id="reservation_until"
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
        for="reservation_validated"
        class="form-control-label">validated</label>
      <input
        id="reservation_validated"
        v-model="item.validated"
        :class="['form-control', isInvalid('validated') ? 'is-invalid' : '']"
        type="checkbox"
        placeholder=""
        @input="handleUpdateField('validated', $event.target.value)">
      <div
        v-if="isInvalid('validated')"
        class="invalid-feedback">{{ violations.validated }}</div>
    </div>
    <div class="form-group">
      <label
        for="reservation_message"
        class="form-control-label">message</label>
      <input
        id="reservation_message"
        v-model="item.message"
        :class="['form-control', isInvalid('message') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('message', $event.target.value)">
      <div
        v-if="isInvalid('message')"
        class="invalid-feedback">{{ violations.message }}</div>
    </div>
    <div class="form-group">
      <label
        for="reservation_comments"
        class="form-control-label">comments</label>
      <input
        id="reservation_comments"
        v-model="item.comments"
        :class="['form-control', isInvalid('comments') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('comments', $event.target.value)">
      <div
        v-if="isInvalid('comments')"
        class="invalid-feedback">{{ violations.comments }}</div>
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
