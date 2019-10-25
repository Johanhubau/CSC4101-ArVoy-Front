<template>
  <div>
    <nav class="px-5 navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">RVoy</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/regions">Regions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/rooms">Rooms</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
