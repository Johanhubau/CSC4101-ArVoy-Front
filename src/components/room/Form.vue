<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="room_summary"
        class="form-control-label">summary</label>
      <input
        id="room_summary"
        v-model="item.summary"
        :class="['form-control', isInvalid('summary') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('summary', $event.target.value)">
      <div
        v-if="isInvalid('summary')"
        class="invalid-feedback">{{ violations.summary }}</div>
    </div>
    <div class="form-group">
      <label
        for="room_description"
        class="form-control-label">description</label>
      <input
        id="room_description"
        v-model="item.description"
        :class="['form-control', isInvalid('description') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('description', $event.target.value)">
      <div
        v-if="isInvalid('description')"
        class="invalid-feedback">{{ violations.description }}</div>
    </div>
    <div class="form-group">
      <label
        for="room_capacity"
        class="form-control-label">capacity</label>
      <input
        id="room_capacity"
        v-model="item.capacity"
        :class="['form-control', isInvalid('capacity') ? 'is-invalid' : '']"
        type="number"
        placeholder=""
        @input="handleUpdateField('capacity', $event.target.value)">
      <div
        v-if="isInvalid('capacity')"
        class="invalid-feedback">{{ violations.capacity }}</div>
    </div>
    <div class="form-group">
      <label
        for="room_superficy"
        class="form-control-label">superficy</label>
      <input
        id="room_superficy"
        v-model="item.superficy"
        :class="['form-control', isInvalid('superficy') ? 'is-invalid' : '']"
        type="number"
        placeholder=""
        @input="handleUpdateField('superficy', $event.target.value)">
      <div
        v-if="isInvalid('superficy')"
        class="invalid-feedback">{{ violations.superficy }}</div>
    </div>
    <div class="form-group">
      <label
        for="room_price"
        class="form-control-label">price</label>
      <input
        id="room_price"
        v-model="item.price"
        :class="['form-control', isInvalid('price') ? 'is-invalid' : '']"
        type="number"
        placeholder=""
        @input="handleUpdateField('price', $event.target.value)">
      <div
        v-if="isInvalid('price')"
        class="invalid-feedback">{{ violations.price }}</div>
    </div>
    <div class="form-group">
      <label
        for="room_address"
        class="form-control-label">address</label>
      <input
        id="room_address"
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
        for="room_owner"
        class="form-control-label">owner</label>
      <input
        id="room_owner"
        v-model="item.owner"
        :class="['form-control', isInvalid('owner') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('owner', $event.target.value)">
      <div
        v-if="isInvalid('owner')"
        class="invalid-feedback">{{ violations.owner }}</div>
    </div>
    <div class="form-group">
      <label
        for="room_regions"
        class="form-control-label">regions</label>
      <input
        id="room_regions"
        v-model="item.regions"
        :class="['form-control', isInvalid('regions') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('regions', $event.target.value)">
      <div
        v-if="isInvalid('regions')"
        class="invalid-feedback">{{ violations.regions }}</div>
    </div>
    <div class="form-group">
      <label
        for="room_unavailablePeriods"
        class="form-control-label">unavailablePeriods</label>
      <input
        id="room_unavailablePeriods"
        v-model="item.unavailablePeriods"
        :class="['form-control', isInvalid('unavailablePeriods') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('unavailablePeriods', $event.target.value)">
      <div
        v-if="isInvalid('unavailablePeriods')"
        class="invalid-feedback">{{ violations.unavailablePeriods }}</div>
    </div>
    <div class="form-group">
      <label
        for="room_reservations"
        class="form-control-label">reservations</label>
      <input
        id="room_reservations"
        v-model="item.reservations"
        :class="['form-control', isInvalid('reservations') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('reservations', $event.target.value)">
      <div
        v-if="isInvalid('reservations')"
        class="invalid-feedback">{{ violations.reservations }}</div>
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
