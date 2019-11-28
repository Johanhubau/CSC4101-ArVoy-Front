<template>
    <div class="room-container py-2">
      <transition name="fade" mode="out-in">
        <div v-if="mode === 'room'" class="col p-3" key="1">
          <h3 class="text-center py-2">{{name}}</h3>
          <div class="image">

          </div>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Description: <small>{{description}}</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Superficy: <small>{{superficy}}m</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Capacity: <small>{{capacity}} Occupants</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <p>Price: <small>{{price}}</small></p>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <button class="btn btn-sm btn-secondary" @click="ToComment">See Comments</button>
            </li>
          </ul>
        </div>
        <div v-if="mode ==='comment'" class="col p-3" key="2">
          <h3 class="text-center py-2">{{name}}</h3>
          <div v-for="comment in comments">
            <p>{{comment['firstname']}} {{comment['lastname']}}<small>{{comment['content']}}</small></p>
          </div>
          <button class="btn btn-sm btn-secondary" @click="ToRoom">Back</button>
        </div>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "Display",
        props: {
            name: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            superficy: {
                type: Number,
                default: 0
            },
            capacity: {
                type: Number,
                default: 0
            },
            price: {
                type: Number,
                default: 0
            },
        },
        data () {
            return {
                mode: 'room',
            }
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
