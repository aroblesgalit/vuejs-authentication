<template>
  <form @submit.prevent="formSubmit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
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
    <input
      v-model="confirm"
      type="password"
      class="form-control"
      placeholder="Confirm password"
      required
    />
    <button class="w-100 btn btn-lg btn-primary" type="submit">
      Submit
    </button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    async formSubmit () {
      console.log(this.username, this.password, this.confirm)
      if (this.password !== this.confirm) {
        return alert('Please confirm password matches.')
      }
      await axios.post('http://localhost:5000/api/users/register', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style scoped></style>
