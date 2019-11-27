<template>
  <div style="margin-right: 400px;">
    <profile-template
      :isPrivate="1">
    </profile-template>
    <div class="modal fade" id="roomDialog" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <room-template></room-template>
        </div>
      </div>
    </div>
    <div class="modal fade" id="reservationDialog" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <reservation-template></reservation-template>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col px-0">
          <button type="button" class="btn btn-secondary btn-block px-0" @click="ToListings()">Your Listings</button>
        </div>
        <div class="col px-0">
          <button type="button" class="btn btn-secondary btn-block px-0" @click="ToReservations()">Reservations</button>
        </div>
      </div>
      <div class="container p-5">
        <transition name="fade" mode="out-in">
          <div v-if="section === 'listing'" key="1">
            <h2>Listings</h2>
            <div v-for="listing in listings" class="col-lg px-1 py-2">
              <div class="reservation-container p-3 row" data-toggle="modal" data-target="#roomDialog">
                <div class="p-3">
                  <img src="" alt="Room Image">
                </div>
                <div class="p-3">
                  <h5>{{ listing.name }}</h5>
                  <p class="my-1">{{listing.description}} </p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="section === 'reservation'" key="2">
            <h2>Reservations</h2>
            <div v-for="reservation in reservations" class="col-lg px-1 py-2">
              <div class="reservation-container p-3" data-toggle="modal" data-target="#reservationDialog">
                <h5>From {{ reservation.from }} To {{ reservation.until }}</h5>
                <p class="my-1">Client: {{reservation.client}} </p>
                <p class="my-1">Listing: {{reservation.room}}</p>
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
                reservations: [
                    {from: '12/10/16', until: '14/10/16', client: 'John Smith', room: 'Small home in Edimburgh'},
                    {from: '11/11/16', until: '14/11/16', client: 'Johnny Smith', room: 'Small home in Edimburgh'},
                    {from: '12/10/16', until: '14/10/16', client: 'John Smith', room: 'Barcelona'},
                    {from: '12/10/16', until: '14/10/16', client: 'John Smith', room: 'Small home in Edithtown'},
                ],
                listings: [
                    {name: 'Small home in Edimburgh', description: "It's a lovely home motherfucker"},
                    {name: 'Barcelona', description: "Artists are welcome"},
                    {name: 'Shithole in Paris', description: "I'm not kidding it's really a shithole"},
                ],
            }
        },

        methods: {

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
