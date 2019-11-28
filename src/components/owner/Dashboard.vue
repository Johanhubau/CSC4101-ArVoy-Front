<template>
  <div style="margin-right: 400px;">
    <profile-template
      :isPrivate="isPrivate">
    </profile-template>
    <div v-if="rooms" v-for="(room, index) in rooms" class="modal fade" :id="'roomDialog' + index" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <room-template :room="room"></room-template>
        </div>
      </div>
    </div>
    <div v-if="reservations" v-for="(reservation, index) in reservations" class="modal fade" :id="'reservationDialog' + index" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <reservation-template :reservation="reservation"></reservation-template>
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
            <div v-if="rooms" v-for="(room, index) in rooms" class="col-lg px-1 py-2">
              <div class="reservation-container p-3 row" style="cursor: pointer"
                   data-toggle="modal" :data-target="'#roomDialog' + index">
                <div class="p-3" style="width: 20%; display: inline-block"
                     :style="'background-image: url(' + (room.image.path.indexOf('http') === -1 ? '/document/' : '') + room.image.path + ')'"></div>
                <div class="p-3" style="width: 80%; display: inline-block" >
                  <h5>{{ room['summary'] }}</h5>
                  <p class="my-1">{{ room['description'] }} </p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="section === 'reservation'" key="2">
            <h2>Reservations</h2>
            <div v-if="reservations" v-for="(reservation, index) in reservations" class="col-lg px-1 py-2">
              <div class="reservation-container p-3" style="cursor: pointer"
                   data-toggle="modal" :data-target="'#reservationDialog' + index">
                <h5>From {{ reservation['from'] }} To {{ reservation['until'] }}</h5>
                <div class="form-group">
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="validated" @click="validate(reservation)" v-model="reservation['validated']" checked="">
                    <label class="custom-control-label" for="validated">Validate</label>
                  </div>
                </div>
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
                reservations: []
            }
        },

        computed: mapGetters({
            reservationDeletedItem: 'reservation/del/deleted',
            reservationError: 'reservation/list/error',
            reservationsIsLoading: 'reservation/list/isLoading',
            roomDeletedItem: 'room/del/deleted',
            roomError: 'room/list/error',
            rooms: 'room/list/items',
            roomIsLoading: 'room/list/isLoading',
        }),

        created() {
            this.roomLoading = true;
            this.$store.dispatch('room/list/default', {owner: "/api/owners/" + this.$route.params.id}).then(() => {
                for (var i = 0; i < this.rooms.length; i++) {
                  let room = this.rooms[i];
                  this.$store.dispatch('room/show/retrieve', "/api/rooms/" + room.id).then((room) => {
                      for (var j = 0; j < room.reservations.length; j++) {
                          let reservation = room.reservations[j];
                          this.$store.dispatch('reservation/show/retrieve', reservation).then((data) => {
                              this.reservations.push(data);
                          });
                      }
                  });
                }
            });
            this.roomLoading = false;
            if (this.isPrivate) {
                this.reservationLoading = true;

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
            validate(reservation) {
                //TODO validate the reservation
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
