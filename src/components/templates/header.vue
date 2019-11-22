<template>
  <div>
    <nav class="px-5 py-3 navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">RVoy</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/reserve">Make a reservation</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Connect</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
