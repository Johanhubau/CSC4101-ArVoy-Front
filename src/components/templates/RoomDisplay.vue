<template>
    <div class="room-container py-2">
      <div class="col p-3">
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
        </ul>
      </div>
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
        }
    }
</script>

<style scoped>
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
