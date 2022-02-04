<template>
  <form>
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <input type="text" class="form-control" placeholder="Username" required />
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      required
    />
    <input
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
export default {
  name: 'Register'
}
</script>

<style scoped></style>
