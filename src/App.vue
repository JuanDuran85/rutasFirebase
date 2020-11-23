<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'Login'}">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">

</style>
