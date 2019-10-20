<template>
  <div id="app">
    <h1>CSC4101</h1>
    <p>
      <router-link to="/regions">Go to Region list</router-link>
      <router-link to="/rooms">Go to Rooms list</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>