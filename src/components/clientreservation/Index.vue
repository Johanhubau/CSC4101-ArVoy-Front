<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col px-0">
        <button type="button" class="btn btn-secondary btn-block px-0"
                :class="{ disabled: currentStep < 0, 'btn-info': currentStep === 0 }"
                @click="Init()">Choose your dates
        </button>
      </div>
      <div class="col px-0">
        <button type="button" class="btn btn-secondary btn-block px-0"
                :class="{ disabled: currentStep < 1, 'btn-info': currentStep === 1 }"
                :disabled="currentStep < 1" @click="ToRegion()">Choose a Region
        </button>
      </div>
      <div class="col px-0">
        <button type="button" class="btn btn-secondary btn-block px-0"
                :class="{ disabled: currentStep < 2, 'btn-info': currentStep === 2 }"
                :disabled="currentStep < 2" @click="ToRoom()">Choose a Room
        </button>
      </div>
      <div class="col px-0">
        <button type="button" class="btn btn-secondary btn-block px-0"
                :class="{ disabled: currentStep < 3, 'btn-info': currentStep === 3 }"
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
          <div v-if="currentStep === 0" class="w-100" key="0">
            <h3>
              Tell us your plans
            </h3>
            <br>
            <form v-on:submit.prevent>
              <div class="form-group">
                <label for="occupants">How many will be staying?</label>
                <select class="custom-select form-control" id="occupants" aria-describedby="occupantHelp"
                        v-model="occupants" required>
                  <option v-for="n in [1,2,3,4,5]" :selected="n === occupants ? selected : ''">{{ n }}
                  </option>
                </select>
                <small id="occupantHelp" class="form-text text-muted">(You included)</small>
              </div>

              <p>Check-in</p>
              <datepicker v-model="start" name="start" :bootstrap-styling="true" required></datepicker>
              <br>
              <p>Check-out</p>
              <datepicker :disabled-dates="this.disabledDatesEnd" v-model="until" name="until"
                          :bootstrap-styling="true" required></datepicker>
              <br>
              <button class="btn btn-primary w-100" @click="ToRegion()">Continue</button>
            </form>
          </div>
          <div v-else-if="currentStep === 1" class="w-100" key="1">
            <h3>
              Ready? Let's start by choosing a region.
            </h3>
            <br>
            <div class="row" v-for='(gregions, gIndex) in groupedRegions'>
              <div class="card-deck">
                <div v-for="region in gregions" class="card mb-3">
                  <img class="card-img-top" v-if="region.image != null"
                       :src="(region.image.path.indexOf('http') === -1 ? '/document/' : '') + region.image.path"
                       alt="Card image">
                  <h3 class="card-header">{{region.name}}</h3>
                  <div class="card-body">
                    <p class="card-text">{{region.presentation}}</p>
                  </div>
                  <button class="btn btn-secondary card-footer" @click="ToRoom(region.id)">Choose</button>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="currentStep === 2" class="w-100" key="2">
            <h3>
              Great choice! Now choose a Room. We're sure you'll find something to your liking
            </h3>
            <br>
            <div class="row" v-for='(grooms, gIndex) in groupedRooms'>
              <div class="card-deck">
                <div class="card mb-3" v-for="room in grooms">
                  <room-template :room="room" :embedded="true" :action="ToInfo" :actionText="'Choose'"></room-template>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="currentStep === 3" class="w-100" key="3">
            <h3 v-if="hasInformation">
              We already have the following information, just make sure it's all good!
            </h3>
            <h3 v-else>
              Now tell us about you and we're good to go!
            </h3>
            <form @submit.prevent="submit">
              <h5 class="py-3">So... This is you</h5>
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="Enter First name"
                       v-model="firstName">
                <div
                  v-if="isInvalid('firstname')"
                  class="invalid-feedback">{{ violations.firstname }}</div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Enter Last name" v-model="lastName">
                <div
                  v-if="isInvalid('lastname')"
                  class="invalid-feedback">{{ violations.lastname }}</div>
              </div>
              <div class="form-group">
                <label for="birthdate">Birthdate</label>
                <input type="text" class="form-control" id="birthdate" aria-describedby="birthdateHelp"
                       placeholder="Enter birthdate"
                       v-model="birthdate">
                <small id="birthdateHelp" class="form-text text-muted">Please input as DD/MM/YYYY</small>
                <div
                  v-if="isInvalid('birthdate')"
                  class="invalid-feedback">{{ violations.birthdate }}</div>
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email"
                       v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                  else.</small>
                <div
                  v-if="isInvalid('email')"
                  class="invalid-feedback">{{ violations.email }}</div>
              </div>
              <div class="form-group">
                <label for="telephone">Telephone</label>
                <input type="text" id="telephone" aria-describedby="telHelp"
                       :class="['form-control', isInvalid('telephone') ? 'is-invalid' : '']"
                       placeholder="Enter telephone number"
                       v-model="telephone">
                <small id="telHelp" class="form-text text-muted">Your telephone number we'll be given to the owner of
                  the listing your trying to rent.</small>
                <div
                  v-if="isInvalid('telephone')"
                  class="invalid-feedback">{{ violations.telephone }}</div>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter address"
                       v-model="address">
                <div
                  v-if="isInvalid('address')"
                  class="invalid-feedback">{{ violations.address }}</div>
              </div>
              <div class="form-group">
                <label for="countryCode">Country</label>
                <input type="text" class="form-control" id="countryCode" aria-describedby="countryCodeHelp"
                       placeholder="Enter country code (E.g FR)"
                       v-model="countryCode">
                <small id="countryCodeHelp" class="form-text text-muted">If you don't know your country code you can
                  find it <a href="https://en.wikipedia.org/wiki/ISO_3166-1" target="_blank">here</a></small>
                <div
                  v-if="isInvalid('country')"
                  class="invalid-feedback">{{ violations.country }}</div>
              </div>
              <div v-for="index in occupants-1" class="pb-5">
                <h5 class="py-3">Occupant {{index+1}}:</h5>
                <div class="form-group">
                  <label :for="'firstName' + index">First Name</label>
                  <input type="text" class="form-control" :id="'firstName' + index" placeholder="Enter First name"
                         v-model="occFirstName[index]">
                </div>
                <div class="form-group">
                  <label :for="'lastName' + index">Last Name</label>
                  <input type="text" class="form-control" :id="'lastName' + index" placeholder="Enter Last name"
                         v-model="occLastName[index]">
                </div>
                <div class="form-group">
                  <label :for="'birthdate' + index">Birthdate</label>
                  <input type="text" class="form-control" :id="'birthdate' + index"
                         placeholder="Enter birthdate"
                         v-model="occBirthdate[index]">
                </div>
                <div class="form-group">
                  <label :for="'tel' + index">Telephone {{ occTelephone[index] }}</label>
                  <input type="text" class="form-control" :id="'tel' + index"
                         placeholder="Enter telephone"
                         v-model="occTelephone[index]">
                </div>
                <div class="form-group">
                  <label :for="'address' + index">Address {{ occAddress[index] }}</label>
                  <input type="text" class="form-control" :id="'address' + index"
                         placeholder="Enter address"
                         v-model="occAddress[index]">
                </div>
              </div>
              <button class="btn btn-primary">Submit</button>
            </form>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Datepicker from "vuejs-datepicker";
    import SecurityAPI from "../../api/security";

    export default {
        name: "index",
        components: {
            Datepicker
        },
        data() {
            return {
                currentStep: 0,
                groupedRegions: [],
                groupedRooms: [],
                //Form Data
                chosenDates: [],
                chosenRegion: -1,
                chosenRoom: -1,
                firstName: '',
                lastName: "",
                email: "",
                telephone: "",
                address: "",
                occupants: 0,
                countryCode: '',
                start: null,
                until: null,
                occFirstName: [],
                occLastName: [],
                occBirthdate: [],
                occTelephone: [],
                occAddress: []
            }
        },

        computed: {
            disabledDatesStart() {
                return {to: this.start};
            },
            disabledDatesEnd() {
                return {to: this.start, from: this.until};
            },
            hasInformation() {
                return this.$store.getters["security/hasInformation"];
            },
            violations () {
                return this.errors || {}
            },
            ...mapGetters({
                regionError: 'region/list/error',
                regions: 'region/list/items',
                regionLoading: 'region/list/isLoading',
                regionView: 'region/list/view',
                roomError: 'room/list/error',
                rooms: 'room/list/items',
                roomLoading: 'room/list/isLoading',
                roomView: 'room/list/view',
                errors: 'client/create/violations'
            })
        },


        created() {

        },

        methods: {
            isInvalid (key) {
                return Object.keys(this.violations).length > 0 && this.violations[key]
            },
            chunk: function (arr, size) {
                var newArr = [];
                for (var i = 0; i < arr.length; i += size) {
                    newArr.push(arr.slice(i, i + size));
                }
                return newArr;
            },
            Init() {
                this.currentStep = 0;
                this.chosenRegion = -1;
                this.chosenRoom = -1;
                this.chosenDates = [];
            },
            ToRegion() {
                let that = this;
                for (var n = 0; n < this.occupants -1; n += 1) {
                    this.occFirstName.push('');
                    this.occLastName.push('');
                    this.occBirthdate.push('');
                    this.occTelephone.push('');
                    this.occAddress.push('');
                }
                console.log(this.start);
                this.$store.dispatch('region/list/default', {
                        'rooms.capacity[gte]': this.occupants,
                        'rooms.unavailablePeriods[between_start]': this.start.toLocaleDateString("en-EN"),
                        'rooms.unavailablePeriods[between_until]': this.until.toLocaleDateString("en-EN"),
                        'rooms.reservations[between_start]': this.start.toLocaleDateString("en-EN"),
                        'rooms.reservations[between_until]': this.until.toLocaleDateString("en-EN"),
                    }
                ).then(() => {
                    that.groupedRegions = that.chunk(that.regions, 3);
                });
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
                this.$store.dispatch('room/list/default', {
                    regions: this.chosenRegion,
                    'capacity[gte]': this.occupants,
                    'unavailablePeriods[between_start]': this.start.toLocaleDateString("en-EN"),
                    'unavailablePeriods[between_until]': this.until.toLocaleDateString("en-EN"),
                    'reservations[between_start]': this.start.toLocaleDateString("en-EN"),
                    'reservations[between_until]': this.until.toLocaleDateString("en-EN"),
                }).then(() => {
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
                if (this.$store.getters["security/isAuthenticated"]) {
                    this.firstName = this.$store.getters["security/getInformation"].firstname;
                    this.lastName = this.$store.getters["security/getInformation"].lastname;
                    this.birthdate = this.$store.getters["security/getInformation"].birthdate;
                    this.email = this.$store.getters["security/getInformation"].email;
                    this.telephone = this.$store.getters["security/getInformation"].telephone;
                    this.address = this.$store.getters["security/getInformation"].address;
                    this.countryCode = this.$store.getters["security/getInformation"].country;
                }
            },
            submit() {
                let that = this;
                if (this.$store.getters["security/getInformation"].client_id == null) {
                    this.$store.dispatch("client/create/create", {
                        firstname: this.firstName,
                        lastname: this.lastName,
                        telephone: this.telephone,
                        address: this.address,
                        birthdate: this.birthdate,
                        user: "api/users/" + this.$store.getters["security/getInformation"].user_id,
                    }).then(async (client) => {
                        /*await this.$store.dispatch("user/update/update", {
                           "@id": "api/users/" + this.$store.getters["security/getInformation"].user_id,
                            "client": "api/users/" + client.id,
                        });*/
                        var occupantsId = [];
                        for (var i = 0; i < that.occupants - 1; i++) {
                            await that.$store.dispatch("client/create/create", {
                                firstname: that.occFirstName[i+1],
                                lastname: that.occLastName[i+1],
                                telephone: that.occTelephone[i+1],
                                address: that.occAddress[i+1],
                                birthdate: that.occBirthdate[i+1]
                            }).then((occupant) => {
                                occupantsId.push("api/clients/" + occupant.id);
                            })
                        }
                        await that.$store.dispatch("reservation/create/create", {
                            client: "api/clients/" + client.id,
                            occupants: occupantsId,
                            room: "api/rooms/" + that.chosenRoom,
                            start: that.start,
                            until: that.until,
                            validated: false,
                            message: ""
                        }).then(async (reservation) => {""
                            await this.$store.dispatch("security/onRefresh", await SecurityAPI.checkLogin());
                            this.$router.push({path: "/home/"})
                        })
                    })
                }
            },
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
</style>
