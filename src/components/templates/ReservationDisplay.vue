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
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col p-0">
                  <p>Owner: <small>{{owner['firstname']}} {{owner['lastname']}}</small></p>
                </div>
                <div class="col p-0 text-right">
                  <button class="btn btn-secondary btn-sm" @click="ToOwner">See Owner</button>
                </div>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col p-0">
                  <p>Client: <small>{{client['firstname']}} {{client['lastname']}}</small></p>
                </div>
                <div class="col p-0 text-right">
                  <button class="btn btn-secondary btn-sm" @click="ToClient">See Client</button>
                </div>
              </div>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center">
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
          <h3 class="text-center py-2">{{client['firstname']}} {{client['lastname']}}</h3>
          <ul class="list-group">
            <li v-if="this.birthdate" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Age: <small>{{this.birthdate}} Years Old</small></p>
            </li>
            <li v-if="clientUser['email']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Email: <small>{{clientUser['email']}}</small></p>
            </li>
            <li v-if="client['telephone']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Telephone: <small>{{client['telephone']}}</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <button class="btn btn-secondary btn-sm" @click="ToReservation">Back to reservation</button>
            </li>
          </ul>
        </div>
        <div v-if="mode === 'room'" key="3">
          <h3 class="text-center py-2">{{room['summary']}}</h3>
          <div class="image">

          </div>
          <ul class="list-group">
            <li v-if="room['description']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Description: <small>{{room['description']}}</small></p>
            </li>
            <li v-if="room['superficy']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Superficy: <small>{{room['superficy']}}m</small></p>
            </li>
            <li v-if="room['capacity']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Capacity: <small>{{room['capacity']}} Occupants</small></p>
            </li>
            <li v-if="room['price']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Price: <small>{{room['price']}}</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <button class="btn btn-secondary btn-sm" @click="ToReservation">Back to reservation</button>
            </li>
          </ul>
        </div>
        <div v-if="mode ==='owner'" key="4">
          <h3 class="text-center py-2">{{owner['firstname']}} {{owner['lastname']}}</h3>

          <ul class="list-group">
            <li v-if="clientUser['email']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Email: <small>{{clientUser['email']}}</small></p>
            </li>
            <li v-if="client['telephone']" class="list-group-item d-flex justify-content-between align-items-center">
              <p>Telephone: <small>{{client['telephone']}}</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <button class="btn btn-secondary btn-sm" @click="ToReservation">Back to reservation</button>
            </li>
          </ul>
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
            id: {
                type: Number
            }
        },

        data() {
            return {
                mode: "reservation",
                clientUser: null,
                ownerUser: null,
                birthdate: null,
            }
        },

        computed: mapGetters({
            deleteError: 'owner/del/error',
            error: 'owner/show/error',
            isLoading: 'owner/show/isLoading',
            owner: 'owner/show/retrieved',
            user: 'user/show/retrieved',
            client: 'client/show/retrieved',
            reservation: 'reservation/show/retrieved',
            room: 'room/show/retrieved'
        }),

        created() {
            let that = this;
            this.$store.dispatch('reservation/show/retrieve', "/api/reservations/" + this.id).then(() => {
                that.$store.dispatch('room/show/retrieve', reservation['room']).then(() => {
                    that.$store.dispatch('owner/show/retrieve', room['owner']).then(() => {
                        that.$store.dispatch('user/show/retrieve', that.owner["user"]).then(() => {
                            that.ownerUser = this.user;
                            that.$store.dispatch('client/show/retrieve', reservation['client'][0]).then(() => {
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
                        });
                    });
                });
            });


        },

        methods: {
            ToRoom() {
                this.mode = 'room';
            },
            ToReservation() {
                this.mode = 'reservation';
            },
            ToClient() {
                this.mode = 'client';
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
