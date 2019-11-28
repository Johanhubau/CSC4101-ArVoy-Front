<template>
  <div class="container">
    <div class="row align-items-center pt-5">
      <div class="col pt-5">
        <h1 class="text-center">Welcome to your BackOffice</h1>
        <p class="text-center">Here, you'll find everything you need to manage your website!</p>
      </div>
    </div>
    <div>
      <div class="row pt-5">
        <div class="col p-3">
          <div class="card-better p-3 bg-success" @click="GoTo('clients')">
            <div v-if="!isClientLoading">
              <h3>Clients</h3>
              <p class="text-light">Number: {{ clientNb }}</p>
              <p class="text-light">Last Added: {{ clientLast }}</p>
            </div>
            <div v-if="isClientLoading">
              <h3>Loading</h3>
            </div>
          </div>
        </div>
        <div class="col p-3">
          <div class="card-better p-3 bg-info" @click="GoTo('owners')">
            <div v-if="!isOwnerLoading">
              <h3>Owners</h3>
              <p class="text-light">Number: {{ ownerNb }}</p>
              <p class="text-light">Last Added: {{ ownerLast }}</p>
            </div>
            <div v-if="isOwnerLoading">
              <h3>Loading</h3>
            </div>
          </div>
        </div>
        <div class="col p-3">
          <div class="card-better p-3 bg-warning" @click="GoTo('users')">
            <div v-if="!isUserLoading">
              <h3>Users</h3>
              <p class="text-light">Number: {{ userNb }}</p>
              <p class="text-light">Last Added: {{ userLast }}</p>
            </div>
            <div v-if="isUserLoading">
              <h3>Loading</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-3">
          <div class="card-better p-3 bg-warning" @click="GoTo('reservations')">
            <div v-if="!isReservationLoading">
              <h3>Reservations</h3>
              <p class="text-light">Number: {{ reservationNb }}</p>
              <p class="text-light">Last Added: {{ reservationLast }}</p>
            </div>
            <div v-if="isReservationLoading">
              <h3>Loading</h3>
            </div>
          </div>
        </div>
        <div class="col p-3">
          <div class="card-better p-3 bg-danger" @click="GoTo('rooms')">
            <div v-if="!isRoomLoading">
              <h3>Rooms</h3>
              <p class="text-light">Number: {{ roomNb }}</p>
              <p class="text-light">Last Added: {{ roomLast }}</p>
            </div>
            <div v-if="isRoomLoading">
              <h3>Loading</h3>
            </div>
          </div>
        </div>
        <div class="col p-3">
          <div class="card-better p-3 bg-success" @click="GoTo('regions')">
            <div v-if="!isRegionLoading">
              <h3>Regions</h3>
              <p class="text-light">Number: {{ regionNb }}</p>
              <p class="text-light">Last Added: {{ regionLast }}</p>
            </div>
            <div v-if="isRegionLoading">
              <h3>Loading</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "index",

        data() {
            return {
                clientNb: 0,
                ownerNb: 0,
                userNb: 0,
                roomNb: 0,
                regionNb: 0,
                reservationNb: 0,
                clientLast: '',
                ownerLast: '',
                userLast: '',
                roomLast: '',
                regionLast: '',
                reservationLast: '',
                isClientLoading: false,
                isOwnerLoading: false,
                isRoomLoading: false,
                isUserLoading: false,
                isReservationLoading: false,
                isRegionLoading: false,
            }
        },

        computed: mapGetters({
            owners: 'owner/list/items',
            users: 'user/list/items',
            clients: 'client/list/items',
            reservations: 'reservation/list/items',
            rooms: 'room/list/items',
            regions: 'region/list/items',
        }),

        created() {
            let that = this;
            this.isClientLoading = true;
            this.isOwnerLoading = true;
            this.isRoomLoading = true;
            this.isUserLoading = true;
            this.isReservationLoading = true;
            this.isRegionLoading = true;
            this.$store.dispatch('owner/list/default').then(() => {
                that.ownerNb = that.owners.length;
                if (that.ownerNb !== 0) {
                    that.ownerLast = 'api/owners/' + that.owners[that.ownerNb - 1]['id'];
                } else {
                    that.ownerLast = "No owners!"
                }
                that.isClientLoading = false;
            });
            this.$store.dispatch('client/list/default').then(() => {
                that.clientNb = that.clients.length;
                if (that.clientNb !== 0) {
                    that.clientLast = 'api/clients/' + that.clients[that.clientNb - 1]['id'];
                } else {
                    that.clientLast = "No clients!"
                }
                that.isOwnerLoading = false;
            });
            this.$store.dispatch('user/list/default').then(() => {
                that.userNb = that.users.length;
                if (that.userNb !== 0) {
                    that.userLast = 'api/users/' + that.users[that.userNb - 1]['id'];
                } else {
                    that.userLast = "No users!"
                }
                that.isUserLoading = false;
            });
            this.$store.dispatch('region/list/default').then(() => {
                that.regionNb = that.regions.length;
                if (that.regionNb !== 0) {
                    that.regionLast = 'api/regions/' + that.regions[that.regionNb - 1]['id'];
                } else {
                    that.regionLast = "No regions!"
                }
                that.isRegionLoading = false;
            });
            this.$store.dispatch('reservation/list/default').then(() => {
                that.reservationNb = that.reservations.length;
                if (that.reservationNb !== 0) {
                    that.reservationLast = 'api/reservations/' + that.reservations[that.reservationNb - 1]['id'];
                } else {
                    that.reservationLast = "No reservations!"
                }
                that.isReservationLoading = false;
            });
            this.$store.dispatch('room/list/default').then(() => {
                that.roomNb = that.rooms.length;
                if (that.roomNb !== 0) {
                    that.roomLast = 'api/rooms/' + that.rooms[that.roomNb - 1]['id'];
                } else {
                    that.roomLast = "No rooms!"
                }
                that.isRoomLoading = false;
            });


        },

        methods: {
            GoTo(path) {
                this.$router.push('/admin/' + path);
            }
        }
    }
</script>

<style scoped>
  .card-better {
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.3);
  }

  .text-ligth {
    color: white;
  }
</style>
