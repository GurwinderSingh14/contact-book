<template>
  <div>
    <h1>Contact Book</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Optional: some styles */
</style>
