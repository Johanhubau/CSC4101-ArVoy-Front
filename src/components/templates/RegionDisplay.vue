<template>
  <div class="region-container py-2">
    <div class="col p-3">
      <h3 class="text-center py-2">Region Name</h3>
      <div class="image">

      </div>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <p>Presentation: <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi leo. Aliquam
            tristique, ligula non euismod semper, sem ex malesuada libero, id ullamcorper ex lacus ac libero. Mauris
            varius convallis lorem, vitae bibendum magna.</small></p>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <p>County: <small>FR</small></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RegionDisplay"
    }
</script>

<style scoped>
  .region-container {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
  }

  .image {
    height: 400px;
    background-color: deeppink;
  }
</style>
