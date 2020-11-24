<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'Login'}">Login</router-link> |
      <router-link :to="{name: 'Register'}">Registro</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'App',
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName);
        console.log("Si hay usuario con sesión activa");
      } else {
        console.log("No hay usuario con sesión activa...")
      }
    });
  },
}
</script>

<style lang="scss">

</style>
