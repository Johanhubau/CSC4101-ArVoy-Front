<template>
  <div style="margin-right: 400px;">
    <profile-template
      :isPrivate="1"
      :type="'client'">
    </profile-template>
    <div v-if="reservationLoading" class="w-100">
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar"
             aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
      </div>
    </div>
    <div v-for="(reservation, index) in reservations" class="modal fade" :id="'reservationDialog' + index" tabindex="-1"
         role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <reservation-template :reservation="reservation"></reservation-template>
        </div>
      </div>
    </div>
    <div class="container p-5">
      <h2>Reservations</h2>
      <div v-for="(reservation, index) in reservations" class="col-lg px-1 py-2">
        <div class="reservation-container p-3" data-toggle="modal" :data-target="'#reservationDialog' + index" style="cursor: pointer">
          <h5>From {{ new Date(reservation.start).toLocaleDateString("en-US") }} To {{ new Date(reservation.until).toLocaleDateString("en-US") }}</h5>
          <p class="my-1">Message: {{reservation.message}} </p>
          <p class="my-1">Validated: {{reservation.validated ? "yes" : "no"}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Dashboard",

        data() {
            return {
                reservationLoading: false,
            }
        },

        computed: mapGetters({
            reservationDeletedItem: 'reservation/del/deleted',
            reservationError: 'reservation/list/error',
            reservations: 'reservation/list/items',
            reservationsIsLoading: 'reservation/list/isLoading',
            roomDeletedItem: 'room/del/deleted',
            roomError: 'room/list/error',
            rooms: 'room/list/items',
            roomIsLoading: 'room/list/isLoading',
        }),

        created() {
            this.reservationLoading = true;
            this.$store.dispatch('reservation/list/default').then(() => {
            });
            this.reservationLoading = false;
        },

        methods: {}
    }
</script>

<style scoped>
  .reservation-container {
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
  }

  .modal-content {
    background-color: initial !important;
  }
</style>
