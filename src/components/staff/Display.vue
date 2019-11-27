<template>
  <div style="margin-right: 400px;">
    <profile-template
      :type="'staff'">
    </profile-template>
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
