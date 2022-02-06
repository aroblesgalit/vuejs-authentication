<template>
  <h1>Home</h1>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      error: ''
    }
  },
  async created () {
    try {
      await axios.get('http://localhost:5000/api/users', {
        withCredentials: true
      })
    } catch (err) {
      this.error = err.message
    }
  }
}
</script>

<style scoped></style>
