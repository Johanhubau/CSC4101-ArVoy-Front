<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="user_email"
        class="form-control-label">email</label>
      <input
        id="user_email"
        v-model="item.email"
        :class="['form-control', isInvalid('email') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('email', $event.target.value)">
      <div
        v-if="isInvalid('email')"
        class="invalid-feedback">{{ violations.email }}
      </div>
    </div>
    <div class="form-group">
      <label
        for="user_roles"
        class="form-control-label">roles</label>
      <input
        id="user_roles"
        v-model="item.roles"
        :class="['form-control', isInvalid('roles') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('roles', $event.target.value)">
      <div
        v-if="isInvalid('roles')"
        class="invalid-feedback">{{ violations.roles }}
      </div>
    </div>
    <div class="form-group">
      <label
        for="user_password"
        class="form-control-label">password</label>
      <input
        id="user_password"
        v-model="item.password"
        :class="['form-control', isInvalid('password') ? 'is-invalid' : '']"
        type="text"
        placeholder="The hashed password"
        @input="handleUpdateField('password', $event.target.value)">
      <div
        v-if="isInvalid('password')"
        class="invalid-feedback">{{ violations.password }}
      </div>
    </div>
    <div class="form-group">
      <label
        for="user_emailVerified"
        class="form-control-label">emailVerified</label>
      <input
        id="user_emailVerified"
        v-model="item.emailVerified"
        :class="['form-control', isInvalid('emailVerified') ? 'is-invalid' : '']"
        type="dateTime"
        placeholder=""
        @input="handleUpdateField('emailVerified', $event.target.value)">
      <div
        v-if="isInvalid('emailVerified')"
        class="invalid-feedback">{{ violations.emailVerified }}
      </div>
    </div>
    <div class="form-group">
      <label
        for="user_owner"
        class="form-control-label">owner</label>
      <input
        id="user_owner"
        v-model="item.owner"
        :class="['form-control', isInvalid('owner') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('owner', $event.target.value)">
      <div
        v-if="isInvalid('owner')"
        class="invalid-feedback">{{ violations.owner }}
      </div>
    </div>
    <div class="form-group">
      <label
        for="user_staff"
        class="form-control-label">staff</label>
      <input
        id="user_staff"
        v-model="item.staff"
        :class="['form-control', isInvalid('staff') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('staff', $event.target.value)">
      <div
        v-if="isInvalid('staff')"
        class="invalid-feedback">{{ violations.staff }}
      </div>
    </div>
    <div class="form-group">
      <label
        for="user_client"
        class="form-control-label">client</label>
      <input
        id="user_client"
        v-model="item.client"
        :class="['form-control', isInvalid('client') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('client', $event.target.value)">
      <div
        v-if="isInvalid('client')"
        class="invalid-feedback">{{ violations.client }}
      </div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit
    </button>
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
                default: () => {
                }
            },

            initialValues: {
                type: Object,
                default: () => {
                }
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
            item() {
                return this.initialValues || this.values
            },

            violations() {
                return this.errors || {}
            }
        },

        methods: {
            isInvalid(key) {
                return Object.keys(this.violations).length > 0 && this.violations[key]
            }
        }
    }
</script>
