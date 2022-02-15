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
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
import { useStore } from 'vuex'

export default {
  name: 'Nav',
  methods: {
    async logout () {
      try {
        await axios.post('http://localhost:5000/api/users/logout', {
          withCredentials: true,
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' }
        })
        // Invalidate cookie and set cookie to expire

        await this.$router.push({ name: 'Login' })
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    auth () {
      const store = useStore()
      return store.state.authenticated
    }
  }
}
</script>

<style scoped></style>
