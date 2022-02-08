<template>
  <div>
    <h1>Home</h1>
    <h3>Hi {{ user.username }}</h3>
  </div>
</template>

<script>
import axios from 'axios'
import { useStore } from 'vuex'

const store = useStore()

export default {
  name: 'Home',
  data () {
    return {
      user: {},
      error: ''
    }
  },
  async created () {
    try {
      const response = await axios.get('http://localhost:5000/api/users', {
        withCredentials: true
      })
      this.user = await response.data

      await store.dispatch('setAuth', true)
    } catch (err) {
      store.dispatch('setAuth', false)
    }
  }
}
</script>

<style scoped></style>
