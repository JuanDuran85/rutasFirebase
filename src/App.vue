<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'Login'}">Login</router-link> |
      <router-link :to="{name: 'Register'}">Registro</router-link> |
      <router-link :to="{name: 'Agregar'}">Agregar</router-link> |
      <router-link v-if="uid" :to="{name: 'Usuarios'}">Usuarios</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'App',
  data() {
    return {
      uid: ''
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName);
        this.uid = user.uid;
        console.log("Si hay usuario con sesión activa");
      } else {
        console.log("No hay usuario con sesión activa...")
        this.uid = "";
      }
    });

    this.$store.dispatch('traerData'); 
  },
}
</script>

<style lang="scss">

</style>
