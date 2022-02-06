<template>
  <div>
    <h1>Home</h1>
    <h3>Hi {{ user.username }}</h3>
  </div>
</template>

<script>
import axios from 'axios'

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
    } catch (err) {
      this.error = err.message
    }
  }
}
</script>

<style scoped></style>
