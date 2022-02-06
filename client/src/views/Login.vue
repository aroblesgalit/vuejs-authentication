<template>
  <form @submit.prevent="formSubmit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <input
      v-model="username"
      type="text"
      class="form-control"
      placeholder="Username"
      required
    />
    <input
      v-model="password"
      type="password"
      class="form-control"
      placeholder="Password"
      required
    />
    <button class="w-100 btn btn-lg btn-primary" type="submit">
      Sign in
    </button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async formSubmit () {
      try {
        await axios.post(
          'http://localhost:5000/api/users/login',
          {
            username: this.username,
            password: this.password
          },
          { withCredentials: true }
        )
        await this.$router.push({ name: 'Home' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped></style>
