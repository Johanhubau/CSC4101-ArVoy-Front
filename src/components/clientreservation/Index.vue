<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col px-0">
        <button type="button" class="btn btn-secondary btn-block px-0" @click="ToRegion()">Choose a Region</button>
      </div>
      <div class="col px-0">
        <button type="button" class="btn btn-secondary btn-block px-0" :class="{ disabled: currentStep < 2 }"
                :disabled="currentStep < 2" @click="ToRoom()">Choose a Room
        </button>
      </div>
      <div class="col px-0">
        <button type="button" class="btn btn-secondary btn-block px-0" :class="{ disabled: currentStep < 3 }"
                :disabled="currentStep < 3" @click="ToInfo()">Tell us about you
        </button>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row pb-5">
        <div v-if="regionLoading || roomLoading" class="w-100">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar"
                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <transition name="fade" mode="out-in">
          <div v-if="currentStep === 1" class="w-100" key="1">
            <h3>
              Ready? Let's start by choosing a region.
            </h3>
            <div class="row" v-for='(gregions, gIndex) in groupedRegions'>
              <div v-for="region in gregions" class="col-lg px-1">
                <div class="card mb-3">
                  <h3 class="card-header">{{region.name}}</h3>
                  <img style="height: 200px; width: 100%; display: block;" v-if="region.image != null && region.image.path.indexOf('http') === -1" :src="'/document/' + region.image.path" alt="Card image">
                  <img style="height: 200px; width: 100%; display: block;" v-if="region.image != null && region.image.path.indexOf('http') !== -1" :src="region.image.path" alt="Card image">
                  <div class="card-body">
                    <p class="card-text">{{region.presentation}}</p>
                    <button class="btn btn-secondary" @click="ToRoom(region.id)">Choose</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="currentStep === 2" class="w-100" key="2">
            <h3>
              Great choice! Now choose a Room. We're sure you'll find something to your liking
            </h3>
            <div class="row" v-for='(grooms, gIndex) in groupedRooms'>
              <div v-for="room in grooms" class="col-lg px-1">
                <div class="card mb-3">
                  <h3 class="card-header">{{room.summary}}</h3>
                  <img style="height: 200px; width: 100%; display: block;" v-if="room.image != null && room.image.path.indexOf('http') === -1" :src="'/document/' + room.image.path" alt="Card image">
                  <img style="height: 200px; width: 100%; display: block;" v-if="room.image != null && room.image.path.indexOf('http') !== -1" :src="room.image.path" alt="Card image">
                  <div class="card-body">
                    <p class="card-text">{{room.description}}</p>
                    <p class="card-text">{{room.superficy}}</p>
                    <p class="card-text">{{room.capacity}}</p>
                    <p class="card-text">{{room.price}}</p>
                    <button class="btn btn-secondary" @click="ToInfo(room.id)">Choose</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="currentStep === 3" class="w-100" key="3">
            <h3>
              Now tell us about you and we're good to go!
            </h3>
            <form>
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="Enter First name"
                       v-model="firstName">
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Enter Last name" v-model="lastName">
              </div>
              <div class="form-group">
                <label for="birthdate">Birthdate</label>
                <input type="text" class="form-control" id="birthdate" aria-describedby="birthdateHelp"
                       placeholder="Enter birthdate"
                       v-model="birthdate">
                <small id="birthdateHelp" class="form-text text-muted">Please input as DD/MM/YYYY</small>
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email"
                       v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                  else.</small>
              </div>
              <div class="form-group">
                <label for="telephone">Telephone</label>
                <input type="text" class="form-control" id="telephone" aria-describedby="telHelp"
                       placeholder="Enter telephone number"
                       v-model="telephone">
                <small id="telHelp" class="form-text text-muted">Your telephone number we'll be given to the owner of
                  the listing your trying to rent.</small>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter address"
                       v-model="address">
              </div>
              <div class="form-group">
                <label for="countryCode">Country</label>
                <input type="text" class="form-control" id="countryCode" aria-describedby="countryCodeHelp"
                       placeholder="Enter country code (E.g FR)"
                       v-model="countryCode">
                <small id="countryCodeHelp" class="form-text text-muted">If you don't know your country code you can
                  find it <a href="https://en.wikipedia.org/wiki/ISO_3166-1" target="_blank">here</a></small>
              </div>
              <div class="form-group">
                <label for="Occupants">How many will be staying?</label>
                <select class="custom-select form-control" id="occupants" aria-describedby="occupantHelp" v-model="occupants">
                  <option v-for="n in rooms.find(room => {return room.id === this.chosenRoom}).capacity">{{ n }}
                  </option>
                </select>
                <small id="occupantHelp" class="form-text text-muted">(You included)</small>
              </div>
              <button class="btn btn-primary" @click="submit()">Submit</button>
            </form>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "index",
        data() {
            return {
                currentStep: 1,
                groupedRegions: [],
                groupedRooms: [],
                //Form Data
                chosenRegion: -1,
                chosenRoom: -1,
                firstName: "",
                lastName: "",
                email: "",
                telephone: "",
                address: "",
                occupants: 0,
            }
        },

        computed: mapGetters({
            regionError: 'region/list/error',
            regions: 'region/list/items',
            regionLoading: 'region/list/isLoading',
            regionView: 'region/list/view',
            roomError: 'room/list/error',
            rooms: 'room/list/items',
            roomLoading: 'room/list/isLoading',
            roomView: 'room/list/view'
        }),

        created () {
            let that = this;
            this.$store.dispatch('region/list/default').then(() => {
                that.groupedRegions = that.chunk(that.regions, 3);
            });
        },

        methods: {
            chunk: function (arr, size) {
                var newArr = [];
                for (var i = 0; i < arr.length; i += size) {
                    newArr.push(arr.slice(i, i + size));
                }
                return newArr;
            },
            ToRegion() {
                this.chosenRegion = -1;
                this.chosenRoom = -1;
                this.resetForm();
                this.currentStep = 1;
            },
            ToRoom(regionId) {
                if (typeof regionId != "undefined") {
                    this.chosenRegion = regionId;
                }
                let that = this;
                this.$store.dispatch('room/list/default', { regions: this.chosenRegion }).then(() => {
                    that.groupedRooms = that.chunk(that.rooms, 3);
                });
                this.chosenRoom = -1;
                this.resetForm();
                this.currentStep = 2;
            },
            ToInfo(roomId) {
                if (typeof roomId != "undefined") {
                    this.chosenRoom = roomId;
                }
                this.currentStep = 3;
                this.resetForm();
            },
            resetForm() {
                this.firstName = "";
                this.lastName = "";
                this.email = "";
                this.telephone = "";
                this.address = "";
                this.occupants = 0;
            },
            submit() {

            },
        }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
