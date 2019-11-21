<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="staff_firstname"
        class="form-control-label">firstname</label>
      <input
        id="staff_firstname"
        v-model="item.firstname"
        :class="['form-control', isInvalid('firstname') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('firstname', $event.target.value)">
      <div
        v-if="isInvalid('firstname')"
        class="invalid-feedback">{{ violations.firstname }}</div>
    </div>
    <div class="form-group">
      <label
        for="staff_lastname"
        class="form-control-label">lastname</label>
      <input
        id="staff_lastname"
        v-model="item.lastname"
        :class="['form-control', isInvalid('lastname') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('lastname', $event.target.value)">
      <div
        v-if="isInvalid('lastname')"
        class="invalid-feedback">{{ violations.lastname }}</div>
    </div>
    <div class="form-group">
      <label
        for="staff_title"
        class="form-control-label">title</label>
      <input
        id="staff_title"
        v-model="item.title"
        :class="['form-control', isInvalid('title') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('title', $event.target.value)">
      <div
        v-if="isInvalid('title')"
        class="invalid-feedback">{{ violations.title }}</div>
    </div>
    <div class="form-group">
      <label
        for="staff_user"
        class="form-control-label">user</label>
      <input
        id="staff_user"
        v-model="item.user"
        :class="['form-control', isInvalid('user') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('user', $event.target.value)">
      <div
        v-if="isInvalid('user')"
        class="invalid-feedback">{{ violations.user }}</div>
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
