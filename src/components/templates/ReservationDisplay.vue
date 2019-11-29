<template>
  <div class="reservation-container py-2">
    <div class="col p-3">
      <transition name="fade" mode="out-in">
        <div v-if="mode === 'reservation'" key="1">
          <h3 class="text-center py-2">Reservation Name</h3>

          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col p-0">
                  <p>From: <small>{{reservation['start']}}</small></p>
                </div>
                <div class="col p-0">
                  <p>Until: <small>{{reservation['until']}}</small></p>
                </div>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row px-3">
                <p>Message: <small>{{reservation['message']}}</small></p>
              </div>
            </li>
            <li v-if="owner && owner.id !== $store.getters['security/getInformation'].owner_id" class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col p-0">
                  <p>Owner: <small>{{owner['firstname']}} {{owner['lastname']}}</small></p>
                </div>
                <div class="col p-0 text-right">
                  <button class="btn btn-secondary btn-sm" @click="ToOwner">See Owner</button>
                </div>
              </div>
            </li>
            <li v-if="client && owner && owner.id === $store.getters['security/getInformation'].owner_id" class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col p-0">
                  <p>Client: <small>{{client['firstname']}} {{client['lastname']}}</small></p>
                </div>
                <div class="col p-0 text-right">
                  <button class="btn btn-secondary btn-sm" @click="ToClient(client)">See Client</button>
                </div>
              </div>
            </li>
            <li v-if="occupants" v-for="occupant in occupants" class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col p-0">
                  <p>Occupant: <small>{{occupant['firstname']}} {{occupant['lastname']}}</small></p>
                </div>
                <div class="col p-0 text-right">
                  <button class="btn btn-secondary btn-sm" @click="ToClient(occupant)">See Occupant</button>
                </div>
              </div>
            </li>
            <li v-if="room" class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col p-0">
                  <p>Room: <small>{{room['summary']}}</small></p>
                </div>
                <div class="col p-0 text-right">
                  <button class="btn btn-secondary btn-sm" @click="ToRoom">See Room</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="mode === 'client'" key="2">
          <h3 class="text-center py-2">{{currentClient['firstname']}} {{currentClient['lastname']}}</h3>
          <ul class="list-group">
            <li v-if="currentClient.birthdate" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Age: <small>{{currentClient.birthdate}} Years Old</small></p>
            </li>
            <li v-if="owner['address']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Address: <small>{{currentClient['address']}}</small></p>
            </li>
            <li v-if="owner['telephone']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Telephone: <small>{{currentClient['telephone']}}</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <button class="btn btn-secondary btn-sm" @click="ToReservation">Back to reservation</button>
            </li>
          </ul>
        </div>
        <div v-else-if="mode ==='owner'" key="4">
          <h3 class="text-center py-2">{{owner['firstname']}} {{owner['lastname']}}</h3>

          <ul class="list-group">
            <li v-if="owner.birthdate" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Age: <small>{{owner.birthdate}} Years Old</small></p>
            </li>
            <li v-if="owner['address']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Address: <small>{{owner['address']}}</small></p>
            </li>
            <li v-if="owner['telephone']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Telephone: <small>{{owner['telephone']}}</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <button class="btn btn-secondary btn-sm" @click="ToReservation">Back to reservation</button>
            </li>
          </ul>
        </div>
        <div v-if="mode === 'room'" key="3">
          <room-template :room="room" :embedded="true" :action="ToReservation" :actionText="'Back'"></room-template>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "ReservationDisplay",

        props: {
            reservation: {
                type: Object
            }
        },

        data() {
            return {
                mode: "reservation",
                clientUser: null,
                ownerUser: null,
                birthdate: null,
                user: null,
                room: null,
                owner: null,
                client: null,
                occupants: []
            }
        },

        computed: mapGetters({
            deleteError: 'owner/del/error',
            error: 'owner/show/error',
            isLoading: 'owner/show/isLoading',
            retrievedReservation: 'reservation/show/retrieved',
        }),

        created() {
            let that = this;
            if (this.reservation == null) {
                this.id = decodeURIComponent(this.$route.params.id);
                this.$store.dispatch('reservation/show/retrieve', "/api/reservations/" + this.id).then(() => {
                    that.reservation = that.retrievedReservation;
                });
            } else {
                this.$store.dispatch('room/show/retrieve', this.reservation['room']).then((room) => {
                    that.room = room;
                    that.owner = room.owner;

                    if (that.owner["birthdate"]) {
                        let ageDifMs = Date.now() - new Date(that.owner["birthdate"]);
                        let ageDate = new Date(ageDifMs); // miliseconds from epoch
                        that.owner.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970);
                    }
                    that.$store.dispatch('user/show/retrieve', that.owner["user"]).then((user) => {

                    });
                });
                this.$store.dispatch('client/show/retrieve', this.reservation['client']).then((client) => {
                    that.client = client;
                    if (that.isPrivate) {
                        that.$store.dispatch('user/show/retrieve', this.client["user"]);
                    }
                    if (this.client["birthdate"]) {
                        let ageDifMs = Date.now() - new Date(this.client["birthdate"]);
                        let ageDate = new Date(ageDifMs); // miliseconds from epoch
                        that.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970);
                    }
                    that.clientUser = this.user;
                });

                for (var i = 0; i < this.reservation.occupants.length; i++) {
                    this.$store.dispatch('client/show/retrieve', this.reservation.occupants[i]).then((client) => {
                        if (client["birthdate"]) {
                            let ageDifMs = Date.now() - new Date(client["birthdate"]);
                            let ageDate = new Date(ageDifMs); // miliseconds from epoch
                            client.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970);
                        }
                        that.occupants.push(client);
                    });
                }
            }
        },

        methods: {
            ToRoom() {
                this.mode = 'room';
            },
            ToReservation() {
                this.mode = 'reservation';
            },
            ToClient(clientObject) {
                this.mode = 'client';
                this.currentClient = clientObject;
            },
            ToOwner() {
                this.mode = 'owner';

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
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
  }

  .image {
    height: 400px;
    background-color: deeppink;
  }
</style>
