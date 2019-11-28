<template>
    <div v-bind:class="{'room-container py-2': !embedded}">
      <transition name="fade" mode="out-in">
        <div v-if="mode === 'room'" class="col p-3" key="1">
          <h3 class="text-center py-2">{{room.summary}}</h3>
          <img class="w-100"
               :src="(room.image.path.indexOf('http') === -1 ? '/document/' : '') + room.image.path">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Description: <small>{{room.description}}</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Superficy: <small>{{room.superficy}}m</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Capacity: <small>{{room.capacity}} Occupants</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Price: <small>{{room.price}}</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <button class="btn btn-sm btn-secondary" @click="ToComment">See Comments</button>
            </li>
            <li v-if="back != null" class="list-group-item d-flex justify-content-between align-items-center">
              <button class="btn btn-sm btn-secondary" @click="back()">Back</button>
            </li>
          </ul>
        </div>
        <div v-if="mode ==='comment'" class="col p-3" key="2">
          <h3 class="text-center py-2">{{room.summary}}</h3>
          <ul class="p-0">
            <li v-if="commentsData" v-for="comment in commentsData" class="list-group-item d-flex justify-content-between align-items-center">
              <div class="row pl-3 w-100">
                <div class="col-10 p-0 justify-content-center">
                  <p>{{comment['comment']}}</p>
                </div>
                <div class="col p-0 text-right">
                  {{comment['rating']}}/5
                </div>
              </div>
            </li>
          </ul>
          <button class="btn btn-sm btn-secondary" @click="ToRoom">Back</button>
        </div>
      </transition>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Display",
        computed: mapGetters({
            deleteError: 'room/del/error',
            error: 'room/show/error',
            isLoading: 'room/show/isLoading',
            retrievedRoom: 'room/show/retrieved'
        }),
        props: {
            room: {
                type: Object
            },
            back: {
                type: Function
            },
            embedded: {
                type: Boolean
            }
        },
        data () {
            return {
                mode: 'room',
                commentsData: []
            }
        },
        created() {
            let that = this;
            if (this.room == null) this.id = decodeURIComponent(this.$route.params.id);

            this.$store.dispatch('room/show/retrieve', "/api/rooms/" + this.room.id).then((data) => {
                that.room = that.retrievedRoom;
                for (var i = 0; i < that.room.comments.length; i++) {

                    this.$store.dispatch('comment/show/retrieve', that.room.comments[i]).then((comment) => {
                        that.commentsData.push(comment);
                        console.log(that.commentsData);
                    });
                }
            });
        },
        methods: {
            ToComment () {
                this.mode = 'comment';
            },
            ToRoom () {
                this.mode = 'room';
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

  .room-container {
    width: 600px;
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
