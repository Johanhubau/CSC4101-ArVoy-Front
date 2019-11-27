<template>
  <div class="reservation-container py-2">
    <div class="col p-3">
      <transition name="fade" mode="out-in">
        <div v-if="mode === 'reservation'" key="1">
          <h3 class="text-center py-2">Reservation Name</h3>

          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row px-3">
                <p>From: <small>20/12/2012</small></p>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row px-3">
                <p>Until: <small>25/12/2012</small></p>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row px-3">
              <p>Message: <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi leo. Aliquam
                tristique, ligula non euismod semper, sem ex malesuada libero, id ullamcorper ex lacus ac libero. Mauris
                varius convallis lorem, vitae bibendum magna.</small></p>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col p-0">
                  <p>User: <small>Lisa Turner</small></p>
                </div>
                <div class="col p-0 text-right">
                  <button class="btn btn-secondary btn-sm" @click="ToUser">See User</button>
                </div>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col p-0">
                  <p>Room: <small>Some Title</small></p>
                </div>
                <div class="col p-0 text-right">
                  <button class="btn btn-secondary btn-sm" @click="ToRoom">See Room</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="mode === 'user'" key="2">
          <h3 class="text-center py-2">User Name</h3>

          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Presentation: <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi leo.
                Aliquam
                tristique, ligula non euismod semper, sem ex malesuada libero, id ullamcorper ex lacus ac libero. Mauris
                varius convallis lorem, vitae bibendum magna.</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>County: <small>FR</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <button class="btn btn-secondary btn-sm" @click="ToReservation">Back to reservation</button>
            </li>
          </ul>
        </div>
        <div v-if="mode === 'room'" key="3">
          <h3 class="text-center py-2">Room Name</h3>
          <div class="image">

          </div>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Description: <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi leo.
                Aliquam
                tristique, ligula non euismod semper, sem ex malesuada libero, id ullamcorper ex lacus ac libero. Mauris
                varius convallis lorem, vitae bibendum magna.</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Superficy: <small>83m</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Capacity: <small>4 Occupants</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Price: <small>250</small></p>
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
    export default {
        name: "ReservationDisplay",
        data() {
            return {
                mode: "reservation",
            }
        },
        methods: {
            ToRoom() {
                this.mode = 'room';
            },
            ToReservation() {
                this.mode = 'reservation';
            },
            ToUser() {
                this.mode = 'user';
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
