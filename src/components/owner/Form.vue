<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="owner_firstname"
        class="form-control-label">firstname</label>
      <input
        id="owner_firstname"
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
        for="owner_lastname"
        class="form-control-label">lastname</label>
      <input
        id="owner_lastname"
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
        for="owner_address"
        class="form-control-label">address</label>
      <input
        id="owner_address"
        v-model="item.address"
        :class="['form-control', isInvalid('address') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('address', $event.target.value)">
      <div
        v-if="isInvalid('address')"
        class="invalid-feedback">{{ violations.address }}</div>
    </div>
    <div class="form-group">
      <label
        for="owner_country"
        class="form-control-label">country</label>
      <input
        id="owner_country"
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
        for="owner_rooms"
        class="form-control-label">rooms</label>
      <input
        id="owner_rooms"
        v-model="item.rooms"
        :class="['form-control', isInvalid('rooms') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('rooms', $event.target.value)">
      <div
        v-if="isInvalid('rooms')"
        class="invalid-feedback">{{ violations.rooms }}</div>
    </div>
    <div class="form-group">
      <label
        for="owner_telephone"
        class="form-control-label">telephone</label>
      <input
        id="owner_telephone"
        v-model="item.telephone"
        :class="['form-control', isInvalid('telephone') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('telephone', $event.target.value)">
      <div
        v-if="isInvalid('telephone')"
        class="invalid-feedback">{{ violations.telephone }}</div>
    </div>
    <div class="form-group">
      <label
        for="owner_validated"
        class="form-control-label">validated</label>
      <input
        id="owner_validated"
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
        for="owner_user"
        class="form-control-label">user</label>
      <input
        id="owner_user"
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
