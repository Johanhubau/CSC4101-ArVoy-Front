<template>
  <div style="margin-right: 400px;">
    <profile-template
      :isPrivate="0"
      :type="'client'">
    </profile-template>
    <div class="modal fade" id="reservationDialog" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <reservation-template></reservation-template>
        </div>
      </div>
    </div>
      <div class="container p-5">
            <h2>Reservations</h2>
            <div v-for="reservation in reservations" class="col-lg px-1 py-2">
              <div class="reservation-container p-3" data-toggle="modal" data-target="#reservationDialog">
                <h5>From {{ reservation.from }} To {{ reservation.until }}</h5>
                <p class="my-1">Client: {{reservation.client}} </p>
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
                section: "listing",
                reservations: [
                    {from: '12/10/16', until: '14/10/16', client: 'John Smith', room: 'Small home in Edimburgh'},
                    {from: '11/11/16', until: '14/11/16', client: 'Johnny Smith', room: 'Small home in Edimburgh'},
                    {from: '12/10/16', until: '14/10/16', client: 'John Smith', room: 'Barcelona'},
                    {from: '12/10/16', until: '14/10/16', client: 'John Smith', room: 'Small home in Edithtown'},
                ],

            }
        },

        methods: {

            ShowReservations(reservationId) {
                this.section = "listing"
            }
        }
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
