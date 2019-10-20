<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="client_firstname"
        class="form-control-label">firstname</label>
      <input
        id="client_firstname"
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
        for="client_lastname"
        class="form-control-label">lastname</label>
      <input
        id="client_lastname"
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
        for="client_telephone"
        class="form-control-label">telephone</label>
      <input
        id="client_telephone"
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
        for="client_address"
        class="form-control-label">address</label>
      <input
        id="client_address"
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
        for="client_birthdate"
        class="form-control-label">birthdate</label>
      <input
        id="client_birthdate"
        v-model="item.birthdate"
        :class="['form-control', isInvalid('birthdate') ? 'is-invalid' : '']"
        type="dateTime"
        placeholder=""
        @input="handleUpdateField('birthdate', $event.target.value)">
      <div
        v-if="isInvalid('birthdate')"
        class="invalid-feedback">{{ violations.birthdate }}</div>
    </div>
    <div class="form-group">
      <label
        for="client_country"
        class="form-control-label">country</label>
      <input
        id="client_country"
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
        for="client_presentation"
        class="form-control-label">presentation</label>
      <input
        id="client_presentation"
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
        for="client_reservations"
        class="form-control-label">reservations</label>
      <input
        id="client_reservations"
        v-model="item.reservations"
        :class="['form-control', isInvalid('reservations') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('reservations', $event.target.value)">
      <div
        v-if="isInvalid('reservations')"
        class="invalid-feedback">{{ violations.reservations }}</div>
    </div>
    <div class="form-group">
      <label
        for="client_user"
        class="form-control-label">user</label>
      <input
        id="client_user"
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
