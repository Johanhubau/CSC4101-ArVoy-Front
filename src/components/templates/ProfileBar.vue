<template>
  <div class="profile-container">
    <div class="picture p-4">
      <img class="profile" src="" alt="Test">
    </div>
    <div v-if="item" class="text-center">
      <h2 class="pb-3">{{ item['firstname'] }} {{ item['lastname'] }}</h2>
      <div :class="{ 'text-right mr-4': type !== 'staff'}" class="p-4">
        <h2 v-if="item['title']" class="my-1">{{ item['title'] }}</h2>
        <p v-if="birthdate !== ''" class="my-1">{{ this.birthdate }} Years Old</p>
        <p v-if="isPrivate && item['telephone']" class="my-1">{{ item['telephone'] }}</p>
        <p v-if="(isPrivate || type === 'staff') && user" class="my-1">{{ user['email'] }}</p>
        <p v-if="isPrivate && item['address']" class="my-1">{{ item['address'] }}</p>
      </div>
    </div>
    <div class="text-right mr-4 pt-2">
      <a v-if="isPrivate" class="py-1 nav-link" :href="settingsRoute">Account settings</a>
      <a v-if="isPrivate" class="py-1 nav-link" href="/logout">Logout</a>
    </div>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "ProfileBar",

        props: {
            isPrivate: {
                type: Number,
                default: 1
            },
            type: {
                type: String,
                default: "owner"
            }
        },

        data () {
            return {
                birthdate: '',
                item: null,
                settingsRoute: ''
            }
        },

        computed: mapGetters({
            deleteError: 'owner/del/error',
            error: 'owner/show/error',
            isLoading: 'owner/show/isLoading',
            owner: 'owner/show/retrieved',
            user: 'user/show/retrieved',
            client: 'client/show/retrieved',
            staff: 'staff/show/retrieved'
        }),

        created() {
            let that = this;
            if (this.type === "owner") {
                this.$store.dispatch('owner/show/retrieve', "/api/owners/" + this.$route.params.id).then(() => {
                    if (that.isPrivate) {
                        that.$store.dispatch('user/show/retrieve', this.owner["user"]);
                    }
                    if (this.owner["birthdate"]){
                        let ageDifMs = Date.now() - new Date(this.owner["birthdate"]);
                        let ageDate = new Date(ageDifMs); // miliseconds from epoch
                        this.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970);
                    }
                    that.item = this.owner;
                    that.settingsRoute = '/owners/' + that.$route.params.id + '/settings';
                });
            } else if (this.type === "client") {
                this.$store.dispatch('client/show/retrieve', "/api/clients/" + this.$route.params.id).then(() => {
                    if (that.isPrivate) {
                        that.$store.dispatch('user/show/retrieve', this.client["user"]);
                    }
                    if (this.client["birthdate"]){
                        let ageDifMs = Date.now() - new Date(this.client["birthdate"]);
                        let ageDate = new Date(ageDifMs); // miliseconds from epoch
                        this.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970);
                    }
                    that.item = this.client;
                    that.settingsRoute = '/home/' + that.$route.params.id + '/settings';
                });
            } else if (this.type === "staff") {
                this.$store.dispatch('staff/show/retrieve', "/api/staff/" + this.$route.params.id).then(() => {
                    this.$store.dispatch('user/show/retrieve', this.staff["user"]);
                    that.item = this.staff;
                    that.settingsRoute = '/';
                });
            }

        },

        methods: {
            ...mapActions({
                del: 'owner/del/del',
                reset: 'owner/show/reset',
                retrieve: 'owner/show/retrieve'
            }),
        }
    }
</script>

<style scoped>
  .profile-container {
    background-color: white;
    z-index: 1;
    width: 400px;
    position: fixed;
    top: 0;
    right: 0;
    left: auto;
    padding-top: 76px;
    height: 100%;
    -webkit-box-shadow: -2px 0px 5px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 0px 5px -2px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 0px 5px -2px rgba(0, 0, 0, 0.3);
  }

  .picture {
    width: 100%;
    min-height: 150px
  }

  img.profile {
    border-radius: 50%;
  }
</style>
