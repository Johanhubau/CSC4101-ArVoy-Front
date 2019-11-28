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
          <reservation-template :id="reservation['id']"></reservation-template>
        </div>
      </div>
    </div>
    <div class="container p-5">
      <h2>Reservations</h2>
      <div v-for="(reservation, index) in reservations" class="col-lg px-1 py-2">
        <div class="reservation-container p-3" data-toggle="modal" :data-target="'#reservationDialog' + index">
          <h5>From {{ reservation['from'] }} To {{ reservation['until'] }}</h5>
          <p class="my-1">Client: {{}} </p>
          <p class="my-1">Listing: {{reservation.room}}</p>
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
            this.$store.dispatch('reservation/list/default', {owners: "/api/owners/" + this.$route.params.id}).then(() => {
            });
            this.reservationLoading = false;
        },

        methods: {}
    }
</script>

<style scoped>

</style>
