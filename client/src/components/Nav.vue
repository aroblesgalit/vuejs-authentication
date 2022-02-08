<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Login' }"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Register' }"
              >Register</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-else>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Login' }"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'

const store = useStore()

export default {
  name: 'Nav',
  data () {
    return {
      auth: store.state.authenticated
    }
  }
}
</script>

<style scoped></style>
