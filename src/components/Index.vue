<template>
  <div>
    <div class="container-fluid p-0 vh-100">
      <div class="parallax"></div>
      <div class="container">
        <h1 class="py-5" style="font-size: 4em;">
          RVoy
          <small class="text-muted">An escape into the World!</small>
        </h1>
      </div>
    </div>
    <div class="container p-0 vh-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg">
          <h3>Choose</h3>
          <p>With our simple design, you'll find many opportunities and homes that we're sure you'll love</p>
        </div>
        <div class="col-lg">
          <h3>Book</h3>
          <p>Then you only have to book with our 2-min form which is easy and intuitive</p>
        </div>
        <div class="col-lg">
          <h3>Enjoy</h3>
          <p>Travel to your destination and escape your daily life</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .parallax {
    /* The image used */
    background-image: url("../assets/img/landing.jpg");

    /* Full height */
    height: 67%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .filler {
    height: 2000px;
  }
</style>
