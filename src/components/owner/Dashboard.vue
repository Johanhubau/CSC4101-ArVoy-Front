<template>
  <div style="margin-right: 400px;">
    <profile-template
      :isPrivate="1">
    </profile-template>
    <div v-if="rooms" v-for="(listing, index) in rooms" class="modal fade" :id="'roomDialog' + index" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <room-template
            :name="listing['summary']"
            :description="listing['description']"
            :superficy="listing['superficy']"
            :capacity="listing['capacity']"
            :price="listing['price']"></room-template>
        </div>
      </div>
    </div>
    <div v-if="reservations" v-for="reservation in reservations" class="modal fade" :id="'reservationDialog' + index" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <reservation-template></reservation-template>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div v-if="reservationLoading || roomLoading" class="w-100">
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar"
               aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
        </div>
      </div>
      <div class="row">
        <div class="col px-0">
          <button type="button" class="btn btn-secondary btn-block px-0" @click="ToListings()">Your Listings</button>
        </div>
        <div v-if="isPrivate" class="col px-0">
          <button type="button" class="btn btn-secondary btn-block px-0" @click="ToReservations()">Reservations</button>
        </div>
      </div>
      <div class="container p-5">
        <transition name="fade" mode="out-in">
          <div v-if="section === 'listing'" key="1">
            <h2>Listings</h2>
            <div v-if="rooms" v-for="(listing, index) in rooms" class="col-lg px-1 py-2">
              <div class="reservation-container p-3 row" data-toggle="modal" :data-target="'#roomDialog' + index">
                <div class="p-3">
                  <img src="" alt="Room Image">
                </div>
                <div class="p-3">
                  <h5>{{ listing['summary'] }}</h5>
                  <p class="my-1">{{ listing['description'] }} </p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="section === 'reservation'" key="2">
            <h2>Reservations</h2>
            <div v-if="reservations" v-for="reservation in reservations" class="col-lg px-1 py-2">
              <div class="reservation-container p-3" data-toggle="modal" :data-target="'#reservationDialog' + index">
                <h5>From {{ reservation['from'] }} To {{ reservation['until'] }}</h5>
                <p class="my-1">Client: {{ reservation['client'] }} </p>
                <p class="my-1">Listing: {{reservation ['room'] }}</p>
              </div>
            </div>
          </div>
        </transition>
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
                section: "listing",
                reservationLoading: false,
                roomLoading: false,
                isPrivate: true,
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
            this.roomLoading = true;
            this.$store.dispatch('room/list/default', {owners: "/api/owners/" + this.$route.params.id}).then(() => {});
            this.roomLoading = false;
            if (this.isPrivate) {
                this.reservationLoading = true;
                this.$store.dispatch('reservation/list/default', {owners: "/api/owners/" + this.$route.params.id}).then(() => {});
                this.reservationLoading = false;
            }

        },

        methods: {
            ...mapActions({
                del: 'owner/del/del',
                reset: 'owner/show/reset',
                retrieve: 'owner/show/retrieve'
            }),

            ToListings() {
                this.section = "listing"
            },
            ToReservations() {
                this.section = "reservation"
            },
            ShowReservations(reservationId) {
                this.section = "listing"
            }
        }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

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
