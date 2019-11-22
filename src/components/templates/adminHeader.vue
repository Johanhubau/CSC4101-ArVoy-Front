<template>
  <div>
    <nav class="px-5 py-3 navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/admin">RVoy</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Entities
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/admin/clients">Client</router-link>
              <router-link class="dropdown-item" to="/admin/comments">Comments</router-link>
              <router-link class="dropdown-item" to="/admin/owners">Owners</router-link>
              <router-link class="dropdown-item" to="/admin/regions">Regions</router-link>
              <router-link class="dropdown-item" to="/admin/reservations">Reservations</router-link>
              <router-link class="dropdown-item" to="/admin/rooms">Rooms</router-link>
              <router-link class="dropdown-item" to="/admin/staff">Staff</router-link>
              <router-link class="dropdown-item" to="/admin/unavailable_periods">Unavailable Periods</router-link>
              <router-link class="dropdown-item" to="/admin/users">Users</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
