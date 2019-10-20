<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="comment_reservation"
        class="form-control-label">reservation</label>
      <input
        id="comment_reservation"
        v-model="item.reservation"
        :class="['form-control', isInvalid('reservation') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('reservation', $event.target.value)">
      <div
        v-if="isInvalid('reservation')"
        class="invalid-feedback">{{ violations.reservation }}</div>
    </div>
    <div class="form-group">
      <label
        for="comment_comment"
        class="form-control-label">comment</label>
      <input
        id="comment_comment"
        v-model="item.comment"
        :class="['form-control', isInvalid('comment') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('comment', $event.target.value)">
      <div
        v-if="isInvalid('comment')"
        class="invalid-feedback">{{ violations.comment }}</div>
    </div>
    <div class="form-group">
      <label
        for="comment_date"
        class="form-control-label">date</label>
      <input
        id="comment_date"
        v-model="item.date"
        :class="['form-control', isInvalid('date') ? 'is-invalid' : '']"
        type="dateTime"
        placeholder=""
        @input="handleUpdateField('date', $event.target.value)">
      <div
        v-if="isInvalid('date')"
        class="invalid-feedback">{{ violations.date }}</div>
    </div>
    <div class="form-group">
      <label
        for="comment_rating"
        class="form-control-label">rating</label>
      <input
        id="comment_rating"
        v-model="item.rating"
        :class="['form-control', isInvalid('rating') ? 'is-invalid' : '']"
        type="number"
        placeholder=""
        @input="handleUpdateField('rating', $event.target.value)">
      <div
        v-if="isInvalid('rating')"
        class="invalid-feedback">{{ violations.rating }}</div>
    </div>
    <div class="form-group">
      <label
        for="comment_accepted"
        class="form-control-label">accepted</label>
      <input
        id="comment_accepted"
        v-model="item.accepted"
        :class="['form-control', isInvalid('accepted') ? 'is-invalid' : '']"
        type="checkbox"
        placeholder=""
        @input="handleUpdateField('accepted', $event.target.value)">
      <div
        v-if="isInvalid('accepted')"
        class="invalid-feedback">{{ violations.accepted }}</div>
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
